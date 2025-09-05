@extends('backend.back')

@section('admincontent')
    <div>
        <h1>Kategori</h1>
    </div>
    <div>
        <a href="#" class="btn btn-primary">Tambah Data</a>
    </div>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Kategori</th>
                    <th>Ubah</th>
                    <th>Hapus</th>
                </tr>
            </thead>
            <tbody>
                @php
                    $no = 1;
                @endphp

                @foreach ($kategoris as $kategori)
                    <tr>
                        <td>{{ $no++ }}</td>
                        <td>{{ $kategori->kategori }}</td>
                        <td>{{ $kategori->idkategori }}</td>
                        <td>{{ $kategori->idkategori }}</td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
@endsection