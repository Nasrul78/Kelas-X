@extends('backend.back')

@section('admincontent')
    <div>
        <h1>Data User</h1>
    </div>
    <div>
        <a href="{{ url('admin/User/create') }}" class="btn btn-primary">Tambah Data</a>
    </div>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>Email</th>
                    <th>Level</th>
                    <th>Ubah</th>
                    <th>Hapus</th>
                </tr>
            </thead>
            <tbody>
                @php
                    $no = 1;
                @endphp

                @foreach ($users as $user)
                    <tr>
                        <td>{{ $no++ }}</td>
                        <td>{{ $user->name }}</td>
                        <td>{{ $user->email }}</td>
                        <td>{{ $user->level }}</td>
                        <td><a href="{{ url('admin/user/'.$user->iduser.'/edit') }}">Ubah</a></td>
                        <td><a href="{{ url('admin/user/'.$user->iduser) }}">Hapus</a></td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
@endsection