<?php

namespace Database\Seeders;

use App\Models\Commerce;
use Illuminate\Database\Seeder;

class CommerceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Commerce::create([
            'name' => 'panchos',
            'subject' => 'comedor',
            'description' => 'solo trabajamos los panchos'
        ]);
    }
}
