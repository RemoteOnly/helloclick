<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Auth;
use Hash;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    /**
     * Login
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $email = $request->get('email');
        $password = $request->get('password');

        $user = User::emailConfirmed()->where('email', $email)->first();

        if ($user) {
            if (Hash::check($password, $user->password)) {
                Auth::login($user);
                $message = ['status' => 1, 'message' => '欢迎回来'];
            } else {
                $message = ['status' => 0, 'message' => '密码不正确'];
            }
        } else {
            $message = ['status' => 0, 'message' => '未找到指定用户.请确认改邮箱是否已经被激活'];
        }

        return response()->json($message);
    }

    /**
     * Logout
     * @return \Illuminate\Http\RedirectResponse
     */
    public function logout()
    {
        Auth::guard()->logout();
        return redirect()->route('index');
    }
}
