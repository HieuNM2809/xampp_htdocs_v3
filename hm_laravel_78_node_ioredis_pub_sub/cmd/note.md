Để thực hiện Pub/Sub với Redis thông qua dòng lệnh (command line), bạn có thể sử dụng công cụ `redis-cli`, đi kèm với Redis. Đây là một cách rất hữu ích để thử nghiệm nhanh Pub/Sub mà không cần phải viết mã.

Dưới đây là ví dụ về cách sử dụng Redis Pub/Sub với `redis-cli`.

### 1. **Mở một terminal cho `SUBSCRIBE`**

Trong terminal đầu tiên, khởi chạy `redis-cli` và subscribe vào một kênh:

```bash
redis-cli
```

Sau đó, trong `redis-cli`, nhập lệnh:

```bash
SUBSCRIBE mychannel
```

Lệnh này sẽ đăng ký terminal hiện tại lắng nghe các thông báo trên kênh `mychannel`.

### 2. **Mở một terminal khác cho `PUBLISH`**

Mở một terminal khác và khởi chạy `redis-cli`:

```bash
redis-cli
```

Sau đó, trong `redis-cli`, nhập lệnh để publish một thông báo lên kênh:

```bash
PUBLISH mychannel "Hello, Redis!"
```

### 3. **Quan sát kết quả**

Trong terminal đầu tiên (đã `SUBSCRIBE`), bạn sẽ thấy thông báo nhận được từ kênh `mychannel`:

```plaintext
1) "message"
2) "mychannel"
3) "Hello, Redis!"
```

### 4. **Thử nghiệm thêm**

Bạn có thể mở thêm nhiều terminal khác để subscribe vào kênh `mychannel`. Mỗi khi bạn publish một thông báo, tất cả các terminal đang subscribe vào kênh đó sẽ nhận được thông báo.

### Tổng kết:

- **SUBSCRIBE**: Được sử dụng để lắng nghe các thông báo từ một hoặc nhiều kênh.
- **PUBLISH**: Được sử dụng để gửi thông báo đến một kênh cụ thể.

Với cách này, bạn có thể nhanh chóng thử nghiệm Pub/Sub của Redis mà không cần phải viết bất kỳ mã lệnh nào.