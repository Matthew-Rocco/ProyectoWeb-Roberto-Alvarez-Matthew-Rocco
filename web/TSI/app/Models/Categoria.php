<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
    use HasFactory;

    protected $table = 'categorias';

    public function cat_foros(){
        return $this->belongsToMany(Hiloforo::class, 'categoria_foros');
    }
}
