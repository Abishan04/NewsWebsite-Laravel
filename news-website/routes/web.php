<?php

use Illuminate\Support\Facades\Route;

// Route::get('', function () {
//     return view('layouts.master');
// });
Route::get('/', function () {
    return view('pages.home');
});
Route::get('/about', function () {
    return view('pages.about');
});
Route::get('/register', function () {
    return view('pages.register');
});
Route::get('/blog', function () {
    return view('pages.blog');
});
Route::get('/blog_details', function () {
    return view('pages.blog_details');
});
Route::get('/login', function () {
    return view('pages.login');
});
Route::get('/contact', function () {
    return view('pages.contact');
});
Route::get('/error', function () {
    return view('pages.error');
});