<?php

namespace App\Http\Controllers;

use App\Models\Image;
use App\Models\User;
use Auth;
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
        })->withCount(['fans', 'images'])->paginate(3);

        foreach ($followings as &$following) {
            $images = Image::where('user_id', $following->id)
                ->orderBy('created_at')
                ->take(3)
                ->get();

            $following['recent_images'] = $images;
        }

        $user = $request->user()->withCount(['fans', 'images'])->first();

        return view('home.user.followings', compact('user', 'followings'));
    }

    public function settings()
    {
        return view('home.setting.index');
    }
}
