<div id="header" class="" style="left: 0px;">
    <div class="wrapper" style="width:@if(Route::is('index')) 1244px @else 992px @endif">
        <div class="menu-bar">
            <div class="left-part">
                <a id="huaban" href="/"></a>
                @foreach($banners as $key => $banner)
                    @break($key > 6)
                    <a href="http://meia.me" target="_blank" class="header-item">{{ $banner->name }}</a>
                @endforeach
                <div class="menu-nav">
                    <div class="header-main-menu" style="display: none">
                        <div class="top-module" style="text-align:center">
                            <a href="javascript:void(0);" class="text app-link">这有更多</a>
                        </div>
                        <div id="category_more" class="middle-module clearfix">
                            @foreach($banners->slice(7)->chunk(5) as $col_num => $group)
                                <div class="col-{{$col_num + 1}} col">
                                    @foreach($group as $item)
                                        <a href="#" class="category-link">{{ $item->name }}</a>
                                    @endforeach
                                </div>
                            @endforeach
                        </div>
                        <div class="bottom-module clearfix">
                            <div class="links">
                                <a href="/about/" rel="nofollow">关于</a><span>·</span>
                                <a href="/pins/53553/" rel="nofollow">反馈</a><span>·</span>
                                <a href="http://blog.huaban.com/" rel="nofollow" style="margin-right: 0;">博客</a>
                            </div>
                            <div class="up-arrow"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right-part">
                @if(Auth::guest())
                    <div class="login-nav">
                        <a href="javascript:void(0);" class="register btn rbtn">
                            <span class="text"> 注册</span>
                        </a>
                        <a rel="nofollow" href="javascript:void(0);"
                           class="login btn wbtn">
                            <span class="text"> 登录</span>
                        </a>
                    </div>
                @else
                    <div class="message-nav">
                        <a title="通知" class="nav-link">
                            <div class="nav-icon"></div>
                            <div class="num hidden">0</div>
                        </a>
                        <div id="message_popup" style="display: none">
                            <div class="bar">
                                <div boxer=".box-mentions" class="left barTitle active">消息</div>
                                <div boxer=".box-activities" class="right barTitle">动态</div>
                            </div>
                            <div id="boxer">
                                <div class="box box-mentions"></div>
                                <div class="box box-activities hidden"></div>
                            </div>
                            <a href="/message/" class="show-all">查看所有消息»</a>
                            <div class="triangle"></div>
                        </div>
                    </div>
                    <div id="nav_user">
                        <a href="/old-rock/" class="nav-link dm-nav">
                            <img width="26" height="26"
                                 src="//hbimg.b0.upaiyun.com/fd8de693a44696557283eb2f1cf76dcc34e3c7921471-0o9FnR_sq75sf"
                                 data-baiduimageplus-ignore="1"
                                 class="avt">
                            <div class="arrow"></div>
                            <div class="num hidden">0</div>
                        </a>
                        <div class="menu" style="display: none;">
                            <div class="group"><a href="/old-rock/">我的花瓣<i class="mine"></i></a>
                                <a title="私信" onclick="app.page.dmController.openFreshList();" class="dm-nav">
                                    私信<i class="messages"></i>
                                    <div class="num in-line hidden">0</div>
                                </a>
                                <a href="/old-rock/following/">我的关注<i class="following"></i></a>
                            </div>
                            <div class="group">
                                <a href="/friends/weibo/">查找好友<i class="friends"></i></a>
                            </div>
                            <div class="group">
                                <a href="/muse/register/">花瓣认证设计师<i class="verified"></i></a>
                            </div>
                            <div class="group">
                                <a href="/settings/">帐号设置<i class="settings"></i></a>
                                <a href="/logout/">退出<i class="exit"></i></a>
                            </div>
                        </div>
                    </div>
                @endif
            </div>
            <form id="search_form" method="get" action="/search/" class="searching-unit" data-regestered="regestered">
                <input id="query" type="text" size="27" name="q" autocomplete="off" placeholder="搜索你喜欢的" value="">
                <a href="javascript:void(0);" class="go"></a>
            </form>
            <div class="search-hint"></div>
        </div>
    </div>
</div>