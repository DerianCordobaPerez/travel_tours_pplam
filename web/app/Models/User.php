<?php

namespace App\Models;

use App\Helpers\StringHelper;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

/**
 * @property mixed | string id
 * @property mixed | string name
 * @property mixed | string lastName
 * @property mixed | string sex
 * @property mixed | string nationality
 * @property mixed | string avatar
 * @property mixed | string email
 * @property mixed | string password
 * @mixin Builder
 */
class User extends Authenticatable {
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'lastName',
        'sex',
        'nationality',
        'avatar',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function generateToken()
    {
        $this->api_token = StringHelper::generateRandomString(60);
        $this->save();

        return $this->api_token;
    }
}
