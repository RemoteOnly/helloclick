<div id="header" class="" style="left: 0px;">
    <div class="wrapper" style="width:@if(Route::is('index')) 1244px @else 992px @endif">
        <div class="menu-bar">
            <div class="left-part">
                <a id="huaban" href="/"></a>
                <a href="/discovery/" class="header-item ">发现</a>
                <a href="/all/" class="header-item ">最新</a>
                <a href="https://muse.huaban.com/" class="header-item meisi">美思</a>
                <a href="/activities/" rel="nofollow" class="header-item meisi">活动<i class="muse entrance"></i></a>
                <a href="http://meia.me" target="_blank" class="header-item">教育</a>
                <div class="menu-nav">
                    <div class="header-main-menu">
                        <div class="top-module">
                            <a href="http://live.huaban.com/" rel="nofollow" class="text app-link">花瓣live</a>
                            <a href="/apps/" rel="nofollow" class="text app-link">移动应用</a>
                            <a href="/about/goodies/" rel="nofollow" class="text repin-link">采集工具</a>
                        </div>
                        <div id="category_more" class="middle-module clearfix">
                            <div class="col-1 col">
                                <a href="/favorite/web_app_icon/" rel="nofollow" data-id="web_app_icon"
                                   class="category-link">UI/UX</a>
                                <a href="/favorite/design/" rel="nofollow" data-id="design" class="category-link">平面</a>
                                <a href="/favorite/illustration/" rel="nofollow" data-id="illustration"
                                   class="category-link">插画/漫画</a>
                                <a href="/favorite/home/" rel="nofollow" data-id="home" class="category-link">家居/家装</a>
                                <a href="/favorite/apparel/" rel="nofollow" data-id="apparel" class="category-link">女装/搭配</a>
                            </div>
                            <div class="col-2 col">
                                <a href="/favorite/men/" rel="nofollow" data-id="men"
                                   class="category-link">男士/风尚</a>
                                <a href="/favorite/wedding_events/" rel="nofollow" data-id="wedding_events"
                                   class="category-link">婚礼</a>
                                <a href="/favorite/industrial_design/" rel="nofollow" data-id="industrial_design"
                                   class="category-link">工业设计</a>
                                <a href="/favorite/photography/" rel="nofollow" data-id="photography"
                                   class="category-link">摄影</a>
                                <a href="/categories/" rel="nofollow" data-id="more"
                                   class="all-categories-link category-link">兴趣/生活 »</a>
                            </div>
                        </div>
                        <div class="bottom-module clearfix">
                            <div icon="pin-icon" onclick="app.switchHeaderTo('side');return false;" class="to-side">

                            </div>
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