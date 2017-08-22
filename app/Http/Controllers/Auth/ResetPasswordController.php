<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\PasswordReset;
use App\Models\User;
use Auth;
use \Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class ResetPasswordController extends Controller
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
     * 显示重置密码表单
     *
     * @param Request $request
     * @param null $token
     * @return $this
     */
    public function showResetForm(Request $request, $token = null)
    {
        return view('auth.passwords.reset')->with(
            ['token' => $token, 'email' => $request->email]
        );
    }

    /**
     * 重置密码
     *
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function reset(Request $request)
    {
        $email = $request->get('email');
        $password = $request->get('password');
        $rules = [
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required|confirmed|min:6',
        ];
        $this->validate($request, $rules);

        // 检查是否有匹配的email和token
        PasswordReset::where(['email' => $email, 'token' => $password])->first();
        DB::beginTransaction();
        try {
            $user = User::where('email', $email)->first();
            $user->password = Hash::make($request->get('password'));
            $user->save();

            PasswordReset::delete(['email' => $email, 'token' => $password]);
            DB::commit();

            Auth::login($user);
            flash()->message('欢迎回来', 'success');
        } catch (\Exception $e) {
            DB::rollBack();
            flash()->message('密码重置异常，请刷新重试', 'error');
        }

        return redirect()->route('index');
    }
}
