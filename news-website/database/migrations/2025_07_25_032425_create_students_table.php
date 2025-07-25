<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->string('admission_no', 20)->unique();      
            $table->string('first_name', 50);                 
            $table->string('last_name', 50);
            $table->enum('gender', ['Male', 'Female']);
            $table->string('telephone_no', 15)->nullable();    
            $table->string('nic_no', 12)->unique();            
            $table->date('date_of_birth');                    
            $table->text('address')->nullable();               
            $table->date('join_date')->default(now());         
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
