<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
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

    /*public function setPasswordAttribute($password){
        $this->atributos['password'] = bcrypt($password);
    }*/

    public function componente(){
        return $this->hasMany(Componente::class);
    }
    public function lista(){
        return $this->hasMany(Lista::class);
    }
    public function hilo_foro(){
        return $this->hasMany(Hiloforo::class);
    }
    public function resp_foro(){
        return $this->hasMany(Respforo::class);
    }
    public function comp_tienda(){
        return $this->hasMany(Comptienda::class);
    }
    public function valoracion_users(){
        return $this->belongsToMany(Componente::class, 'valoraciones');
    }
}
