<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

// Rutas autenticacion
Auth::routes();

// Rutas cliente
Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/about', [HomeController::class, 'about'])->name('about');

// Rutas mapa
Route::group(['middleware' => 'auth'], function() {
    
});
