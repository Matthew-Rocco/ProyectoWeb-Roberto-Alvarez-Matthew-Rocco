<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CrearTablaRespForo extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('resp_foros', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('cod_foro');
            $table->string('correo_user');
            $table->string('descripcion',500);
            $table->DateTime("fecha");

            $table->foreign("cod_foro")->references('id')->on("hilo_foros")->onDelete('cascade');
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
        Schema::dropIfExists('resp_foros');
    }
}
