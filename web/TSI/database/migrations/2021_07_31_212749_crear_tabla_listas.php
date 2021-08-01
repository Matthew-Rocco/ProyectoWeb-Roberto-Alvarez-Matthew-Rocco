<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CrearTablaListas extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Listas', function (Blueprint $table) {
            $table->id();
            $table->string("titulo",150);
            $table->string("gabinete",150);
            $table->string("placamadre",150);
            $table->string("procesador",150);
            $table->string("tarjetavideo",150);
            $table->string("almacenamiento",150);
            $table->string("fuentepoder",150);
            $table->string("ram",150);
            $table->string("cooler",150);
            $table->integer("precio");
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
        Schema::dropIfExists('Listas');
    }
}
