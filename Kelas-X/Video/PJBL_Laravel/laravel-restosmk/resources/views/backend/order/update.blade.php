@extends('backend.back')

@section('admincontent')
    <div>
        <h1>{{ number_format($order->total) }}</h1>
    </div>
    <div class="col-4">
        <form action="{{ url('admin/order/'.$order->idorder) }}" method="post">
            @csrf
            @method('PUT')

            <div class="mt-2">
                <label class="form-label" for="Email">Total</label>
                <input class="form-control" min="{{ $order->total }}" value="{{ $order->total }}" type="number" name="bayar">
                <span class="text-danger">
                    @error('total'){{ $message }}@enderror
                </span>
            </div>

            <div class="mt-4">
                <button class="btn btn-primary" type="submit">Bayar</button>
            </div>
        </form>
    </div>
@endsection