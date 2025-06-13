<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WorkoutController;
use App\Http\Controllers\GeminiController;
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


Route::get('/workouts', [WorkoutController::class, 'index']);
Route::post('/workouts', [WorkoutController::class, 'store']);
Route::post('/workout', [WorkoutController::class, 'store']);



Route::post('/suggestions', [GeminiController::class, 'submitExercise']);
Route::get('/suggestions', [GeminiController::class, 'getAllSuggestions']);
Route::delete('/suggestions/{id}', [GeminiController::class, 'deleteSuggestion']);
