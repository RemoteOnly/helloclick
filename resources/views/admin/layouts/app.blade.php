<!DOCTYPE html>
<html>
@section('html_header')
    @include('admin.layouts.partials.html_header')
@show
<body class="hold-transition skin-blue fixed sidebar-mini">
<div class="wrapper">
    @include('admin.layouts.partials.main_header')
    @include('admin.layouts.partials.sidebar')
    <div class="content-wrapper">
        @include('admin.layouts.partials.content_header')

        <section class="content">
            @yield('main_content')
        </section>

        @include('admin.layouts.partials.footer')
        @include('admin.layouts.partials.controls_sidebar')
    </div>
</div>
</body>
@include('admin.layouts.partials.script')
<script>
    $(function () {
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
    });
</script>
@section('script')

@show
</html>
