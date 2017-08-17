<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Styles -->
    <link rel="stylesheet" href="{{ mix('css/main.css') }}">
    <link rel="stylesheet" href="{{ mix('css/self.css') }}">
    <link rel="stylesheet" href="{{ asset('css/common.css') }}">
    <link rel="stylesheet" href="{{ asset('css/common2.css') }}">
    <link rel="stylesheet" href="{{ asset('/plugin/sweetalert2/dist/sweetalert2.min.css') }}">
    <script src="{{ asset('/plugin/sweetalert2/dist/sweetalert2.min.js') }}"></script>
    @section('css')
    @show
</head>
<body>
<div id="page" class="page-min-width page-with-header" style="display: block;" url="{{ route('load_images') }}">
    @include('home.layouts._header')

    @section('content')
    @show

    @include('home.layouts._login_register')
</div>

<div class="clear"></div>
<div id="page_overlay" style="display: none;" class="overlay"></div>

@include('home.layouts._elevator')
@include('flash::message')

<!-- Scripts -->
<script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
<script>
    window.CSRF_TOKEN = "{{ csrf_token() }}";
    $.ajaxSetup({
        headers: {'X-CSRF-TOKEN': '{{ csrf_token() }}'}
    });
</script>

@section('script')
@show
<script src="{{ mix('/js/common.js') }}"></script>

</body>
</html>
