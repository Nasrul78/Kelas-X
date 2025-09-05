@extends('backend.back')

@section('admincontent')
    <div>
        <h2>Update Data</h2>
    </div>
    <div class="col-4">
        <form action="{{ url('admin/postmenu/'.$menu->idmenu) }}" method="post" enctype="multipart/form-data">
            @csrf

            <select class="form-select" name="idkategori" id="">
                @foreach ($kategoris as $kategori)
                    <option
                        @selected($kategori->idkategori == $menu->idkategori)
                        value="{{ $kategori->idkategori }}">
                        {{ $kategori->kategori }}
                    </option>
                @endforeach
            </select>
            <div class="mt-2">
                <label class="form-label" for="Email">Menu</label>
                <input class="form-control" type="text" value="{{ $menu->menu }}" name="menu">
                <span class="text-danger">
                    @error('menu'){{ $message }}@enderror
                </span>
            </div>
            <div class="mt-2">
                <label class="form-label" for="Email">Deskripsi</label>
                <input class="form-control" type="text" value="{{ $menu->deskripsi }}" name="deskripsi">
                <span class="text-danger">
                    @error('deskripsi'){{ $message }}@enderror
                </span>
            </div>
            <div class="mt-2">
                <label class="form-label" for="Email">Harga</label>
                <input class="form-control" type="number" value="{{ $menu->harga }}" name="harga">
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