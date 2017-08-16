<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    protected $fillable = ['name', 'display_order'];

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

    //endregion
}
