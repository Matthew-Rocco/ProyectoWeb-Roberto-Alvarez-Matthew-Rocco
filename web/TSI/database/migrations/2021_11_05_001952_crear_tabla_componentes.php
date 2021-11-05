<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CrearTablaComponentes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('componentes', function (Blueprint $table) {
            $table->id();
            $table->string("nombre",150);
            $table->string("descripcion",500);
            $table->string("modelo");

            $table->unsignedBigInteger("cod_tipo_comp");
            $table->unsignedBigInteger("cod_imagen");
            $table->unsignedBigInteger("cod_marca");
            $table->string("correo_usuario");

            $table->foreign("cod_tipo_comp")->references('id')->on("tiposcomp");
            $table->foreign("cod_imagen")->references('id')->on("imagenes");
            $table->foreign("cod_marca")->references('id')->on("marcas");
            $table->foreign("correo_usuario")->references('email')->on("users");

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
        Schema::dropIfExists('componentes');
    }
}
