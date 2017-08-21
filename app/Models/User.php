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
        'name', 'email', 'password', 'photo', 'star_sign', 'description', 'sex'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    protected static $sexes = ['男', '女'];
    protected static $star_signs = [
        '水瓶座', '双鱼座', '白羊座', '金牛座',
        '双子座', '巨蟹座', '狮子座', '处女座',
        '天秤座', '天蝎座', '射手座', '魔羯座'
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
        return $this->belongsToMany(Image::class, 'favors', 'user_id', 'image_id');
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

    //region Helpers
    public function radioSex($sex = null)
    {
        if ($sex === null) {
            return self::$sexes;
        }

        if (in_array($sex, self::$sexes)) {
            return '<input type="radio" name="sex" value="' . $sex . '"' . ($this->attributes['sex'] == $sex ? 'checked' : '') . '>' . $sex;
        }
    }

    public function radioStarSign($star_sign = null)
    {
        if ($star_sign === null) {
            return self::$star_signs;
        }

        if (in_array($star_sign, self::$star_signs)) {
            return '<input type="radio" name="star_sign" value="' . $star_sign . '"' . ($this->attributes['star_sign'] == $star_sign ? 'checked' : '') . '>' . $star_sign;
        }
    }
    //endregion
}
