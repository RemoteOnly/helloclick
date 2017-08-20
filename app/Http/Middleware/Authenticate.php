<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Support\Facades\Auth;

class Authenticate
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (Auth::guard()->guest()) {
            if ($request->ajax()) {
                throw new AuthenticationException('Unauthenticated.');
            }

            flash()->message('您还未登录，请注册或者直接登录', 'warning');
            return redirect()->route('index');
        }


        return $next($request);
    }
}
