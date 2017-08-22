@extends('admin.layouts.app')

@section('main_content')
    <div class="box">
        <div class="box-header with-border">
            <h3 class="box-title">评论管理</h3>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-12 no-padding">
                        <div class="col-sm-6 no-padding">
                            <div class="btn-group">
                                <a href="{{ route('admin.comment.index') }}" class="btn btn-success btn-sm">刷新</a>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="input-group">
                                <input type="text" class="form-control" id="keyword" value="{{ $keyword or '' }}">
                                <div class="input-group-btn">
                                    <button type="button" class="btn btn-default dropdown-toggle"
                                            data-toggle="dropdown">
                                        {{ $filter ? $filters[$filter] : '选择搜索' }}
                                        <span class="caret"></span>
                                    </button>
                                    <ul class="dropdown-menu pull-right">
                                        @foreach($filters as $filter => $value)
                                            <li>
                                                <a href="javascript:void(0);" class="search"
                                                   data-url="{{ route('admin.comment.index') }}?filter={{ $filter }}&keyword=">{{ $value }}</a>
                                            </li>
                                        @endforeach
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="box-body">
            <table class="table table-bordered">
                <tr>
                    <th>ID</th>
                    <th>图片</th>
                    <th>品论人</th>
                    <th>内容</th>
                    <th>发布时间</th>
                    <th>操作</th>
                </tr>
                @foreach($comments as $comment)
                    <tr>
                        <td>{{ $comment->id }}</td>
                        <td>
                            <a href="{{ route('admin.comment.index',['filter'=>'image_id','keyword'=>$comment->image->id]) }}">
                                {{ $comment->image->name }}
                            </a>
                        </td>
                        <td>
                            <a href="{{ route('admin.comment.index',['filter'=>'user_id','keyword'=>$comment->user->id]) }}">
                                {{ $comment->user->name }}
                            </a>
                        </td>
                        <td>
                            <p style="max-height: 200px;overflow-y: scroll">
                                {!!  $comment->content  !!}
                            </p>
                        </td>
                        <td>
                            {{ $comment->created_at->toDateString() }} <br>
                            {{ $comment->created_at->toTimeString() }}
                        </td>
                        <td>
                            <a href="javascript:void(0)" class="comment-destroy"
                               data-url="{{ route('admin.comment.destroy',['comment_id'=>$comment->id]) }}">删除</a>
                        </td>
                    </tr>
                @endforeach
            </table>
        </div>
        <div class="box-footer">
            {{ $comments->render() }}
        </div>
    </div>
@endsection

@section('script')
    <script src="{{ mix('/admin/js/admin.js') }}"></script>
@endsection