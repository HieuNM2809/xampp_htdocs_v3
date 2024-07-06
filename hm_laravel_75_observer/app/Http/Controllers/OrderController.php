<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function store(Request $request)
    {
        $order = Order::create([
                                   'quantity'   => rand(1, 9),
                                   'status'     => 'pending',
                               ]);

        dd($order);
    }

    public function update(Request $request, Order $order)
    {

        $order->update([
                           'quantity' => rand(1, 9),
                       ]);

        dd($order);
    }

    public function destroy(Order $order)
    {
        $order->delete();

        dd($order);
    }
}
