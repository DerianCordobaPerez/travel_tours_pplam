<?php

use App\Http\Controllers\CommerceController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\User\UserController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

// Rutas autenticacion
Auth::routes();

// Rutas cliente
Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/about', [HomeController::class, 'about'])->name('about');

// Rutas mapa
Route::resource('commerces', CommerceController::class);

// Rutas usuario / perfil
Route::group(['middleware' => 'auth'], function () {

    Route::get('/user/profile', [UserController::class, 'render_profile'])->name('user.profile');
    Route::post('/user/profile', [UserController::class, 'update_avatar'])->name('user.profile.update');
});
