<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $fillable = ['image_id', 'user_id', 'content', 'parent_id'];

    //region Attribute
    public function getContentAttribute()
    {
        $at_users = $this->atUsers()->get();
        $content = $this->attributes['content'];
        foreach ($at_users as $at_user) {
            $search = '@' . $at_user->name;
            $replace = '<a href="' . route('user.index', ['id' => $at_user->id]) . '">@' . $at_user->name . '</a>';
            $content = str_replace(
                $search,
                $replace,
                $content
            );
        }

        return $content;
    }
    //endregion
    //region 关联模型
    public function atUsers()
    {
        return $this->belongsToMany(User::class, 'comment_at_users', 'comment_id', 'user_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function image()
    {
        return $this->belongsTo(Image::class);
    }
    //endregion
}
