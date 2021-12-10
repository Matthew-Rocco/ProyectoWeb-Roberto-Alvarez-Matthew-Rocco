<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CrearTablaCaracteristicasComp extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('caracteristicas_comp', function (Blueprint $table) {
            $table->string('caract_comp')->primary();
            $table->unsignedBigInteger('cod_comp');
            $table->unsignedBigInteger('cod_carac');
            $table->string('valor_carac');
            $table->string('unidad');

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
        Schema::dropIfExists('caracteristicas_comp');
    }
}
