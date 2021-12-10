<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CrearTablaCompTiendas extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comp_tiendas', function (Blueprint $table) {
            $table->string('cod_comp_tienda')->primary();
            $table->unsignedBigInteger("cod_comp");
            $table->unsignedBigInteger("cod_tienda");
            $table->string("correo_usuario");
            $table->unsignedInteger("precio_comp");
            $table->string("link_comp");

            $table->foreign("cod_comp")->references('id')->on("componentes");
            $table->foreign("cod_tienda")->references('id')->on("tiendas");
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
        Schema::dropIfExists('comp_tiendas');
    }
}
