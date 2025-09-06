@extends('backend.back')

@section('admincontent')
    <div class="col-4">
        <form action="{{ url('admin/user') }}" method="post">
            @csrf

            <div class="mt-2">
                <label class="form-label" for="Email">Level</label>
                <select class="form-select" name="level" id="">
                    <option value="manager">Manager</option>
                    <option value="kasir">Kasir</option>
                    <option value="admin">Admin</option>
                </select>
            </div>
            <div class="mt-2">
                <label class="form-label" for="Email">Nama</label>
                <input class="form-control" value="{{ old('name') }}" type="text" name="name">
                <span class="text-danger">
                    @error('name'){{ $message }}@enderror
                </span>
            </div>
            <div class="mt-2">
                <label class="form-label" for="Email">Email</label>
                <input class="form-control" value="{{ old('email') }}" type="text" name="email">
                <span class="text-danger">
                    @error('email'){{ $message }}@enderror
                </span>
            </div>
            <div class="mt-2">
                <label class="form-label" for="Email">Password</label>
                <input class="form-control" value="{{ old('password') }}" type="password" name="password">
                <span class="text-danger">
                    @error('password'){{ $message }}@enderror
                </span>
            </div>

            <div class="mt-4">
                <button class="btn btn-primary" type="submit">Simpan</button>
            </div>
        </form>
    </div>
@endsection