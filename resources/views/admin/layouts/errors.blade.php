<!DOCTYPE html>
<html>

@include('admin.layouts.partials.html_header')
<body>
<div id="app">
    <!-- Main content -->
    <section class="content">
        <!-- Your Page Content Here -->
        @yield('main_content')
    </section>
</div>
@section('script')
    @include('admin.layouts.partials.script')
@show
</body>
</html>