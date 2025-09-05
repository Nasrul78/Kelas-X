@extends('backend.back')

@section('admincontent')
    <div class="col-4">
        <form action="{{ url('admin/kategori/'.$kategori->idkategori) }}" method="post">
            @csrf
            @method('PUT')

            <div class="mt-2">
                <label class="form-label" for="Email">Kategori</label>
                <input class="form-control" value="{{ $kategori->kategori }}" type="text" name="kategori">
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