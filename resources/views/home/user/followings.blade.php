@extends('home.layouts.app')

@section('content')
    <div class="wrapper" style="width: 1244px">
        @include('home.layouts._user_header')
        <div id="waterfall" style="position:relative">
            @foreach($followings as $following)
                <div class="person-item followings">
                    <div class="mask"></div>
                    <a href="{{ route('user.index',['user_id'=>$following->id]) }}" class="img x loaded"
                       target="_blank">
                        <img src="{{ $following->photo }}" class="avt">
                    </a>
                    <a href="{{ route('user.index',['user_id'=>$following->id]) }}" target="_blank"
                       class="username">
                        {{ $following->name }}
                    </a>
                    <div class="person-item-meta">
                        <span class="first-meta">{{ $following->fans_count }} 粉丝</span>
                        <span>{{ $following->images_count }} 作品</span>
                    </div>
                    <div class="pins">
                        @foreach($following->recent_images as $image)
                            <a href="{{ route('show',['image_id'=>$image->id]) }}" class="img x" target="_blank">
                                <img src="{{ $image->url }}" width="75" height="75">
                            </a>
                        @endforeach
                    </div>
                    <div class="btn-bar">
                        <a href="#" class="btn cancel-following" data-user-id="{{ $following->id }}">
                            <span class="text">取消关注</span>
                        </a>
                    </div>
                </div>
            @endforeach
        </div>
        <div style="text-align: center">
            {{ $followings->render() }}
        </div>
    </div>
@endsection
