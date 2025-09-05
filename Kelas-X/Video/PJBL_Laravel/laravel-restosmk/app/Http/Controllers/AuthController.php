<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function index()
    {
        return view('backend.login');
    }

    public function postLogin(Request $request)
    {
        $request->validate([
            'email' => 'required',
            'password' => 'required | min:3',
        ]);
        $data = $request->only('email', 'password');

        if (Auth::attempt($data)) {
            $user = Auth::user();
            echo $user->level;
        } else {
            echo 'lol';
        }
    }
}
