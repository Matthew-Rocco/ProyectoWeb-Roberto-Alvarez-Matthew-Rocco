<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Caraccomp extends Model
{
    use HasFactory;

    protected $table = 'caracteristicas_comp';
    protected $primaryKey = 'caract_comp';
    public $incrementig = false;
    protected $keyType = 'string';
}
