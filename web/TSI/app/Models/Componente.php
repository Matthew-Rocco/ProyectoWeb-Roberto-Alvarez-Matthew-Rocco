<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Componente extends Model
{
    use HasFactory;
    
    protected $table = 'componentes';

    public function tipo_comp(){
        return $this->belongsTo(Tipocomp::class);
    }
    public function marca(){
        return $this->belongsTo(Marca::class);
    }
    public function imagenes(){
        return $this->hasMany(Imagen::class);
    }
    public function user(){
        return $this->belongsTo(User::class);
    }
    public function comp_tienda(){
        return $this->hasMany(Comptienda::class);
    }
    public function caracteristicas(){
        return $this->belongsToMany(Caracteristica::class, 'caracteristicas_comp');
    }
    public function valoracion_users(){
        return $this->belongsToMany(User::class, 'valoraciones');
    }
}
