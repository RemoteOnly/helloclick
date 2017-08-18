<?php

namespace App\Http\Controllers;

use App\Models\Image;
use App\Models\Tag;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\URL;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $load_images_url = URL::route('load_images');
        $users = DB::table('images')
            ->selectRaw('user_id, count(1) as images_count')
            ->groupBy('user_id')
            ->orderBy('images_count', 'desc')
            ->limit(3)
            ->get();

        $recommended_users = User::withCount(['fans', 'images'])
            ->whereIn('id', $users->pluck('user_id')->toArray())
            ->get();

        return view('home.index.index', compact('load_images_url', 'recommended_users'));
    }

    public function show(Request $request, $image_id = null)
    {
        $image = Image::with(['user', 'tags'])->find($image_id);
        $new_images = Image::where('user_id', $image->user_id)
            ->inRandomOrder()
            ->limit(6)
            ->get();

        return view('home.index.show', compact('image', 'new_images'));
    }


    public function showTaggedImages(Request $request, $slug = null)
    {
        $tag = Tag::where('slug', $slug)->first();
        if (!$tag) {
            flash()->message('没有找到要查找的内容，待等候补充', 'warning');
            return redirect()->route('index');
        }

        // 推荐用户
        $users = User::select('users.id')
            ->join('user_tag', 'users.id', '=', 'user_tag.user_id')
            ->where('user_tag.tag_id', $tag->id)
            ->orderBy('user_tag.images_count', 'desc')
            ->limit(3)
            ->get();

        $recommended_users = User::withCount(['fans', 'images'])
            ->whereIn('id', $users->pluck('id')->toArray())
            ->get();

        $load_images_url = URL::route('load_images', ['slug' => $slug]);
        return view('home.index.index', compact('load_images_url', 'recommended_users'));
    }
}
