<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Image;
use App\Models\User;
use Auth;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\URL;

class UserController extends Controller
{
    public function index(Request $request, $id = null)
    {
        $slug = $request->get('slug');
        $user = User::with('tags')->withCount(['fans', 'images'])->find($id);
        if (!$user) {
            flash()->message('未找到指定用户', 'warning');
            $load_images_url = URL::route('load_images');
            return redirect()->route('index')->with(compact('load_images_url'));
        }

        $recommended_users = User::orderBy('id')->limit(3)->get();

        $params = ['user_id' => $user->id];
        if ($slug) {
            $params['slug'] = $slug;
        }
        //是否已关注
        if (Auth::check()) {
            $following = DB::table('followings')
                ->select('id')
                ->where(['user_id' => Auth::id(), 'photographer_id' => $id])
                ->get();
            if ($following->count()) {
                $has_followed = true;
            } else {
                $has_followed = false;
            }
        } else {
            $has_followed = false;
        }

        // 图片加载地址
        $load_images_url = URL::route('load_images', $params);

        return view('home.user.index', compact('load_images_url', 'recommended_users',
                'user', 'has_followed')
        );
    }

    public function followings(Request $request)
    {
        $followings = User::whereHas('fans', function ($query) use ($request) {
            $query->where('followings.user_id', $request->user()->id);
        })->withCount(['fans', 'images'])
            ->paginate(3);

        foreach ($followings as &$following) {
            $images = Image::where('user_id', $following->id)
                ->orderBy('created_at')
                ->take(3)
                ->get();

            $following['recent_images'] = $images;
        }

        $user = User::withCount(['fans', 'images'])->find($request->user()->id);

        return view('home.user.followings', compact('user', 'followings'));
    }

    public function cancelFollowing(Request $request, $user_id)
    {
        $count = Auth::user()->followings()->detach($user_id);
        if ($count) {
            $message = ['status' => 1, 'message' => '取消关注成功'];
        } else {
            $message = ['status' => 0, 'message' => '取消关注失败'];
        }

        return response()->json($message);
    }

    public function toggleFollowing(Request $request, $user_id)
    {
        $changes = Auth::user()->followings()->toggle($user_id);
        if (count($changes['detached']) > 0) {
            $message = ['status' => 1, 'message' => '取消关注成功'];
        } elseif (count($changes['attached']) > 0) {
            $message = ['status' => 1, 'message' => '关注成功'];
        } else {
            $message = ['status' => 0, 'message' => '操作失败，请稍候重试'];
        }

        return response()->json($message);
    }

    public function showFavors(Request $request)
    {
        $user = User::with('tags')
            ->withCount(['fans', 'images'])
            ->where('id', Auth::id())
            ->first();

        $slug = $request->get('slug');
        $photographer_id = $request->get('user_id');
        $has_followed = false;

        $params = ['favored_by_user_id' => $user->id];
        if ($slug) {
            $params['slug'] = $slug;
        }
        if ($photographer_id) {
            $params['user_id'] = $photographer_id;
        }

        // 图片加载地址
        $load_images_url = URL::route('load_images', $params);
        $recommended_users = [];
        return view('home.user.index', compact('load_images_url', 'recommended_users',
                'user', 'has_followed')
        );
    }

    public function favor(Request $request)
    {
        if ($request->ajax()) {
            $image_id = $request->get('image_id');
            $image = Image::find($image_id);
            if (!$image) {
                $message = ['status' => -1];
            } else {
                try {
                    $record = User::whereHas('favors', function ($query) use ($image_id) {
                        $query->where('image_id', $image_id);
                    })->where('id', Auth::id())
                        ->first();
                    $user = Auth::user();
                    if ($record) {
                        $user->favors()->detach($image_id);
                        $image->favor_count = $image->favor_count > 1 ? $image->favor_count-- : 0;
                        $image->save();
                        $favor_status = 0;
                    } else {
                        $user->favors()->attach($image_id, ['photographer_id' => $image->user_id]);
                        $image->favor_count++;
                        $image->save();
                        $favor_status = 1;
                    }
                    $message = ['status' => 1, 'favor_status' => $favor_status, 'message' => ''];

                } catch (Exception $e) {
                    $message = ['status' => 0, 'message' => '服务器出错，请刷新页面重试'];
                }
            }

            return response()->json($message);
        } else {
            return back();
        }
    }

    public function settings()
    {
        $user = Auth::user();

        return view('home.user.settings', compact('user'));
    }


}
