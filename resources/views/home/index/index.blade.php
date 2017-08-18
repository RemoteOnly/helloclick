@extends('home.layouts.app')

@section('content')
    <div class="wrapper" style="width: 1244px">
        <div class="category-image-box favorite">
            @foreach($favorites as $favorite)
                <a href="{{ route('show_tagged_images',['slug'=>$favorite->slug]) }}" target="_blank"
                   title="{{ $favorite->name }}" class="category-image">
                    <img width="236" height="126"
                         src="https://hbfile.b0.upaiyun.com/img/category_page/f46995bfa083f6c984b18c52789b272f46eaa97db3dd"
                    >
                </a>
            @endforeach
        </div>
        <div id="waterfall" style="position:relative">
            <div class="pin  recommends wft waterfall-item" style="position: absolute; left: 0px; top: 0px;"
                 data-index="0">
                <div class="recommend users">
                    <span class="header">推荐用户</span>
                    @foreach($recommended_users as $user)
                        <div class="field">
                            <a href="{{ route('user.index', ['id' => $user->id]) }}" class="avatar" target="_blank">
                                <img src="{{ $user->photo }}" width="75" height="75">
                            </a>
                            <div class="mate">
                                <a href="{{ route('user.index',['id' => $user->id]) }}" class="author" target="_blank">
                                    {{ $user->name }}
                                </a>
                                <div class="repin">
                                    <span class="info">{{ $user->fans_count }} 粉丝</span>
                                    <span class="info">{{ $user->images_count }} 作品</span>
                                </div>
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>

            <waterfall v-for="item in items" :item='item' :key="item.id" :data-index="item.id"></waterfall>
        </div>
        <div class="loading" style="display: block;">
            <span id="loading-btn" data-offset="0" @click="loadMore">...</span>
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