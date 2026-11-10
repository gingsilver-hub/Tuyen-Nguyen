# NGUYỄN ĐỨC TUYẾN — CINEMATIC PORTFOLIO

Website portfolio tương tác dựa trên concept ảnh KAMUI và **nhân vật minh họa do người dùng cung cấp**.

## ✨ Có gì trong bản này?

- Intro toàn màn hình (tự chuyển sau ~3 giây, có nút bỏ qua).
- Màn hình mở đầu với núi, mái đình, cầu, ánh sáng, cánh hoa chuyển động và nhân vật được tách nền.
- 5 chương: **Câu chuyện → Hành trình làm việc → Kỹ năng → Showcase → Liên hệ**.
- Hiệu ứng scroll reveal, parallax nhẹ, transition, tab công cụ, thẻ dự án mở popup chi tiết.
- Chuyển ngôn ngữ **Việt / Anh** và chế độ **đêm / hoàng hôn**.
- Responsive desktop / tablet / mobile, hỗ trợ `prefers-reduced-motion`.
- Không dùng framework, không có bước build, không cần API key. Định dạng SVG + WebP nhẹ, phù hợp GitHub Pages.

## 🚀 Đưa website lên GitHub Pages

1. Giải nén thư mục ZIP. Giữ nguyên vị trí `index.html`, `styles.css`, `script.js`, `assets/`.
2. Tạo **Public repository** trên GitHub, ví dụ `ductuyen-portfolio`.
3. Chọn **Add file → Upload files** rồi tải **toàn bộ nội dung bên trong thư mục**, không phải chỉ tải ZIP.
4. Chọn **Settings → Pages → Build and deployment → Deploy from a branch**.
5. Chọn **Branch: main**, **Folder: /(root)** và **Save**.
6. GitHub sẽ cung cấp địa chỉ tương tự `https://username.github.io/ductuyen-portfolio/`. Địa chỉ xuất hiện sau khi Pages triển khai thành công.

Muốn web chạy trực tiếp trên `https://username.github.io/`, đặt tên repository là `username.github.io`.

## 🛠 Chỉnh nội dung

| Nội dung | Vị trí |
|---|---|
| Thông tin, kinh nghiệm, phần giới thiệu và liên hệ | `index.html` |
| Bản dịch tiếng Anh, các nhóm công cụ, popup showcase | `script.js` |
| Màu sắc, layout, hiệu ứng | `styles.css` |
| Nhân vật tách nền | `assets/character-tuyen.webp` |
| Phong cảnh và minh họa project | `assets/*.svg` |
| Ảnh xem trước khi chia sẻ link | `assets/og-cover.png` |

**Lưu ý:** Khi sửa thông tin tiếng Việt, cập nhật thêm bản tiếng Anh tương ứng trong `script.js`. Khi thay ảnh avatar, giữ tỉ lệ dọc, nền trong suốt, file WebP.

## 🔏 Nội dung CV đã xử lý

Đã chuyển 6 vị trí làm việc 2017–nay thành timeline; phần học vấn giữ đúng theo CV. Bổ sung nhóm kỹ năng theo yêu cầu: **Illustrator, Premiere Pro, After Effects, Google Flow, Google Colab**. Có thêm Photoshop theo ngữ cảnh làm việc thiết kế đã cung cấp.

**Để tránh lộ dữ liệu cá nhân trên website công khai**, không đưa ngày sinh, địa chỉ nhà, lương, mã số thuế, thông tin người liên hệ khẩn cấp hoặc người tham chiếu vào mã nguồn.

**Showcase:** 3 hình minh họa là concept SVG, không phải ảnh chụp dự án hoàn thành; nên thay bằng ảnh/tư liệu có quyền sử dụng khi bổ sung các case study thực tế.

## Kỹ thuật / tương thích

- HTML5, CSS3, JavaScript (ES2020+)
- Cài đặt ngôn ngữ và theme được lưu trong `localStorage` nếu trình duyệt cho phép.
- Hoạt động trên GitHub Pages khi repo đặt ở tên miền con (`/repo-name/`) do mọi asset đều dùng đường dẫn **tương đối**.
- Google Fonts là phụ thuộc tùy chọn: không có mạng vẫn hiển thị bằng font dự phòng hệ thống.
- Không có tracking, analytics, cookie quảng cáo hoặc backend.

---
Artwork vectors created for this portfolio. Character artwork supplied by the user.
