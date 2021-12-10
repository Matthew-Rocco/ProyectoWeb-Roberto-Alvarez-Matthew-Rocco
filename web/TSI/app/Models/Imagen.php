<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Imagen extends Model
{
    use HasFactory;
    
    protected $table = 'imagenes';

    public function hilo_foro(){
        return $this->belongsTo(Hiloforo::class);
    }
    public function resp_foro(){
        return $this->belongsTo(Respforo::class);
    }
    public function componente(){
        return $this->belongsTo(Componente::class);
    }
}
