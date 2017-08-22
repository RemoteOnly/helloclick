<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Image;
use Auth;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CommentController extends Controller
{
    /**
     * 保存一个评论
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $rules = [
            'image_id' => 'required|integer',
            'content' => 'required',
            'at_user_id' => 'integer'
        ];

        $this->validate($request, $rules);

        $at_user_id = $request->get('at_user_id');
        $image_id = $request->get('image_id');
        $content = clean($request->get('content'));

        $image = Image::find($image_id);
        if (!$image) {
            return response()->json(['status' => 0, 'message' => '未找到对应的图片']);
        }

        DB::beginTransaction();
        try {
            // comment
            $comment = new Comment();
            $comment->content = $content;
            $comment->user_id = $request->user()->id;
            $comment->image_id = $image_id;
            $comment->save();
            // comment@user
            if ($at_user_id) {
                $comment->atUsers()->attach($at_user_id);
            }
            // image comment_count
            $image->comment_count++;
            $image->save();

            DB::commit();
            $message = ['status' => 1, 'message' => '添加评论成功'];
        } catch (Exception $exception) {
            $message = ['status' => 0, 'message' => '服务器系统异常，请稍候重试'];
            DB::rollBack();
        }

        return response()->json($message);
    }

    /**
     * 删除一个评论
     *
     * @param Request $request
     * @param null $comment_id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Request $request, $comment_id = null)
    {
        $comment = Comment::find($comment_id);
        if (!$comment) {
            return response()->json(['status' => 0, 'message' => '未找到指定评论']);
        }

        // 检查权限
        if ($comment->user->id != Auth::id()) {
            return response()->json(['status' => 0, 'message' => '您没有权限删除该评论']);
        }

        DB::beginTransaction();
        try {
            $comment->delete();
            $image = $comment->image;
            $image->comment_count--;
            $image->save();

            DB::commit();
            $message = ['status' => 1, 'message' => '删除成功'];
        } catch (Exception $exception) {
            $message = ['status' => 1, 'message' => '服务器异常，请稍候重试'];
            DB::rollBack();
        }

        return response()->json($message);
    }
}
