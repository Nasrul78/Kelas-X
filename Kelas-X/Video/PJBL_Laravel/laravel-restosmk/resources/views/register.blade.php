@extends('front')

@section('content')
    <div class="row">
        <div class="col-6">
            <form action="" method="post">
                <div class="mt-2">
                    <label class="form-label" for="">Pelanggan</label>
                    <input class="form-control" type="text" name="pelanggan">
                </div>
                <div class="mt-2">
                    <label class="form-label" for="">Alamat</label>
                    <input class="form-control" type="text" name="alamat">
                </div>
                <div class="mt-2">
                    <label class="form-label" for="">Nomer Telepon</label>
                    <input class="form-control" type="text" name="telp">
                </div>
                <div class="mt-2">
                    <label class="form-label" for="">Jenis Kelamin</label>
                    <select class="form-select" name="jeniskelamin" id="">
                        <option value="L">L</option>
                        <option value="P" selected>P</option>
                    </select>
                </div>
                <div class="mt-2">
                    <label class="form-label" for="Email"></label>
                    <input class="form-control" type="email" name="email">
                </div>
                <div class="mt-2">
                    <label class="form-label" for="">Password</label>
                    <input class="form-control" type="password" name="password">
                </div>
                <div class="mt-4">
                    <button class="btn btn-primary" type="submit">Register</button>
                </div>
            </form>
        </div>
    </div>
@endsection