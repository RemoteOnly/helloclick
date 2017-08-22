@extends('admin.layouts.app')

@section('main_content')
    <div class="box">
        <div class="box-header with-border">
            <h3 class="box-title">创建标签</h3>
            <div class="col-sm-12 no-padding ">
                <div class="btn-group pull-right ">
                    <a href="{{ route('admin.tag.index') }}" class="btn btn-success btn-sm">返回标签列表</a>
                </div>
            </div>
        </div>
        <div class="box-body">
            @include('flash::message')
            <form action="{{ route('admin.tag.store') }}" method="post" class="form-horizontal">
                {{ csrf_field() }}
                <div class="form-group">
                    <label for="" class="col-sm-2 control-label">标签名 </label>
                    <div class="col-sm-6">
                        <input type="text" class="form-control" name="name" value="{{ old('name','') }}">
                    </div>
                </div>
                <div class="form-group">
                    <label for="" class="col-sm-2 control-label">slug </label>
                    <div class="col-sm-6">
                        <input type="text" class="form-control col-sm-6" name="slug" value="{{ old('slug','') }}">
                    </div>
                </div>
                <div class="form-group">
                    <label for="" class="col-sm-2 control-label">排序 </label>
                    <div class="col-sm-6">
                        <input type="number" class="form-control col-sm-6" name="display_order"
                               value="{{ old('display_order',0) }}">
                    </div>
                </div>
                <div class="form-group">
                    <label for="" class="col-sm-2 control-label">是否是banner </label>
                    <div class="col-sm-6">
                        <label class="control-label margin-r-5">
                            <input type="radio" class="radio-inline" name="is_banner"
                                   value="yes"> 是
                        </label>
                        <label class="control-label margin-r-5">
                            <input type="radio" class="radio-inline" name="is_banner"
                                   value="no"> 否
                        </label>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-6 col-sm-push-2">
                        <button class="btn btn-primary">确认</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
@endsection

@section('script')
    <script src="{{ mix('/admin/js/admin.js') }}"></script>
@endsection