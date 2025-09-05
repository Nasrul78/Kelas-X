@extends('backend.back')

@section('admincontent')
    <div>
        <form action="{{ url('admin/kategori') }}" method="post">
            @csrf

            <div class="mt-2">
                <label class="form-label" for="Email">Kategori</label>
                <input class="form-control" value="{{ old('kategori') }}" type="text" name="kategori">
                <span class="text-danger">
                    @error('kategori'){{ $message }}@enderror
                </span>
            </div>

            <div class="mt-4">
                <button class="btn btn-primary" type="submit">Simpan</button>
            </div>
        </form>
    </div>
@endsection