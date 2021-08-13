<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder {
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(): void {
        
        // Creacion de un usuario por defecto
        (new User())->create([
            'name' => 'admin',
            'lastName' => 'admin',
            'sex' => 'x',
            'nationality' => 'Nicaraguense',
            'avatar' => 'avatar.jpg',
            'email' => 'admin@admin.com',
            'password' => Hash::make('password')
        ]);
    }
}
