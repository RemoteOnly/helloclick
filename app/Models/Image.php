<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    protected $fillable = [
        'name', 'user_id', 'view_count', 'comment_count', 'favor_count', 'description',
    ];

    //region 关联关系
    public function tags()
    {
        return $this->belongsToMany(Tag::class, 'image_tag', 'image_id', 'tag_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class)->select(['id', 'name', 'photo']);
    }
    //endregion
}
