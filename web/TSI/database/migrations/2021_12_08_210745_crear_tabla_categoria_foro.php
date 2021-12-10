<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CrearTablaCategoriaForo extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('categoria_foros', function (Blueprint $table) {
            $table->string('cat_foro')->primary();
            $table->unsignedBigInteger('cod_foro');
            $table->unsignedBigInteger('cod_categoria');

            $table->foreign("cod_foro")->references('id')->on("hilo_foros");
            $table->foreign("cod_categoria")->references('id')->on("categorias");

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
        Schema::dropIfExists('categoria_foros');
    }
}
