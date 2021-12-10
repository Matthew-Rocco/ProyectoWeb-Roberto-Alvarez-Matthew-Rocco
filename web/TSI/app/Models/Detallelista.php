<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Detallelista extends Model
{
    use HasFactory;

    protected $table = 'detalle_listas';
    protected $primaryKey = 'lista_comp';
    public $incrementing = false;
    protected $keyType = 'string';
}
