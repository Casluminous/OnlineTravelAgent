# Online Travel Agent

Ứng dụng Flutter đã được nối với backend `Express.js + TypeScript` để các chức năng dữ liệu chạy thật:
- tải danh sách điểm đến/recommended
- thêm/bỏ yêu thích
- đặt chuyến đi (thêm vào tab `Chuyến đi`)
- xem/sửa profile
- xem/thêm giấy tờ

## 1) Chạy backend

```bash
cd backend
npm install
npm run dev
```

Backend chạy mặc định tại `http://localhost:3000`.

## 2) Chạy Flutter

```bash
flutter pub get
flutter run
```

Mặc định app gọi API như sau:
- Android emulator: `http://10.0.2.2:3000`
- Nền tảng khác: `http://localhost:3000`

Bạn có thể override bằng `dart-define`:

```bash
flutter run --dart-define=API_BASE_URL=http://<your-ip>:3000
```

## 3) Kiểm tra nhanh API

- `GET /health`
- `GET /api/bootstrap`
- `PATCH /api/destinations/:id/favorite`
- `POST /api/trips/book`
- `PUT /api/profile`
- `POST /api/documents`
