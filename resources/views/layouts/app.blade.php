<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="referrer" content="always">
    <meta name="keywords" content="旅游,旅游景点,旅游景点推荐">
    <meta name="description" content="花瓣用户采集的旅行图片">
    <meta http-equiv="mobile-agent" content="format=html5;url=http://huaban.com/favorite/travel_places/">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Styles -->
    <link rel="stylesheet" href="{{ asset('css/main.css') }}">
    @section('css')
    @show
</head>
<body>
<div id="page" class="page-min-width page-with-header" style="display: block;">
    @include('layouts._header')

    @section('content')
    @show
</div>

<div class="clear"></div>
<div id="page_overlay" style="display: none;" class="overlay"></div>

@include('layouts._elevator')

<!-- Scripts -->
@section('script')
@show

</body>
</html>
