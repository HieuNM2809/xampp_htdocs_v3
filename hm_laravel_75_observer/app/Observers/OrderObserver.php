<?php

namespace App\Observers;

use App\Models\Order;
use Illuminate\Support\Facades\Log;

class OrderObserver
{
    public function retrieved(Order $order)
    {
        \Log::info('retrieved');
    }

    public function creating(Order $order)
    {
        // Logic trước khi tạo order
        if(!$order->isValid()) {
            throw new \Exception('Đơn hàng không hợp lệ');
        }
        \Log::info('creating');
    }

    public function created(Order $order)
    {
        \Log::info('created');

        // Gửi email xác nhận đơn hàng
        // Mail::to($order->user->email)->send(new OrderCreated($order));
    }

    public function updating(Order $order)
    {
        // Logic trước khi cập nhật order
        if($order->status === 'completed') {
            throw new \Exception('Không thể cập nhật đơn hàng đã hoàn thành');
        }
        \Log::info('updating');
    }

    public function updated(Order $order)
    {
        // Gửi email thông báo thay đổi trạng thái đơn hàng
        //Mail::to($order->user->email)->send(new OrderStatusChanged($order));

        \Log::info('updated');
    }

    public function saving(Order $order)
    {
        // Logic trước khi lưu order (bao gồm cả khi tạo và cập nhật)
        $order->total = $order->calculateTotal();
        \Log::info('saving');
    }

    public function saved(Order $order)
    {
        // Logic sau khi lưu order (bao gồm cả khi tạo và cập nhật)
        \Log::info('saved');
    }

    public function deleting(Order $order)
    {
        // Logic trước khi xóa order
        if($order->status === 'completed') {
            throw new \Exception('Không thể xóa đơn hàng đã hoàn thành');
        }
        \Log::info('deleting');
    }

    public function deleted(Order $order)
    {
        // Logic sau khi xóa order
        \Log::info('deleted');
    }

    public function restoring(Order $order)
    {
        // Logic trước khi phục hồi order
    }

    public function restored(Order $order)
    {
        // Logic sau khi phục hồi order
        \Log::info('restored');
    }

    public function replicating(Order $order)
    {
        // Logic trước khi sao chép order
        $order->status = 'pending';
    }
}
