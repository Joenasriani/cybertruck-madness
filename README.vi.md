# Cybertruck Madness '98

Một game lái xe thế giới mở thử nghiệm trên trình duyệt, được xây dựng bằng Three.js và lấy cảm hứng từ cảm giác hỗn loạn, tự do của các game lái xe PC cuối thập niên 1990.

**Chơi ngay:** https://cybertruckmadness.vercel.app

> Kho mã này được công khai và đang được chuẩn bị để đón nhận đóng góp rộng rãi hơn từ cộng đồng. Giấy phép phần mềm và quyền đối với tài sản bên thứ ba vẫn đang được xác minh trước khi dự án được mô tả là hoàn toàn mã nguồn mở.

## Đây là gì

Cybertruck Madness '98 đưa bạn vào một địa hình thủ tục quy mô lớn, nơi bạn lái xe, drift, thu thập vòng, quản lý pin, điều hướng bằng la bàn/bản đồ và cuối cùng mở khóa mục tiêu thoát hiểm.

Bản hiện tại bao gồm:

- Kết xuất Three.js
- Địa hình thủ tục quy mô lớn
- Vật lý lái xe và drift kiểu arcade
- Xe Cybertruck 3D
- 500 vòng có thể thu thập
- Cơ chế pin / sạc lại
- Điều hướng bằng la bàn
- Bản đồ có thể mở rộng
- Điều khiển bằng bàn phím
- Điều khiển cảm ứng trên di động
- Chuyển camera
- Âm thanh động cơ, trượt, thu thập và tiếp đất
- Mục tiêu thoát hiểm / hoàn thành nhiệm vụ

## Điều khiển

### Máy tính

- `W` / `Arrow Up`: tăng tốc
- `S` / `Arrow Down`: lùi
- `A` / `Arrow Left`: rẽ trái
- `D` / `Arrow Right`: rẽ phải
- `Space`: phanh / drift
- Dùng các nút HUD để điều khiển bản đồ, camera, nhạc và SFX

### Di động

- Vùng cảm ứng bên trái: di chuyển và đánh lái
- Vùng cảm ứng bên phải: giữ để phanh / drift
- Các nút HUD điều khiển bản đồ, camera, nhạc và SFX

## Kiến trúc hiện tại

Hiện tại dự án cố ý được giữ đơn giản:

```text
.
├── Readme.md
├── index.html
├── fbx/
│   ├── cybertruck.glb
│   └── moto.fbx
└── music/
```

Phần lớn logic gameplay hiện nằm trong `index.html`. Điều này giúp dự án dễ kiểm tra, đồng thời tạo ra một cơ hội đóng góp rõ ràng: từng bước mô-đun hóa các hệ thống mà không thay đổi hành vi chơi hiện tại.

## Chạy cục bộ

Dự án dùng ES modules và tài sản được tải qua trình duyệt, vì vậy hãy chạy từ một máy chủ web cục bộ thay vì mở trực tiếp `index.html`.

Ví dụ:

```bash
python -m http.server 8000
```

Sau đó mở:

```text
http://localhost:8000
```

Hiện chưa cần bước build.

## Giúp phát triển xa hơn

Các khu vực phù hợp để đóng góp:

- Cải thiện vật lý xe và hành vi drift
- Ramp, nhảy, tính điểm stunt và trick
- Mục tiêu và loại nhiệm vụ mới
- Time trial và hệ thống checkpoint
- Cải thiện địa hình thủ tục
- Biome và đa dạng môi trường
- Hỗ trợ gamepad
- Cải thiện điều khiển di động
- Phân tích và tối ưu hiệu năng
- Cải thiện va chạm
- Hoàn thiện âm thanh
- Thêm thiết lập trợ năng
- Hệ thống replay / điểm số
- Cải thiện bản đồ và điều hướng
- Từng bước mô-đun hóa `index.html`

Xem [ROADMAP.md](ROADMAP.md) và [CONTRIBUTING.md](CONTRIBUTING.md).

## Triết lý đóng góp

Dự án này nên tiếp tục dễ chơi, mang tính thử nghiệm và hơi kỳ lạ.

Mục tiêu không phải biến nó thành một framework chung. Đóng góp nên làm game vui hơn, thú vị hơn về kỹ thuật, dễ mở rộng hơn hoặc dễ chạy hơn.

Ưu tiên Pull Request nhỏ, tập trung thay vì viết lại quy mô lớn.

## Trạng thái dự án

Trạng thái hiện tại: **thử nghiệm / giai đoạn chuẩn bị cộng đồng**

Game trực tuyến hoạt động. Mã nguồn được cấp phép theo MIT; quy trình đóng góp và tài liệu quyền đối với tài sản vẫn đang được cải thiện.

## Giấy phép và tài sản bên thứ ba

Mã nguồn được cấp phép theo [MIT License](LICENSE).

Giấy phép này áp dụng cho mã nguồn phần mềm. Nó không tự động cấp quyền đối với các mô hình 3D, âm nhạc, tên gọi, nhãn hiệu hoặc các tài sản có nguồn riêng. Xem [ASSETS.md](ASSETS.md) để biết trạng thái nguồn gốc và quyền hiện tại.

## Tuyên bố miễn trừ

Đây là một dự án fan thử nghiệm không chính thức. Dự án không liên kết, không được chứng thực và không được tài trợ bởi Tesla, Microsoft hoặc những người tạo ra Motocross Madness.

## Đóng góp

Đọc [CONTRIBUTING.md](CONTRIBUTING.md) trước khi mở Pull Request.

Nếu bạn tìm thấy lỗi, vấn đề hiệu năng, vấn đề gameplay hoặc có một ý tưởng cụ thể phù hợp với hướng đi của dự án và thay đổi có quy mô lớn, hãy mở Issue trước.
