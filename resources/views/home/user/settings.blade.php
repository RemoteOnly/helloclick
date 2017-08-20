@extends('home.layouts.app')

@section('css')
    <link rel="stylesheet" href="{{ asset('css/settings.css') }}">
@endsection
@section('content')
    <div class="wrapper settings-page">
        <div id="user_settings">
            <h1>帐号设置</h1>
            <div class="setting-units">
                <div id="_set_profile" class="setting-unit ">
                    <div class="title">个人资料
                        <div class="preview" style="opacity: 1;">逗逗兜豆豆</div>
                    </div>
                    <a class="edit-label">编辑</a>
                    <div class="holder" style="overflow: hidden; height: 0px;">
                        <div class="inner">
                            <form action="/settings/" method="post">
                                <table class="list">
                                    <tbody>
                                    <tr>
                                        <td class="name">登录名：</td>
                                        <td>yixindading@126.com<a class="go-email">修改邮箱»</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="name">昵称：</td>
                                        <td>
                                            <input value="逗逗兜豆豆" name="user[username]" class="clear-input">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="name">所在城市：</td>
                                        <td>
                                            <input value="" name="profile[location]" class="clear-input">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="name">性别：</td>
                                        <td class="sex">
                                            <label>
                                                <input type="radio" name="profile[sex]" value="1">男
                                            </label>
                                            <label>
                                                <input type="radio" name="profile[sex]" value="2">女
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="name">生日：</td>
                                        <td class="birthday">
                                            <input maxlength="4" placeholder="年" title="年" value="" class="clear-input">
                                            <input maxlength="2" placeholder="月" title="月" value="" class="clear-input">
                                            <input maxlength="2" placeholder="日" title="日" value="" class="clear-input">
                                            <input type="hidden" name="profile[birthday]" value="">
                                            <span>（该信息其他人不可见）</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="name">星座：</td>
                                        <td class="horoscope">
                                            <input placeholder="填写生日以自动显示星座" title="填写生日以自动显示星座"
                                                   readonly="readonly" class="clear-input">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="name">职业：</td>
                                        <td>
                                            <input value="" name="profile[job]" class="clear-input">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="name">个人主页：</td>
                                        <td>
                                            <input value="http://" name="profile[url]" class="clear-input">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="name">关于自己：</td>
                                        <td style="height: 110px; position: relative; display: block;">
                                            <textarea name="profile[about]"
                                                      style="position: absolute; width: 580px; height: 86px; left: 0; top: 10px;"
                                                      class="clear-input">

                                            </textarea>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        </td>
                                        <td>
                                            <a href="#" onclick="return false;" class="submit-btn btn rbtn">
                                                <strong>保存</strong>
                                                <span></span>
                                            </a>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </form>
                        </div>
                    </div>
                </div>
                <div id="_set_avatar" class="setting-unit user-avatar">
                    <div class="title">头像
                        <div class="preview" style="opacity: 1;">
                            <img id="preview_avatar"
                                 src="//hbimg.b0.upaiyun.com/fd8de693a44696557283eb2f1cf76dcc34e3c7921471-0o9FnR_sq75sf"
                                 data-baiduimageplus-ignore="1">
                        </div>
                    </div>
                    <a class="edit-label">编辑</a>
                    <div style="height: 0px; overflow: hidden;" class="holder">
                        <div class="inner">
                            <table class="list">
                                <tbody>
                                <tr>
                                    <td class="avatar">
                                        <img id="current_avatar"
                                             src="//hbimg.b0.upaiyun.com/fd8de693a44696557283eb2f1cf76dcc34e3c7921471-0o9FnR_fw192"
                                             suffix="fw192" data-baiduimageplus-ignore="1">
                                        <img src="/img/load2.gif"
                                             style="display:none;"
                                             data-baiduimageplus-ignore="1"
                                             class="load">
                                    </td>
                                    <td class="buttons">
                                        <a id="avatar_upload_button" href="#" onclick="return false;"
                                           class="upload_avatar btn btn18 wbtn">
                                            <strong>上传头像</strong>
                                            <span></span>
                                        </a>
                                        <div style="position: absolute; opacity: 0.01; overflow: hidden;">
                                            <iframe src="javascript:'<html></html>'" frameborder="no" border="0"
                                                    name="IFrame_j6aplstx" id="IFrame_j6aplstx"
                                                    style="display: none;">
                                            </iframe>
                                            <input type="file" name="file" size="1"
                                                   style="position: absolute; top: 0px; left: 0px; border: 0px;">
                                        </div>
                                        <a data="qzone" href="#" onclick="return false;"
                                           class="refresh_avatar btn btn18 wbtn">
                                            <strong>
                                                从QQ空间同步头像</strong>
                                            <span></span>
                                        </a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div id="_tel_binding" class="setting-unit ">
                    <div class="title">绑定手机
                        <div class="preview" style="opacity: 1;">未绑定</div>
                    </div>
                    <a class="edit-label">编辑</a>
                    <div class="holder" style="overflow: hidden; height: 0px;">
                        <div class="inner">
                            <div style="display: block;" class="tel-view bind-new">
                                <form class="bind-new-form">
                                    <table class="list">
                                        <tbody>
                                        <tr>
                                            <td class="name">手机号：</td>
                                            <td>
                                                <input name="tel" placeholder="输入手机号" class="clear-input">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            </td>
                                            <td>
                                                <a href="#" onclick="return false;" class="approve-btn btn rbtn">
                                                    <span class="text"> 绑定手机</span>
                                                </a>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </form>
                            </div>
                            <div class="tel-view binding">
                                <form class="binding-form">
                                    <table class="list">
                                        <tbody>
                                        <tr>
                                            <td class="name">你的手机号：</td>
                                            <td class="tel-number">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="name">手机验证码：</td>
                                            <td>
                                                <input name="captcha" placeholder="输入你手机收到的验证码" class="clear-input">
                                                <a href="#" onclick="return false;" class="send-sms btn">
                                                    <span class="text"> 重新发送验证码</span>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="name">登录密码：</td>
                                            <td>
                                                <input type="password" name="password" placeholder="你的花瓣登录密码"
                                                       class="clear-input">
                                                <a href="#" onclick="return false;" class="reset-password btn">
                                                    <span class="text"> 忘记密码</span>
                                                </a>
                                                <span style="display:none;" class="notice">
                                                    重置密码邮件已发出，去
                                                    <a target="_blank" class="link">查收</a>或<a
                                                            class="retry">再发一次</a>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>
                                                <a href="#" onclick="return false;" class="approve-btn btn rbtn">
                                                    <span class="text"> 绑定</span>
                                                </a>
                                                <a class="brown-link deny-back">取消</a>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </form>
                            </div>
                            <div style="display: none;" class="tel-view binded">
                                <form class="binded-form">
                                    <table class="list">
                                        <tbody>
                                        <tr>
                                            <td class="name">已绑定手机：</td>
                                            <td>
                                                <span data-tel="undefined" class="tel-number"></span>
                                                <i class="icon checked"> </i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            </td>
                                            <td>
                                                <a href="#" onclick="return false;" class="approve-btn btn">
                                                    <span class="text"> 更换手机号</span>
                                                </a>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </form>
                            </div>
                            <div class="tel-view change-tel">
                                <form class="change-tel-form">
                                    <table class="list">
                                        <tbody>
                                        <tr>
                                            <td class="name">旧手机号：</td>
                                            <td data-tel="undefined" class="tel-number">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="name">手机验证码：</td>
                                            <td>
                                                <input name="captcha" placeholder="输入你旧手机号收到的验证码" class="clear-input">
                                                <a href="#" onclick="return false;" class="send-sms btn">
                                                    <span class="text"> 发送验证码</span>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            </td>
                                            <td>
                                                <a href="#" onclick="return false;" class="approve-btn btn rbtn">
                                                    <span class="text"> 下一步</span>
                                                </a>
                                                <a class="brown-link deny-back">取消</a>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </form>
                            </div>
                            <div class="tel-view tel-new">
                                <form class="tel-new-form">
                                    <table class="list">
                                        <tbody>
                                        <tr>
                                            <td class="name">新手机号：</td>
                                            <td>
                                                <input name="tel" placeholder="输入要绑定的新手机号" class="clear-input">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            </td>
                                            <td>
                                                <a href="#" onclick="return false;" class="approve-btn btn rbtn">
                                                    <span class="text"> 下一步</span>
                                                </a>
                                                <a class="brown-link deny-back">取消</a>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </form>
                            </div>
                            <div class="tel-view tel-code">
                                <form class="tel-code-form">
                                    <table class="list">
                                        <tbody>
                                        <tr>
                                            <td class="name">新手机号：</td>
                                            <td class="tel-number"></td>
                                        </tr>
                                        <tr>
                                            <td class="name">验证码：</td>
                                            <td>
                                                <input name="captcha" placeholder="输入你新手机号收到的验证码" class="clear-input">
                                                <a href="#" onclick="return false;" class="send-sms btn">
                                                    <span class="text"> 再发一次</span>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>
                                                <a href="#" onclick="return false;" class="approve-btn btn rbtn">
                                                    <span class="text"> 绑定</span>
                                                </a>
                                                <a class="brown-link deny-back">取消</a>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="_set_urlname" class="setting-unit">
                    <div class="title">个性网址
                        <div class="preview" style="opacity: 1;">https://huaban.com/old-rock</div>
                    </div>
                    <a class="edit-label">编辑</a>
                    <div style="height: 0px; overflow: hidden;" class="holder">
                        <div class="inner">
                            <form action="/settings/" method="post">
                                <table class="list">
                                    <tbody>
                                    <tr>
                                        <td class="name">huaban.com/</td>
                                        <td>
                                            <input name="user[urlname]" value="old-rock" class="clear-input">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <a href="#" onclick="return false;" class="submit-btn btn rbtn">
                                                <strong> 保存</strong>
                                                <span></span>
                                            </a>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </form>
                        </div>
                    </div>
                </div>
                <div id="_set_bindings" class="setting-unit bindings">
                    <div class="title">第三方帐号绑定
                        <div class="preview" style="opacity: 1;">
                            <div id="binding_previews">
                                <div class="icon wb disabled"></div>
                                <div class="icon qz "></div>
                                <div class="icon tq disabled"></div>
                                <div class="icon db disabled"></div>
                                <div class="icon rr disabled"></div>
                                <div class="icon wc disabled"></div>
                            </div>
                        </div>
                    </div>
                    <a class="edit-label">编辑</a>
                    <div style="height: 0px; overflow: hidden;" class="holder">
                        <div class="inner">
                            <div class="info">
                                绑定第三方帐号，可以直接登录花瓣，还可以将花瓣内容同步到以下平台，与更多好友分享。<br>如果当前帐号在对应站点处于登录状态，需退出登录后，才能重新绑定。
                            </div>
                            <ul>
                                <li class="sina">
                                    <a href="/oauth/weibo/binding/" class="connect btn wbtn">
                                        <strong>
                                            绑定新浪微博</strong>
                                        <span></span>
                                    </a>
                                </li>
                                <li class="douban">
                                    <a href="/oauth/douban/binding/" class="connect btn wbtn">
                                        <strong> 绑定豆瓣</strong>
                                        <span></span>
                                    </a>
                                </li>
                                <li class="renren">
                                    <a href="/oauth/renren/binding/" class="connect btn wbtn">
                                        <strong>
                                            绑定人人网</strong>
                                        <span></span>
                                    </a>
                                </li>
                                <li class="qzone">
                                    <a href="http://qzone.qq.com/" target="_blank" class="url">qzone.qq.com</a>
                                    <a href="/oauth/qzone/binding/" data-name="QQ空间"
                                       class="connect btn wbtn">
                                        <strong> 重新绑定QQ空间</strong>
                                        <span></span>
                                    </a>
                                    <a data-service="qzone" data-name="QQ空间" href="#" onclick="return false;"
                                       class="unbind btn wbtn">
                                        <strong> 解除绑定</strong>
                                        <span></span>
                                    </a>
                                </li>
                                <li class="tqq">
                                    <a href="/oauth/tqq/binding/" class="connect btn wbtn">
                                        <strong>
                                            绑定腾讯微博</strong>
                                        <span></span>
                                    </a>
                                </li>
                                <li class="wechat">
                                    <a href="/oauth/wechat/binding/" class="connect btn wbtn">
                                        <strong>
                                            绑定微信</strong>
                                        <span></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="_set_privacy" class="setting-unit">
                    <div class="title">隐私设置
                        <div class="preview" style="opacity: 1;">设置个人隐私</div>
                    </div>
                    <a class="edit-label">编辑</a>
                    <div style="height: 0px; overflow: hidden;" class="holder">
                        <div class="inner">
                            <form action="/settings/" method="post">
                                <ul class="privacy-list clearfix"></ul>
                                <div class="common-message caution">
                                    设置第三方帐号隐私，请先<a class="go-bindings">绑定第三方帐号</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div id="_set_blocked_conversations" class="setting-unit ">
                    <div class="title">私信屏蔽
                        <div class="preview" style="opacity: 1;">显示已屏蔽的用户</div>
                    </div>
                    <a class="edit-label">编辑</a>
                    <div class="holder" style="overflow: hidden; height: 0px;">
                        <div class="inner set-blocked-coverstaions">
                            <div class="info">
                                <p>被你屏蔽的用户不能给你发私信，你也不能给他们发送私信。</p>
                            </div>
                            <div class="blcoked-users">
                                <div id="bolcked_user_temp" style="display: none">
                                    <a href=""
                                       target="_blank">
                                        <img data-src="" data-baiduimageplus-ignore="1"
                                             class="blocked-user-avatar">
                                        <span class="user-name"></span>
                                    </a>
                                    <span class="user-info"></span>
                                    <span data-id="" class="remove-blocked">解除屏蔽</span>
                                </div>
                                <div class="none-blcoked">
                                    <h4>你没有屏蔽任何人</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="_set_verification" class="setting-unit">
                    <div class="title">认证用户
                        <div class="preview" style="opacity: 1;">不显示</div>
                    </div>
                    <a class="edit-label">编辑</a>
                    <div style="height: 0px; overflow: hidden;" class="holder">
                        <div class="inner">
                            <form action="/settings/" method="post">
                                <table class="list">
                                    <tbody>
                                    <tr>
                                        <td class="name">认证信息：</td>
                                        <td>
                                            <label>
                                                <input type="radio" name="profile[show_verification]" value=""
                                                       checked="checked">
                                                <span class="text">不显示</span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <label>
                                                <input type="radio" name="profile[show_verification]"
                                                       value="weibo">
                                                <span class="text">新浪微博</span>
                                            </label>
                                            <div class="verification-preview">没有认证信息</div>
                                            <a href="/oauth/weibo/binding/" class="connect btn">
                                                <span class="text"> 重新同步</span>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        </td>
                                        <td>
                                            <a href="#" onclick="return false;" class="submit-btn btn rbtn">
                                                <strong>保存</strong>
                                                <span></span>
                                            </a>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </form>
                        </div>
                    </div>
                </div>
                <div id="_set_subscription" class="setting-unit subscription">
                    <div class="title">订阅/退订周刊
                        <div class="preview" style="opacity: 1;">已订阅花瓣周刊</div>
                    </div>
                    <a class="edit-label">编辑</a>
                    <div style="height: 0px; overflow: hidden;" class="holder">
                        <div class="inner">
                            <form action="/settings/subscription/" method="post">
                                <table class="list">
                                    <tbody>
                                    <tr>
                                        <td class="name">当前状态：</td>
                                        <td>
                                            <label>
                                                <input type="checkbox" checked="checked" name="weekly">
                                                <span class="text">订阅花瓣周刊</span>
                                            </label>
                                            <p>注：有可能在你修改订阅状态时，当期周刊的邮件发送队列已经生成，直到下一期周刊发送的时候，你的更改才能生效</p>
                                            <div style="" class="now">当前订阅邮箱地址：<span>yixindading@126.com</span>
                                                <a class="go-email">修改邮箱»</a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        </td>
                                        <td>
                                            <a href="#" onclick="return false;" class="submit-btn btn rbtn">
                                                <strong>保存</strong>
                                                <span></span>
                                            </a>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </form>
                        </div>
                    </div>
                </div>
                <div id="_set_weibo_mentions" class="setting-unit">
                    <div class="title">@收藏到花瓣
                        <div class="preview" style="opacity: 1;">微博图片收藏到花瓣</div>
                    </div>
                    <a class="edit-label">编辑</a>
                    <div style="height: 0px; overflow: hidden;" class="holder">
                        <div class="inner">
                            <ul>
                                <li class="sina binding-metion">
                                    <div class="binding-notice">
                                        你还没有绑定新浪微博。绑定后，在撰写有图片的微博或者转发、评论中加入“@收藏到花瓣”，就可以把微博中的图片自动收藏到指定的画板中。<p>
                                            <a class="go-bindings">立即去绑定新浪微博»</a>
                                        </p>
                                    </div>
                                </li>
                            </ul>
                            <a href="#" onclick="return false;" class="save btn rbtn">
                                <strong> 保存</strong>
                                <span></span>
                            </a>
                            <div class="intro">
                                <img src="/img/s9_pic.png" height="648" data-baiduimageplus-ignore="1">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="dialog-boxes">
        <div id="dm_box">
            <div class="dialog-overlay">
            </div>
            <div class="dialog-box list-view">
                <div class="box-title">私信
                    <div class="close-btn">
                        <i> </i>
                    </div>
                </div>
                <div class="box-inner">
                    <div class="conversation-list">
                    </div>
                    <div class="bottom">
                    </div>
                    <div class="empty hidden">
                        <h2>现在你可以发送私信啦！</h2>
                        <div class="sub">要发送私信，请到该用户主页，点击私信按钮</div>
                        <img src="/img/send_msg_intr.jpg" data-baiduimageplus-ignore="1">
                    </div>
                </div>
            </div>
            <div style="display:none" class="dialog-box dialog-view">
                <div class="box-title">
                    <a class="brown-link back">私信</a>
                    <span class="dialog-only-text">私信给</span>
                    <span class="symbol">»</span>
                    <span class="with-user-name">呵呵</span>
                    <div class="action">
                        <div class="open"></div>
                        <ul>
                            <li class="block">屏蔽此人</li>
                        </ul>
                    </div>
                    <div class="close-btn">
                        <i> </i>
                    </div>
                </div>
                <div class="box-inner">
                    <div class="messages"></div>
                    <div class="loading"></div>
                    <div class="send-box clearfix">
                        <textarea class="clear-input"></textarea>
                        <a href="#" onclick="return false;" class="send disabled btn">
                            <span class="text"> 发送私信</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection