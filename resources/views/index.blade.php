<!DOCTYPE html>
<html>
<head>
    <title>Redux counter example</title>
</head>
<body>
    <div id="root">
    </div>
    @if (\App::isLocal())
        <script src="http://localhost:3000/static/bundle.js"></script>
    @else
        <script src="{{ asset('dist/app.min.js') }}"></script>
    @endif
</body>
</html>