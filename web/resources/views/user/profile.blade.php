@extends('layouts.app')

@section('links')
    <link rel="stylesheet" href="{{asset('css/custom.css')}}">
@endsection

@section('content')
    <div class="container">

        <div class="row">

            <div class="col-md-12">
                @include('components.errors')
            </div>

        </div>

        <div class="row justify-content-center">

            <div class="profile-header-container">
                <div class="profile-header-img">
                    <img class="rounded-circle profile-image" src="{{asset('img/users/'.$user->avatar)}}" />
                </div>
            </div>

        </div>
        
        <div class="row my-4 justify-content-center">
            <form action="{{route('user.profile.update')}}" method="post" enctype="multipart/form-data">
                @csrf
                <div class="form-group">
                    <input type="file" class="form-control-file" name="avatar" id="avatarFile" aria-describedby="fileHelp">
                    <small id="fileHelp" class="form-text text-muted">Sube un archivo de imagen válido. El tamaño de la imagen no debe superar los 15 MB.</small>
                </div>
                <button type="submit" class="btn btn-primary">Enviar</button>
            </form>
        </div>
    </div>

@endsection