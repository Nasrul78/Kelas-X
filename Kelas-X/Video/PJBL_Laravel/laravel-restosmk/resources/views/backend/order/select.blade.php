@extends('backend.back')

@section('admincontent')
    <div>
        <h1>Order</h1>
    </div>
    <div>
        <a href="{{ url('admin/kategori/create') }}" class="btn btn-primary">Tambah Data</a>
    </div>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Pelanggan</th>
                    <th>Tanggal</th>
                    <th>Total</th>
                    <th>Bayar</th>
                    <th>Kembali</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                @php
                    $no = 1;
                @endphp

                @foreach ($orders as $order)
                    <tr>
                        <td>{{ $no++ }}</td>
                        <td>{{ $order->pelanggan }}</td>
                        <td>{{ $order->tglorder }}</td>
                        <td>{{ $order->total }}</td>
                        <td>{{ $order->bayar }}</td>
                        <td>{{ $order->kembali }}</td>
                        <td>{{ $order->status }}</td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
    <div class="d-flex justify-content-center mt-2">
        {{ $orders->withQueryString()->links() }}
    </div>
@endsection