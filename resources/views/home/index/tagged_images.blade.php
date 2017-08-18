@extends('home.layouts.app')

@section('content')
    <div class="wrapper" style="width: 1244px">
        <div class="category-image-box favorite">
            @foreach($favorites as $favorite)
                <a href="http://huaban.com/explore/meishisheying/?md=newbn&amp;photography" target="_blank"
                   title="{{ $favorite->name }}" rel="nofollow" class="category-image">
                    <img width="236" height="126"
                         src="https://hbfile.b0.upaiyun.com/img/category_page/f46995bfa083f6c984b18c52789b272f46eaa97db3dd"
                         data-baiduimageplus-ignore="1">
                </a>
            @endforeach
        </div>
        <div id="waterfall" style="position:relative">
            <div class="pin  recommends wft waterfall-item" style="position: absolute; left: 0px; top: 0px;"
                 data-index="0">
                <div class="recommend users">
                    <a href="/users/favorite/photography/" class="header">推荐用户
                        <div class="more link">»</div>
                    </a>
                    <div class="field">
                        <a href="/bearttll/" title="访问呆熊笨猪的空间" class="avatar">
                            <img src="//img.hb.aicdn.com/885a60a34b36a910212f04d30214197b24db93231a7f46-ygQyyi_sq75"
                                 width="75" height="75" data-baiduimageplus-ignore="1">
                        </a>
                        <div class="mate">
                            <a href="/bearttll/" title="访问呆熊笨猪的空间" class="author">呆熊笨猪
                                <img src="/img/medals/icon_designer.png" data-baiduimageplus-ignore="1"
                                     class="v-icon">
                            </a>
                            <div class="repin">
                                <span class="info">51787 采集</span>
                                <span class="info">604417 粉丝</span>
                            </div>
                        </div>
                    </div>
                    <div class="field">
                        <a href="/d3n9awdc7w/" title="访问逆光の舞者的空间" class="avatar">
                            <img src="//img.hb.aicdn.com/16ec006e695b701214d1e88fd0452b54db69ca3b1033f-dEn0sS_sq75"
                                 width="75" height="75" data-baiduimageplus-ignore="1">
                        </a>
                        <div class="mate">
                            <a href="/d3n9awdc7w/" title="访问逆光の舞者的空间" class="author">逆光の舞者</a>
                            <div class="repin">
                                <span class="info">53887 采集</span>
                                <span class="info">378426 粉丝</span>
                            </div>
                        </div>
                    </div>
                    <div class="field">
                        <a href="/hongxiaoxuan/" title="访问洪小漩的空间" class="avatar">
                            <img src="//img.hb.aicdn.com/66d2c2b361380712457830428b93e4b9c6d80f075d97-MbOqeN_sq75"
                                 width="75" height="75" data-baiduimageplus-ignore="1">
                        </a>
                        <div class="mate">
                            <a href="/hongxiaoxuan/" title="访问洪小漩的空间" class="author">洪小漩
                                <img src="/img/medals/icon_designer.png" data-baiduimageplus-ignore="1"
                                     class="v-icon">
                            </a>
                            <div class="repin">
                                <span class="info">4413 采集</span>
                                <span class="info">16441 粉丝</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <waterfall v-for="item in items" :item='item' :key="item.id" :data-index="item.id"></waterfall>
        </div>
        <div class="loading" style="display: block;">
            <span id="loading-btn" data-offset="0" @click="loadMore">加载更多</span>
            <div id="loading-info" hidden>
                <img src="/img/loading.gif">
                <span>正在加载...</span>
            </div>
        </div>
    </div>
@endsection

@section('script')
    <script src="{{ mix('/js/app.js') }}"></script>
@endsection