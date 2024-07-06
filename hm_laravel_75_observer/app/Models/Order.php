<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable
        = [
            'quantity',
            'total',
            'status',
        ];

    public function calculateTotal()
    {
//        return $this->quantity * $this->product->price;
        return $this->quantity * 1000;
    }

    public function isValid()
    {
        // Logic để kiểm tra tính hợp lệ của đơn hàng
//        return $this->quantity > 0 && $this->product->isAvailable();
        return $this->quantity > 0;
    }

}
