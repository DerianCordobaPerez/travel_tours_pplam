<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\CommerceController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Rutas usuario
Route::post('register', [RegisterController::class, 'register']);
Route::post('login', [LoginController::class, 'login']);
Route::post('logout', [LoginController::class, 'logout']);

// Rutas comercio
Route::group(['middleware' => 'auth:api'], function() {
    Route::get('commerces', [CommerceController::class, 'index'])->name('commerce.get');
    Route::get('commerces/{commerce}', [CommerceController::class, 'show'])->name('commerce.show');
    Route::post('commerces', [CommerceController::class, 'store'])->name('commerce.store');
    Route::put('commerces/{commerce}', [CommerceController::class, 'update'])->name('commerce.update');
    Route::delete('commerce/{commerce}', [CommerceController::class, 'delete'])->name('commerce.delete');
});
