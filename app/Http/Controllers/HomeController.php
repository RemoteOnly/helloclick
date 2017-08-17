<?php

namespace App\Http\Controllers;

use App\Models\Image;
use App\Models\Tag;
use Cache;
use Illuminate\Http\Request;

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
        $favorites = Cache::remember('favorites', 24 * 60, function () {
            $favorites = Tag::favorite()->get();
            return $favorites;
        });

        return view('home.index.index', compact('favorites'));
    }

    public function show(Request $request)
    {
        return view('home.index.show');
    }

    public function loadImages(Request $request)
    {
        $offset = $request->get('offset', 0);
        $limit = $request->get('limit', 20);

        $images = Image::with(['tags', 'user'])->orderBy('created_at')
            ->offset($offset)->limit($limit)->get();

        return response()->json($images);
    }
}
