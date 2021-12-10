<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hiloforo extends Model
{
    use HasFactory;

    protected $table = 'hilo_foros';

    public function resp_foros(){
        return $this->hasMany(Respforo::class);
    }
    public function imagenes(){
        return $this->hasMany(Imagen::class);
    }
    public function user(){
        return $this->belognsTo(User::class);
    }
    public function cat_foros(){
        return $this->belongsToMany(Categoria::class, 'categoria_foros');
    }
}
