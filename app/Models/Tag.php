<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    protected $fillable = ['name', 'slug', 'display_order', 'is_banner'];

    //region Scopes
    public function scopeBanners()
    {
        return $this->where('is_banner', 'yes')->orderBy('display_order')->limit(22);
    }

    public function scopeFavorite()
    {
        return $this->where('is_banner', 'no')->orderBy('display_order')->limit(5);
    }
    //endregion

    //region 关联关系
    public function images()
    {
        return $this->belongsToMany(Image::class, 'image_tag', 'image_id', 'tag_id');
    }

    public function users()
    {
        return $this->belongsToMany(User::class, 'user_tag', 'user_id', 'tag_id');
    }
    //endregion
}
