<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Caracteristica extends Model
{
    use HasFactory;

    protected $table = 'caracteristicas';

    public function componentes(){
        return $this->belongsToMany(Componente::class, 'caracteristicas_comp');
    }
}
