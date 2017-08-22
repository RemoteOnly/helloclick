@extends('admin.layouts.app')

@section('main_content')
    <div class="box">
        <div class="box-header with-border">
            <h3 class="box-title">图片管理</h3>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-12 no-padding">
                        <div class="col-sm-6 no-padding">
                            <div class="btn-group">
                                <a href="{{ route('admin.image.index') }}" class="btn btn-success btn-sm">刷新</a>
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
                                                   data-url="{{ route('admin.image.index') }}?filter={{ $filter }}&keyword=">{{ $value }}</a>
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
                    <th>预览</th>
                    <th>名称</th>
                    <th>发布人</th>
                    <th>标签</th>
                    <th width="300px">描述</th>
                    <th>预览数</th>
                    <th>心数</th>
                    <th>评论数</th>
                    <th>发布时间</th>
                    <th>操作</th>
                </tr>
                @foreach($images as $image)
                    <tr>
                        <td>{{ $image->id }}</td>
                        <td>
                            <img src="{{ $image->url }}" alt="" width="64px" height="64px">
                        </td>
                        <td>{{ $image->name }}</td>
                        <td>
                            <a href="{{ route('admin.image.index',['user_id'=>$image->user->id]) }}">
                                {{ $image->user->name }}
                            </a>
                        </td>
                        <td>
                            @foreach($image->tags as $tag)
                                <a href="{{ route('admin.image.index',['tag_id'=>$tag->id]) }}">{{ $tag->name }}</a>
                            @endforeach
                        </td>
                        <td>
                            <p style="max-height:100px;overflow-y: scroll"> {{ $image->description }}  </p>
                        </td>
                        <td>{{ $image->view_count }}</td>
                        <td>{{ $image->favor_count }}</td>
                        <td>{{ $image->comment_count }}</td>
                        <td>{{ $image->created_at->toDateString() }}<br/>{{ $image->created_at->toTimeString() }}</td>
                        <td>
                            <a href="javascript:void(0)" class="image-destroy"
                               data-url="{{ route('admin.image.destroy',['image_id'=>$image->id]) }}">删除</a>
                        </td>
                    </tr>
                @endforeach
            </table>
        </div>
        <div class="box-footer">
            {{ $images->render() }}
        </div>
    </div>
@endsection

@section('script')
    <script src="{{ mix('/admin/js/admin.js') }}"></script>
@endsection