<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CrearTablaHiloForo extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hilo_foros', function (Blueprint $table) {
            $table->id();
            $table->string('correo_user');
            $table->string('titulo',100);
            $table->string('descripcion',500);
            $table->DateTime("fecha");
            
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
        Schema::dropIfExists('hilo_foros');
    }
}
