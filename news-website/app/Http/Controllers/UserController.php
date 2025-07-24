<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function sample()
    {
        return view('pages.sample');
    }
    public function index()
    {
        return view('pages.home');
    }
    public function about(string $name = 'to About')
    {
        return view('pages.about',['name' => $name] );
    }

    public function register(string $name = 'to Register')
    {
        return view('pages.register',['name' => $name] );
    }
    public function blog(string $name = 'to Blog')
    {
        return view('pages.blog',['name' => $name] );
    }
    public function blogDetails(string $name = 'to Blog Details')
    {
        return view('pages.blog_details',['name' => $name] );
    }

    public function login(string $name = 'to Login')
    {
        return view('pages.login',['name' => $name] );
    }
    public function contact(string $name = 'to Contact')
    {
        return view('pages.contact',['name' => $name] );
    }
    public function error(string $name = 'to Error')
    {
        return view('pages.error',['name' => $name] );
    }

}
