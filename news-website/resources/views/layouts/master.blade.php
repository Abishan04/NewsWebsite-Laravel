<!DOCTYPE html>
<html lang="">

<head>
    <meta charset="utf-8">
    <title>@yield('title')</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link href="{{ asset('css/styles.css') }}" rel="stylesheet">
    @stack('styles')
</head>

<body>
    @include('partials.header')
    <h1 id="title" class="text-center">
        @if(isset($name))
            Welcome <span class="text-primary font-weight-bold">{{ $name }}</span>
        @else
            Welcome to Yarlit
        @endif
    </h1>
      
    @yield('content')
    @include('partials.footer')

    <a href="javascript:" id="return-to-top"><i class="fa fa-chevron-up"></i></a>
    <script type="text/javascript" src="{{ asset('js/index.bundle.js') }}"></script>
    @yield('scripts')
</body>

</html>