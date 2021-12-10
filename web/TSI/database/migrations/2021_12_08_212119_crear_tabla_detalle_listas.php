<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CrearTablaDetalleListas extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('detalle_listas', function (Blueprint $table) {
            $table->string('lista_comp')->primary();
            $table->unsignedBigInteger('cod_lista');
            $table->string('cod_comptienda');

            $table->foreign("cod_lista")->references('id')->on("listas");
            $table->foreign("cod_comptienda")->references('cod_comp_tienda')->on("comp_tiendas");

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
        Schema::dropIfExists('detalle_listas');
    }
}
