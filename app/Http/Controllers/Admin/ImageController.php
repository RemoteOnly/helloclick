<?php

namespace App\Http\Controllers\Admin;

use App\Models\Image;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class ImageController extends Controller
{
    public static $filters = ['name' => '图片名', 'user_name' => '用户名', 'tag_name' => '标签名'];

    public function index(Request $request)
    {
        $tag_id = $request->get('tag_id');
        $user_id = $request->get('user_id');
        $filter = $request->get('filter');
        $keyword = trim($request->get('keyword', ''));

        $builder = Image::orderBy('created_at', 'desc');
        if ($filter == 'name') {
            $builder->where('name', 'like', '%' . $keyword . '%');
        } elseif ($filter == 'user_name') {
            $builder->whereHas('user', function ($query) use ($keyword) {
                $query->where('name', 'like', '%' . $keyword . '%');
            });
        } elseif ($filter == 'tag_name') {
            $builder->whereHas('tags', function ($query) use ($keyword) {
                $query->where('name', 'like', '%' . $keyword . '%');
            });
        }

        if ($tag_id) {
            $builder->whereHas('tags', function ($query) use ($tag_id) {
                $query->where('id', $tag_id);
            });
        }

        if ($user_id) {
            $builder->where('user_id', $user_id);
        }

        $images = $builder->paginate(20);
        if (key_exists($filter, self::$filters)) {
            $images->appends(['filter' => $filter, 'keyword' => $keyword]);
        } else {
            $images->appends(['user_id' => $user_id, 'tag_id' => $tag_id]);
        }

        return view('admin.image.index', compact('images', 'filter', 'keyword'))
            ->with('filters', self::$filters);
    }

    public function destroy(Request $request, $image_id)
    {
        $image = Image::find($image_id);
        if (!$image) {
            return response()->json(['status' => 0, 'message' => '未找到相关图片']);
        }

        $result = $image->delete();
        if ($result) {
            $message = ['status' => 1, 'message' => '删除成功'];
        } else {
            $message = ['status' => 0, 'message' => '删除失败'];
        }

        return response()->json($message);
    }
}
