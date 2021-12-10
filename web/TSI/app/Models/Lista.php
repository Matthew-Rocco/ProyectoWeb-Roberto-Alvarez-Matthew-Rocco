<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lista extends Model
{
    use HasFactory;

    protected $table = 'listas';

    public function user(){
        return $this->belongsTo(User::class);
    }
    public function detalle_lista(){
        return $this->belongsToMany(Comptienda::class, 'detalle_listas');
    }
}
