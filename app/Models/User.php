<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'photo'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    //region Scopes
    public function scopeEmailConfirmed()
    {
        return $this->where('email_confirmed', 'yes');
    }

    public function scopeEmailUnconfirmed()
    {
        return $this->where('email_confirmed', 'no');
    }
    //endregion

    //region 关联关系
    public function tags()
    {
        return $this->belongsToMany(Tag::class, 'user_tag', 'tag_id', 'user_id');
    }

    public function images()
    {
        return $this->hasMany(Image::class);
    }

    public function favors()
    {
        return $this->belongsToMany(User::class, 'favors', 'photographer_id', 'user_id');
    }

    // 有多少粉丝
    public function fans()
    {
        return $this->belongsToMany(User::class, 'followings', 'photographer_id', 'user_id')
            ->withPivot(['user_id', 'photographer_id']);
    }

    // 关注了谁
    public function followings()
    {
        return $this->belongsToMany(User::class, 'followings', 'user_id', 'photographer_id')
            ->withPivot(['user_id', 'photographer_id']);
    }
    //endregion
}
