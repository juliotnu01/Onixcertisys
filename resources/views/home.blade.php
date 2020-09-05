@extends('layouts.app')

@section('content')

<app root="{{env('APP_URL')}}" :authusr="{{ json_encode(Auth::user()) }}" />

@endsection
