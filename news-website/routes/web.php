<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::get('/sdfd454', [UserController::class, 'index'])->name('home');
Route::get('/about', [UserController::class, 'about'])->name('about');
Route::get('/ftgydff', [UserController::class, 'register'])->name('register');
Route::get('/jhhfdh', [UserController::class, 'blog'])->name('blog');
Route::get('/dsfsdfs', [UserController::class, 'blogDetails'])->name('blog_details');
Route::get('/sdfg4rgeg', [UserController::class, 'login'])->name('login');
Route::get('/sfgfew34g', [UserController::class, 'contact'])->name('contact');
Route::get('/sglfu4iismd', [UserController::class, 'error'])->name('error');

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