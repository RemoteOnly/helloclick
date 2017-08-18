<div id="user_card">
    <div class="maozi">
    </div>
    <div class="inner clearfix ">
        <div class="avatar-unit">
            <div class="img">
                <img src="{{ $user->photo }}" class="current-avatar">
                <img src="/img/load2.gif" style="display:none;" class="load">
            </div>
            <div class="counts clearfix">
                <a href="javascript:void(0);" class="followers">
                    <div class="num">{{ $user->fans_count }}</div>
                    <div class="sub">粉丝</div>
                </a>
                <a href="javascript:void(0);" class="follows">
                    <div class="num">{{ $user->images_count }}</div>
                    <div class="sub">作品</div>
                </a>
            </div>
        </div>
        <div class="head-line">
            <div class="name">{{ $user->name }}</div>
            <div class="muse medal-info verified">
                <div class="content">
                    <div class="cc">
                        <div class="label">摄影师</div>
                        <div class="label">造型师</div>
                    </div>
                    <div class="desc">摄影师，擅长日拍摄美女和儿童。拍摄风格偏日系，轻复古。有自己的摄影工作室，目前承接个人写真，证件照的拍摄以及婚纱摄影，婚礼跟拍，商业视频等。</div>
                </div>
                <i class="arrow-top"></i>
            </div>
        </div>
        <ul class="introduction">
            <li>
                <i id="intro_sex_woman"></i>
                <em>女</em>
            </li>
            <li>
                <i id="intro_location"></i>
                <em>来自浙江 杭州</em>
            </li>
            <li>
                <i id="intro_horoscope"></i>
                <em>巨蟹座</em>
            </li>
            <li>
                <i id="intro_job"></i>
                <em>摄影师</em>
            </li>
        </ul>
        <div class="about clearfix">about</div>
        <div class="action-buttons">
            @if(Auth::id() != $user->id)
                @if($has_followed == true)
                    <a data-urlname="bearttll" title="关注呆熊笨猪" href="#" onclick="return false;"
                       class="followuser btn rbtn">
                        <span class="text"> 已关注</span>
                    </a>
                @else
                    <a data-urlname="bearttll" title="关注呆熊笨猪" href="#" onclick="return false;"
                       class="followuser btn rbtn">
                        <span class="text"> 关注</span>
                    </a>
                @endif
            @endif
        </div>
        <div class="bindings">
            <a href="http://weibo.com/1759432433" target="_blank" class="weibo"></a>
        </div>
        <div title="举报用户" class="report-user"></div>
    </div>
    {{--<div class="side">
        <h4>最多转采自</h4>
        <a href="/xiaoling/" class="item x">
            <img src="//hbimg.b0.upaiyun.com/c6771323a04dedf962edaf7b39b5a7c137be3ca6314e4-DpofS3_sq75sf"
                 data-baiduimageplus-ignore="1">潇洒晓玲</a>
        <a href="/meirijingxuan/" class="item x">
            <img src="//hbimg.b0.upaiyun.com/3a0e682bac328e5aa8a6b2d5304d9716560a9416b609-kqAOwi_sq75sf"
                 data-baiduimageplus-ignore="1">黑化前女友</a>
        <a href="/crystalfantasy/" class="item x">
            <img src="//hbimg.b0.upaiyun.com/8c4ad8c473dda46df6c949db4861522dc3cbf7c010443-wsYmc3_sq75sf"
                 data-baiduimageplus-ignore="1">水晶幻想</a>
    </div>--}}
</div>