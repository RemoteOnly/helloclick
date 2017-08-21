<!DOCTYPE html>
<html>
@section('html_header')
    @include('admin.layouts.partials.html_header')
@show
<!-- ADD THE CLASS fixed TO GET A FIXED HEADER AND SIDEBAR LAYOUT -->
<!-- the fixed layout is not compatible with sidebar-mini -->
<body class="hold-transition skin-blue fixed sidebar-mini">
<!-- Site wrapper -->
<div class="wrapper">
@include('admin.layouts.partials.main_header')
<!-- =============================================== -->
    <!-- Left side column. contains the sidebar -->
@include('admin.layouts.partials.sidebar')
<!-- =============================================== -->
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
    @include('admin.layouts.partials.content_header')
    <!-- Main content -->
        <section class="content">
            @yield('main_content')
        </section>
        <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->

@include('admin.layouts.partials.footer')
<!-- Control Sidebar -->
    @include('admin.layouts.partials.controls_sidebar')
</div>
<!-- ./wrapper -->
</body>
@section('script')
    @include('admin.layouts.partials.script')
@show
</html>
