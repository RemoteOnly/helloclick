<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta name="copyright" content="huaban.com"/>
    <meta name="referrer" content="always"/>
    <title>登录花瓣</title>
    <meta name="keywords"
          content="家居、旅行、美食、造型&#47;妆发、摄影、服饰&#47;搭配&#47;街拍、童真、婚纱&#47;婚礼、宠物、手工&#47;布艺&#47;玩物、建筑、创意&#47;设计、人物、电影、音乐、图书、美女、数据"/>
    <meta name="description" content="花瓣网,帮你收集,发现网络上你喜欢的事物.你可以用它收集灵感,保存有用的素材,计划旅行,晒晒自己想要的东西"/>
    <meta http-equiv="mobile-agent" content="format=html5;url=http://huaban.com/login/">
    <link rel="stylesheet" href="{{ asset('/css/main.css') }}">
    <link rel="stylesheet" href="http://huaban.com/css/signup-tel.css?1474974202.css">
</head>
<body>
<div id="page" class="page-min-width" style="display: block;">
    <div id="signup-tel">
        <div class="segment">
            <div class="header">
                <div class="logo"></div>
            </div>
        </div>
    </div>
    <div id="login_frame">
        <div class="login">
            <div class="holder">
                <h2 class="title">嗨！请重置密码</h2>
                <form action="{{ route('auth.reset_password') }}" method="post" class="mail-login">
                    @include('home.layouts._errors')
                    {{ method_field('PUT') }}
                    {{ csrf_field() }}
                    <input type="text" disabled value="{{ $email }}" class="clear-input">
                    <input type="password" name="password" placeholder="新密码" class="clear-input">
                    <input type="password" name="password_confirmation" placeholder="确认新密码" class="clear-input">
                    <input type="hidden" name="email" value="{{ $email }}" class="clear-input">
                    <input type="hidden" name="token" value="{{ $token }}" class="clear-input">
                    <button type="submit" class="btn btn18 rbtn">提交</button>
                </form>
            </div>
        </div>
    </div>
</div>
<div class="clear"></div>
<div id="page_overlay" style="display: none;" class="overlay"></div>
</body>
</html>