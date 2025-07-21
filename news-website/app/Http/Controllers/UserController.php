<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        return view('pages.home');
    }
    public function about()
    {
        $name = 'Abishan';
        return view('pages.about',['name' => $name] );
    }

    public function register()
    {
        return view('pages.register');
    }
    public function blog()
    {
        return view('pages.blog');
    }
    public function blogDetails()
    {
        return view('pages.blog_details');
    }
    public function login()
    {
        return view('pages.login');
    }
    public function contact()
    {
        return view('pages.contact');
    }
    public function error()
    {
        return view('pages.error');
    }

}
