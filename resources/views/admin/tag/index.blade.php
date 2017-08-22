@extends('admin.layouts.app')

@section('main_content')
    <div class="box">
        <div class="box-header with-border">
            <h3 class="box-title">标签管理</h3>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-12 no-padding">
                        <div class="col-sm-6 no-padding">
                            <div class="btn-group">
                                <a href="{{ route('admin.tag.index') }}" class="btn btn-success btn-sm">刷新</a>
                                <a href="{{ route('admin.tag.create') }}" class="btn btn-primary btn-sm">新增</a>
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
                                                   data-url="{{ route('admin.tag.index') }}?filter={{ $filter }}&keyword=">{{ $value }}</a>
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
                    <th>名称</th>
                    <th>slug</th>
                    <th>显示顺序</th>
                    <th>添加时间</th>
                    <th>操作</th>
                </tr>
                @foreach($tags as $tag)
                    <tr>
                        <td>{{ $tag->id }}</td>
                        <td>{{ $tag->name }}</td>
                        <td>{{ $tag->slug }}</td>
                        <td>{{ $tag->display_order }}</td>
                        <td>
                            {{ $tag->created_at }}
                        </td>
                        <td>
                            <a href="javascript:void(0)" class="tag-edit" data-tag-id="{{ $tag->id }}">编辑</a>
                            <a href="javascript:void(0)" class="tag-destroy"
                               data-url="{{ route('admin.comment.destroy',['comment_id'=>$tag->id]) }}">删除</a>
                        </td>
                    </tr>
                @endforeach
            </table>
        </div>
    </div>
@endsection

@section('script')
    <script src="{{ mix('/admin/js/admin.js') }}"></script>
@endsection