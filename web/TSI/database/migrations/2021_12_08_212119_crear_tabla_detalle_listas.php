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
            $table->unsignedBigInteger('cod_comp');

            $table->foreign("cod_lista")->references('id')->on("listas")->onDelete('cascade');
            $table->foreign("cod_comp")->references('id')->on("componentes")->onDelete('cascade');

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
