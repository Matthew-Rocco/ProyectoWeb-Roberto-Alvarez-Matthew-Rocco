<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CrearTablaImagenes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('imagenes', function (Blueprint $table) {
            $table->id();
            $table->string('ruta');
            $table->unsignedBigInteger('cod_hilo_foro')->nullable();
            $table->unsignedBigInteger('cod_resp_foro')->nullable();
            $table->unsignedBigInteger('cod_comp')->nullable();

            $table->foreign("cod_hilo_foro")->references('id')->on("hilo_foros");
            $table->foreign("cod_resp_foro")->references('id')->on("resp_foros");
            $table->foreign("cod_comp")->references('id')->on("componentes");

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
        Schema::dropIfExists('imagenes');
    }
}
