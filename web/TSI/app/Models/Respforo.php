<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Respforo extends Model
{
    use HasFactory;

    protected $table = 'resp_foros';

    public function foro(){
        return $this->belongsTo(Hiloforo::class);
    }
    public function imagenes(){
        return $this->hasMany(Imagen::class);
    }
    public function user(){
        return $this->belongsTo(User::class);
    }
}
