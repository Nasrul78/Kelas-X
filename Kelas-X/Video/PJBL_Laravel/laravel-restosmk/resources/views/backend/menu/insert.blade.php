@extends('backend.back')

@section('admincontent')
    <div>
        <h2>Insert Data</h2>
    </div>

    <div class="col-4">
        <form action="{{ url('admin/menu') }}" method="post" enctype="multipart/form-data">
            @csrf

            <select class="form-select" name="idkategori" id="">
                @foreach ($kategoris as $kategori)
                    <option value="{{ $kategori->idkategori }}">{{ $kategori->kategori }}</option>
                @endforeach
            </select>
            <div class="mt-2">
                <label class="form-label" for="Email">Menu</label>
                <input class="form-control" type="text" name="menu">
                <span class="text-danger">
                    @error('menu'){{ $message }}@enderror
                </span>
            </div>
            <div class="mt-2">
                <label class="form-label" for="Email">Deskripsi</label>
                <input class="form-control" type="text" name="deskripsi">
                <span class="text-danger">
                    @error('deskripsi'){{ $message }}@enderror
                </span>
            </div>
            <div class="mt-2">
                <label class="form-label" for="Email">Harga</label>
                <input class="form-control" type="number" name="harga">
                <span class="text-danger">
                    @error('harga'){{ $message }}@enderror
                </span>
            </div>
            <div class="mt-2">
                <label class="form-label" for="Email">Gambar</label>
                <input class="form-control" type="file" name="gambar">
                <span class="text-danger">
                    @error('gambar'){{ $message }}@enderror
                </span>
            </div>

            <div class="mt-4">
                <button class="btn btn-primary" type="submit">Simpan</button>
            </div>
        </form>
    </div>
@endsection