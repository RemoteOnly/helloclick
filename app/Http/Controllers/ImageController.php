<?php

namespace App\Http\Controllers;

use App\Models\Image;
use Illuminate\Http\Request;

class ImageController extends Controller
{
    public function loadImages(Request $request)
    {
        $offset = $request->get('offset', 0);
        $limit = $request->get('limit', 20);
        $slug = $request->get('slug');
        $user_id = $request->get('user_id');

        $builder = Image::with(['tags', 'user']);
        // slug
        if ($slug) {
            $builder->whereHas('tags', function ($query) use ($slug) {
                $query->where('slug', $slug);
            });
        }

        // user
        if ($user_id) {
            $builder->where('user_id', $user_id);
        }

        $images = $builder->offset($offset)->limit($limit)
            ->orderBy('created_at')
            ->get();

        return response()->json($images);
    }
}
