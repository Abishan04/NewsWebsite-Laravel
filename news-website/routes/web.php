<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::get('/', [UserController::class, 'index']);
Route::get('/about', [UserController::class, 'about']);
Route::get('/register', [UserController::class, 'register']);
Route::get('/blog', [UserController::class, 'blog']);
Route::get('/blog_details', [UserController::class, 'blogDetails']);
Route::get('/login', [UserController::class, 'login']);
Route::get('/contact', [UserController::class, 'contact']);
Route::get('/error', [UserController::class, 'error']);

// Route::get('/', function () {
//     return view('pages.home');
// });
// Route::get('/about', function () {
//     return view('pages.about');
// });
// Route::get('/register', function () {
//     return view('pages.register');
// });
// Route::get('/blog', function () {
//     return view('pages.blog');
// });
// Route::get('/blog_details', function () {
//     return view('pages.blog_details');
// });
// Route::get('/login', function () {
//     return view('pages.login');
// });
// Route::get('/contact', function () {
//     return view('pages.contact');
// });
// Route::get('/error', function () {
//     return view('pages.error');
// });
// Route::get('', function () {
//     return view('layouts.master');
// });