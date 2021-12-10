<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categoriaforo extends Model
{
    use HasFactory;

    protected $table = 'categoria_foros';
    protected $primaryKey = 'cat_foro';
    public $incrementing = false;
    protected $keyType = 'string';
}
