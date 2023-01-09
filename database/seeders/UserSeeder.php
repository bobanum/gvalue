<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@test.com',
            'password' => Hash::make('admin'),
            'role' => 2,
        ]);
        User::factory()->create([
            'name' => 'User',
            'email' => 'user@test.com',
            'password' => Hash::make('secret'),
        ]);
        User::factory()
            ->count(10)
            ->create();
    }
}
