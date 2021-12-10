<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comptienda extends Model
{
    use HasFactory;

    protected $table = 'comp_tiendas';
    protected $primaryKey = 'cod_comp_tienda';
    public $incrementing = false;
    protected $keyType = 'string';

    public function tienda(){
        return $this->belongsTo(CompTienda::class);
    }
    public function componente(){
        return $this->belongsTo(Componente::class);
    }
    public function user(){
        return $this->belongsTo(User::class);
    }
    public function detalle_lista(){
        return $this->belongsToMany(Lista::class, 'detalle_listas');
    }
}
