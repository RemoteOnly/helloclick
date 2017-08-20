@extends('home.layouts.app')

@section('content')
    <div id="pin_view_page">
        <div class="pin-view">
            <div class="pin-view-wrapper">
                <div class="main-part">
                    <div class="image-piece piece">
                        <div class="tool-bar"></div>
                        <div class="main-image">
                            <div id="baidu_image_holder" class="image-holder">
                                <img src="{{ $image->url }}" width="600" height="400" id="current-image"
                                     data-image-id="{{ $image->id }}">
                            </div>
                        </div>
                        <div class="tool-bar-bottom">
                            <a href="#" onclick="return false;" class="btn-with-icon btn">
                                <i class="class"></i>
                                <span class="text"> 查看 <span class="num">{{ $image->view_count }}</span></span>
                            </a>
                            <a href="#" onclick="return false;" class="like-btn btn-with-icon btn">
                                <i class="class"></i>
                                <span class="text"> 喜欢 <span class="num">{{ $image->favor_count }}</span></span>
                            </a>
                            <a href="javascript:void(0);" class="comment-btn btn-with-icon btn">
                                <i class="class"></i>
                                <span class="text"> 评论
                                    <span class="num" id="comment-count">{{ $image->comment_count }}</span>  </span>
                            </a>
                        </div>
                        <div class="extra-box"></div>
                    </div>
                    <div class="info-piece piece">
                        <div class="comments">
                            @foreach($comments as $comment)
                                <div class="comment" style="background-color: transparent;">
                                    <a href=" " class="img x">
                                        <img src="{{ $comment->user->photo }}" class="avatar"></a>
                                    <div class="meta">
                                        <a href="{{ route('user.index',['id'=>$comment->user->id]) }}"
                                           class="author">{{ $comment->user->name }}</a>&nbsp;-&nbsp;
                                        <span class="ts-words">{{ $comment->created_at->diffForHumans() }}</span>说：
                                    </div>
                                    <div class="text">
                                        {!!  $comment->content !!}
                                    </div>
                                    <div class="action-buttons">
                                        <a data-at-user-id="{{ $comment->user->id }}"
                                           data-at-user-name="{{ $comment->user->name }}"
                                           title="回复"
                                           class="reply-button"></a>
                                        @if(Auth::check() && Auth::id() == $comment->user->id)
                                            <a data-comment-id="{{ $comment->id }}" title="删除" class="delete"></a>
                                        @endif
                                    </div>
                                </div>
                            @endforeach
                        </div>
                        <div id="pin_view_add_comment" class="clearfix">
                            <a href="javascript:void(0);" title="" class="img x">
                                @if(Auth::check())
                                    <img src="{{ Auth::user()->photo }}" class="avatar">
                                @else
                                    <img src="/img/annoymous.png" class="avatar">
                                @endif
                            </a>
                            <textarea name="caption" placeholder="添加评论..." class="clear-input"
                                      id="comment-content"></textarea>
                            <a href="#" onclick="return false;" class="btn btn14" id="add-comment"
                               data-image-id="{{ $image->id }}">
                                <span class="text"> 添加评论</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="side-part" style="position: absolute; top: 0px; right: 0px;">
                    <div class="board-piece piece">
                        <div class="board-info">
                            <a href="{{ route('user.index',['user_id'=>$image->user_id]) }}" class="img x"
                               target="_blank">
                                <img src="{{ $image->user->photo }}" class="avt">
                            </a>
                            <a href="{{ route('user.index',['user_id'=>$image->user_id]) }}" target="_blank"
                               class="name x">{{ $image->user->name }}</a>
                            <div class="sub">发布于 {{ $image->created_at->diffForHumans() }}</div>
                        </div>
                        <div class="board-pins cst-scrollbar">
                            <div id="board_pins_waterfall" class="description">
                                {{ $image->description }}
                            </div>
                        </div>
                    </div>
                    <div class="siblings-piece piece">
                        <div class="inner x">
                            <div>这还有...</div>
                            <div class="pins clearfix">
                                @foreach($new_images as $new_image)
                                    <a href="{{ route('show',['image_id'=>$new_image->id]) }}">
                                        <img src="{{ $new_image->url }}" class="space">
                                    </a>
                                @endforeach
                            </div>
                            <div class="arrow"></div>
                        </div>
                    </div>
                </div>
                <div class="clear"></div>
            </div>
        </div>
    </div>
@endsection