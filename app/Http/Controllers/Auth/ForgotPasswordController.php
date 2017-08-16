<?php

namespace App\Http\Controllers\Auth;

use App\Events\SendResetLinkEmailEvent;
use App\Http\Controllers\Controller;
use App\Model\PasswordReset;
use App\Model\User;
use Carbon\Carbon;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\URL;

class ForgotPasswordController extends Controller
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
     * Send reset password link
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function sendResetLinkEmail(Request $request)
    {
        $email = $request->get('email');
        $user = User::emailConfirmed()->where('email', $email)->first();
        if ($user) {
            $token = str_random();
            DB::table('password_resets')->where('email', $email)->delete();
            $count = PasswordReset::insert(['email' => $email, 'token' => $token, 'created_at' => Carbon::now()]);
            if ($count) {
                // 发送邮件
                event(new SendResetLinkEmailEvent($user, $token));

                $message = ['status' => 1, 'message' => '重置密码链接已经发送到该邮箱，请前往查看邮件'];
            } else {
                $message = ['status' => 0, 'message' => '服务器出现异常，请稍候重试'];
            }
        } else {
            $message = ['status' => 0, 'message' => '未找到合法的用户'];
        }

        return response()->json($message);
    }
}
