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
                        <div class="preview" style="opacity: 1;">{{ $user->name }}</div>
                    </div>
                    <a class="edit-label">编辑</a>
                    <div class="holder" hidden>
                        <div class="inner">
                            <form action="/settings/" method="post">
                                <table class="list">
                                    <tbody>
                                    <tr>
                                        <td class="name">登录名：</td>
                                        <td>{{ $user->email }} </td>
                                    </tr>
                                    <tr>
                                        <td class="name">昵称：</td>
                                        <td>
                                            <input value="{{ $user->name }}" name="name" class="clear-input">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="name">性别：</td>
                                        <td class="sex">
                                            @foreach($user->radioSex() as $sex)
                                                <label>
                                                    {!! $user->radioSex($sex) !!}
                                                </label>
                                            @endforeach
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="name">星座：</td>
                                        <td class="sex">
                                            @foreach(array_chunk($user->radioStarSign(),4) as $group)
                                                @foreach($group as $star_sign)
                                                    <label>{!! $user->radioStarSign($star_sign) !!}</label>
                                                @endforeach
                                                <br>
                                            @endforeach
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="name">关于自己：</td>
                                        <td style="height: 110px; position: relative; display: block;">
                                            <textarea name="description"
                                                      style="position: absolute; width: 580px; height: 86px; left: 0; top: 10px;"
                                                      class="clear-input"></textarea>
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
                            <img id="preview_avatar" src="{{ $user->photo }}">
                        </div>
                    </div>
                    <a class="edit-label">编辑</a>
                    <div class="holder" hidden>
                        <div class="inner">
                            <table class="list">
                                <tbody>
                                <tr>
                                    <td class="avatar">
                                        <img id="current_avatar" src="{{ $user->photo }}">
                                        <img src="/img/load2.gif" style="display:none;" class="load">
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
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div id="_set_blocked_conversations" class="setting-unit ">
                    <div class="title">图片上传
                        <div class="preview" style="opacity: 1;">开始你的图片上传吧</div>
                    </div>
                    <a class="edit-label">编辑</a>
                    <div class="holder" hidden>

                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('script')
    <script src="{{ mix('/js/settings.js') }}"></script>
@endsection