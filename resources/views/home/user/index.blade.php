@extends('home.layouts.app')

@section('content')
    <div class="wrapper" style="width: 1244px">
        @include('home.layouts._user_header')
        <div id="waterfall" style="position:relative">
            <div class="pin  recommends wft waterfall-item" style="position: absolute; left: 0px; top: 0px;"
                 data-index="0">
                <div class="recommend users">
                    <span class="header">ta的标签</span>
                    <div class="field">
                        @foreach($user->tags as $tag)
                            <a href="{{ route('user.index',['user_id'=>$user->id,'slug'=>$tag->slug]) }}">{{ $tag->name }}</a>
                        @endforeach
                    </div>
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