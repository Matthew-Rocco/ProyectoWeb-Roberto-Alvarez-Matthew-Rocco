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
            $table->id();
            $table->unsignedBigInteger("cod_comp");
            $table->unsignedBigInteger("cod_carac");
            $table->string("valor_carac");

            $table->foreign("cod_comp")->references('id')->on("componentes");
            $table->foreign("cod_carac")->references('id')->on("caracteristicas");

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
