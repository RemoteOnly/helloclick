<?php

namespace App\Http\Controllers;

use App\Models\Image;
use Auth;
use Barryvdh\Debugbar\Middleware\Debugbar;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ImageController extends Controller
{
    /**
     * 用来提供瀑布流加载时图片的读取
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function loadImages(Request $request)
    {
        $offset = $request->get('offset', 0);
        $limit = $request->get('limit', 20);
        $slug = $request->get('slug');
        $user_id = $request->get('user_id');
        $favored_by_user_id = $request->get('favored_by_user_id');

        $builder = Image::with(['tags', 'user']);

        // slug
        if ($slug) {
            $builder->whereHas('tags', function ($query) use ($slug) {
                $query->where('slug', $slug);
            });
        }

        // photographer
        if ($user_id) {
            $builder->where('user_id', $user_id);
        }

        // favored by
        if ($favored_by_user_id) {
            $image_ids = DB::table('favors')
                ->where('user_id', $favored_by_user_id)
                ->get(['image_id']);

            $image_ids = $image_ids->pluck('image_id')->toArray();

            $builder = $builder->whereIn('id', $image_ids);
        }

        $images = $builder->orderBy('created_at', 'desc')
            ->offset($offset)
            ->limit($limit)
            ->get();

        if (Auth::check()) {
            $has_favored_images = DB::table('favors')
                ->where('user_id', Auth::id())
                ->select('image_id')
                ->get()
                ->pluck('image_id')
                ->toArray();

            foreach ($images as &$image) {
                if (in_array($image->id, $has_favored_images)) {
                    $image['has_favored'] = 1;
                } else {
                    $image['has_favored'] = 0;
                }
            }
        }

        return response()->json($images);
    }
}
