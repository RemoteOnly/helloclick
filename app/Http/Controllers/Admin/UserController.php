<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public static $filters = ['all' => '从所有分类', 'common' => '从普通用户', 'photographer' => '从摄影师'];

    /**
     * 用户列表首页
     *
     * @param Request $request
     * @return $this
     */
    public function index(Request $request)
    {
        $filter = $request->get('filter');
        $keyword = $request->get('keyword');

        $builder = User::withCount(['fans', 'images'])->orderBy('created_at', 'desc')
            ->withTrashed();

        if (key_exists($filter, self::$filters)) {
            if ($filter != 'all') {
                $builder->where('type', $filter);
            }
            $keyword = trim($keyword);
            if ($keyword != '') {
                $builder->where('name', 'like', '%' . $keyword . '%');
            }
        }

        $users = $builder->paginate(2);
        if (key_exists($filter, self::$filters)) {
            $users->appends(['filter' => $filter, 'keyword' => $keyword]);
        }

        return view('admin.user.index', compact('users', 'filter', 'keyword'))
            ->with('filters', self::$filters);
    }

    /**
     * 切换用户type
     *
     * @param Request $request
     * @param $user_id
     * @return \Illuminate\Http\JsonResponse
     */
    public function updateType(Request $request, $user_id)
    {
        $user = User::withTrashed()->find($user_id);

        if (!$user) {
            return response()->json(['stauts' => 0, 'message' => '用户不存在']);
        }

        if ($user->type == 'photographer') {
            $user->type = 'common';
        } else {
            $user->type = 'photographer';
        }

        $user->save();

        return response()->json(['status' => 1, 'message' => '切换成功', 'type' => $user->type]);
    }

    /**
     * 禁用用户
     *
     * @param Request $request
     * @param $user_id
     * @return \Illuminate\Http\JsonResponse
     */
    public function forbid(Request $request, $user_id)
    {
        $user = User::withTrashed()->find($user_id);
        if (!$user) {
            return response()->json(['status' => 0, 'message' => '未找到用户']);
        }

        if ($user->trashed()) {
            $user->restore();
        } else {
            $user->delete();
        }

        return response()->json([
            'status' => 1,
            'message' => '更新成功',
            'user_status' => $user->trashed() ? '已禁用' : '已启用'
        ]);
    }

    /**
     * 硬删除用户
     *
     * @param Request $request
     * @param $user_id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Request $request, $user_id)
    {
        $user = User::withTrashed()->find($user_id);
        if (!$user) {
            return response()->json(['status' => 0, 'message' => '未找到用户']);
        }

        $user->forceDelete();

        return response()->json(['status' => 1, 'message' => '删除成功']);
    }

    public function images(Request $request, $user_id)
    {
        $user = User::withTrashed()
            ->with('images')
            ->find($user_id);

        return view('admin.image.index', compact('user'));
    }
}
