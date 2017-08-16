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
}
