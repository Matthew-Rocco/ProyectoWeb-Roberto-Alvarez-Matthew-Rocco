<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CrearTablaValoraciones extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('valoraciones', function (Blueprint $table) {
            $table->string('valoracion_user')->primary();
            $table->unsignedBigInteger('cod_comp');
            $table->string('correo_user');
            $table->string('descripcion',500);
            $table->unsignedInteger('puntos');
            $table->DateTime("fecha");

            $table->foreign("cod_comp")->references('id')->on("componentes")->onDelete('cascade');
            $table->foreign("correo_user")->references('email')->on("users");

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('valoraciones');
    }
}
