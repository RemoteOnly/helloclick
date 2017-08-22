<?php

namespace App\Http\Controllers\Admin;

use App\Models\Comment;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CommentController extends Controller
{
    public static $filters = ['content' => '内容', 'user_id' => '用户id', 'user_name' => '用户', 'image_id' => '图片id'];

    public function index(Request $request)
    {
        $filter = $request->get('filter');
        $keyword = trim($request->get('keyword', ''));

        $builder = Comment::orderBy('image_id', 'desc')->orderBy('created_at');

        if ($filter == 'content') {
            $builder->where('content', 'like', '%' . $keyword . '%');
        } elseif ($filter == 'user_name') {
            $builder->whereHas('user', function ($query) use ($keyword) {
                $query->where('name', 'like', '%' . $keyword . '%');
            });
        } elseif ($filter == 'user_id') {
            $builder->where('user_id', $keyword);
        } elseif ($filter == 'image_id') {
            $builder->where('image_id', $keyword);
        }

        $comments = $builder->with(['user', 'image'])->paginate(40);

        return view('admin.comment.index', compact('comments', 'filter', 'keyword'))
            ->with('filters', self::$filters);
    }

    public function destroy(Request $request, $comment_id)
    {
        $comment = Comment::find($comment_id);
        if (!$comment) {
            return response()->json(['status' => 0, 'message' => '没有找到相关评论']);
        }

        $result = $comment->delete();
        if ($result) {
            $message = ['status' => 1, 'message' => '删除成功'];
        } else {
            $message = ['status' => 0, 'message' => '删除失败'];
        }

        return response()->json($message);
    }
}
