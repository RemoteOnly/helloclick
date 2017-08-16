<div class="black-overlay" id="login-register" hidden>
    <div id="login_frame" style="margin-top: -215px;">
        <img src="/img/logo_2x.png" width="106" height="36" data-baiduimageplus-ignore="1" class="logo">
        <div class="sign-up" style="display: none;">
            <div class="holder">
                <a class="switch-email-signup brown-link">使用邮箱注册</a>
            </div>
            <div class="switch">已有帐号？<a class="brown-link" href="javascript:void(0);">登录到花瓣</a></div>
        </div>
        {{--登录--}}
        <div style="display: block;" class="login">
            <div class="holder">
                <div class="with-line">使用邮箱登录</div>
                <form data-url="{{ route('auth.login') }}" method="post" class="mail-login">
                    <input type="text" name="email" placeholder="输入邮箱" class="clear-input">
                    <input name="password" type="password" placeholder="密码" class="clear-input">
                    <a href="javascript:void(0);" class="btn btn18 rbtn" id="to-login">
                        <span class="text"> 登录</span>
                    </a>
                </form>
                <a class="reset-password red-link">忘记密码»</a>
                <div class="switch-back">还没有花瓣帐号？
                    <a class="red-link" href="javascript:void(0);" id="btn-register">点击注册»</a>
                </div>
            </div>
        </div>
        {{--找回密码--}}
        <div style="display: none" class="reset">
            <div class="holder">
                <div class="with-line">找回密码</div>
                <form class="reset-form" method="post">
                    <input type="text" name="email" placeholder="输入邮箱" class="clear-input">
                    <a href="javascript:void(0);" class="btn btn18 rbtn" id="to-reset-password" data-url="{{ route('auth.send_reset_link') }}">
                        <span class="text"> 重置</span>
                    </a>
                </form>
                <a class="back red-link">又想起来了»</a>
            </div>
        </div>
        {{--注册和成功--}}
        <div class="email-signup">
            <div style="display: none" class="signup-success">
                <div class="with-line">注册成功</div>
                <div class="text">验证邮件已经发送到<span class="email"></span>，请查收邮件激活账号。
                    <a href="" target="_blank" class="check-mail red-link"></a>
                    <br>没有收到激活邮件？请耐心等待，或者<a class="resend red-link disabled" data-url="{{ route('auth.resend') }}"
                                            data-delay="30">重新发送<span>30</span></a>
                </div>
                <a class="login-link red-link">« 返回登录页</a></div>
            {{--注册--}}
            <div style="display: none;" class="signup-form">
                <div class="holder">
                    <div class="with-line">使用邮箱注册</div>
                    <form data-url="{{ route('auth.register') }}" method="post">
                        <input type="text" name="name" placeholder="昵称" class="clear-input" value="yida">
                        <input type="text" name="email" placeholder="邮箱" class="clear-input"
                               value="yixindading@126.com">
                        <input type="password" name="password" placeholder="密码" class="clear-input" value="666666">
                        <input type="password" name="password_confirmation" placeholder="确认密码" class="clear-input"
                               value="666666">
                        <a href="javascript:void(0);" class="btn btn18 rbtn" id="to-register">
                            <span class="text"> 注册</span></a>
                    </form>
                    <a class="email-signup-back brown-link">« 返回登录</a></div>
            </div>
        </div>
        <div class="close"><i></i></div>
    </div>
</div>