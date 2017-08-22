@extends('admin.layouts.app')

@section('main_content')
    <div class="box">
        <div class="box-header with-border">
            <h3 class="box-title">用户管理</h3>
            <div class="col-xm-12">
                <div class="col-sm-6 col-sm-push-6">
                    <div class="input-group">
                        <input type="text" class="form-control" id="keyword" value="{{ $keyword or '' }}">
                        <div class="input-group-btn">
                            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                {{ $filter ? $filters[$filter] : '选择搜索' }}
                                <span class="caret"></span>
                            </button>
                            <ul class="dropdown-menu pull-right">
                                @foreach($filters as $filter => $value)
                                    <li>
                                        <a href="javascript:void(0);" class="search"
                                           data-url="{{ route('admin.user.index') }}?filter={{ $filter }}&keyword=">{{ $value }}</a>
                                    </li>
                                @endforeach
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="box-body">
            <table class="table table-bordered">
                <tr>
                    <th>ID</th>
                    <th>昵称</th>
                    <th>角色</th>
                    <th>邮箱</th>
                    <th>性别</th>
                    <th>星座</th>
                    <th>作品数</th>
                    <th>粉丝数</th>
                    <th>加入时间</th>
                    <th>状态</th>
                    <th>操作</th>
                </tr>
                @foreach($users as $user)
                    <tr>
                        <td>{{ $user->id }}</td>
                        <td>{{ $user->name }}</td>
                        <td>
                            <a class="toggle-type" href="javascript:void(0)"
                               data-url="{{ route('admin.user.update_type',['user_id'=>$user->id]) }}">
                                {{ $user->type }}
                            </a>
                        </td>
                        <td>{{ $user->email }}</td>
                        <td>{{ $user->sex }}</td>
                        <td>{{ $user->star_sign }}</td>
                        <td>{{ $user->images_count }}</td>
                        <td>{{ $user->fans_count }}</td>
                        <td>{{ $user->created_at }}</td>
                        <td>
                            <a href="javascript:void(0)" class="user-forbid"
                               data-url="{{ route('admin.user.forbid',['user_id'=>$user->id]) }}">
                                {{ $user->deleted_at ? '已禁用':'已启用' }}
                            </a>
                        </td>
                        <td>

                            <a href="javascript:void(0)" class="user-destroy"
                               data-url="{{ route('admin.user.destroy',['user_id'=>$user->id]) }}">删除</a>
                        </td>
                    </tr>
                @endforeach
            </table>
        </div>
        <div class="box-footer">
            {{ $users->render() }}
        </div>
    </div>
@endsection

@section('script')
    <script src="{{ mix('/admin/js/admin.js') }}"></script>
@endsection