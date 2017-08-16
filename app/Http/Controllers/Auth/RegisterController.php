<?php

namespace App\Http\Controllers\Auth;

use App\Model\User;
use App\Http\Controllers\Controller;
use Auth;
use Cache;
use Carbon\Carbon;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Register a user
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request)
    {
        $this->validator($request->all())->validate();

        $user = $this->create($request->all());
        if ($user) {
            //  发送验证邮件
            event(new Registered($user));
            return response()->json(['status' => 1, 'message' => '注册成功，请前往邮箱去激活']);
        } else {
            // 注册失败
            return response()->json(['status' => 0, 'message' => '注册失败，请刷新页面重新再试']);
        }
    }

    /**
     * Active the user
     * @param Request $request
     * @param $id
     * @param $token
     * @return \Illuminate\Http\RedirectResponse
     */
    public function active(Request $request, $id, $token)
    {
        $key = 'active_token_' . $id;
        $_token = Cache::get($key, Carbon::now());
        if ($token !== $_token) {
            flash()->message('该链接已失效，请重新发送验证', 'error');
        } else {
            $user = User::find($id);
            $user->email_confirmed = 'yes';
            $user->save();
            flash()->message('欢迎回来', 'success');
            Auth::loginUsingId($id);
            // 清除token
            Cache::forget($key);
        }

        return redirect()->route('index');
    }

    public function resend(Request $request)
    {
        $email = $request->get('email');
        $user = User::emailUnconfirmed()->where('email', $email)->first();
        if ($user) {
            event(new Registered($user));
            $message = ['status' => 1, 'message' => '已经发送激活链接，请检查邮件并激活'];
        } else {
            $message = ['status' => 0, 'message' => '未找到对应的用户'];
        }

        return response()->json($message);
    }

    //region Functions

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array $data
     * @return \App\Model\User
     */
    protected function create(array $data)
    {
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);

        return $user;
    }

    //endregion
}
