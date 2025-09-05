@extends('backend.back')

@section('admincontent')
    <div class="col-4">
        <form action="{{ url('admin/menu') }}" method="post" enctype="multipart/form-data">
            @csrf

            <div class="mt-2">
                <label class="form-label" for="Email">Menu</label>
                <input class="form-control" type="file" name="gambar">
                <span class="text-danger">
                    @error('gambar'){{ $message }}@enderror
                </span>
            </div>

            <div class="mt-4">
                <button class="btn btn-primary" type="submit">Upload</button>
            </div>
        </form>
    </div>
@endsection