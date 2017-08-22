<?php

namespace App\Http\Controllers\Admin;

use App\Models\Tag;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class TagController extends Controller
{
    public static $filters = ['name' => '名称', 'slug' => 'slug'];

    public function index(Request $request)
    {
        $filter = $request->get('filter');
        $keyword = $request->get('keyword');

        $builder = Tag::orderBy('display_order');
        if (key_exists($filter, self::$filters)) {
            $builder->where($filter, 'like', '%' . $keyword . '%');
        }

        $tags = $builder->get();

        return view('admin.tag.index', compact('tags', 'filter', 'keyword'))
            ->with('filters', self::$filters);
    }

    public function create()
    {
        return view('admin.tag.create');
    }

    public function store(Request $request)
    {
        // 验证数据的合法性
        $rules = [
            'name' => 'required',
            'slug' => 'required|alpha_dash',
            'display_order' => 'integer',
            'is_banner' => 'required|in:yes,no'
        ];
        $validator = Validator::make($request->except('_token'), $rules);
        if ($validator->fails()) {
            flash()->message($validator->messages()->first(), 'error');
            return back()->withInput();
        }

        $tag = Tag::create($request->all());
        if ($tag) {
            flash()->message('创建成功', 'success');
        } else {
            flash()->message('创建失败', 'error');
        }

        return back()->withInput();
    }

    public function destroy(Request $request, $tag_id)
    {
        $tag = Tag::find($tag_id);
        if (!$tag) {
            return response()->json(['status' => 0, 'message' => '未找到相关标签']);
        }

        $result = $tag->delete();
        if ($result) {
            $message = ['status' => 1, 'message' => '删除成功'];
        } else {
            $message = ['status' => 0, 'message' => '删除失败'];
        }

        return response()->json($message);
    }
}
