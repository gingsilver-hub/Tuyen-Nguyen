# NGUYỄN ĐỨC TUYẾN — LUXURY CINEMATIC CV | VERSION 4

Website CV cá nhân **Luxury Real Estate × Neon Cinematic × Marketing / Brand Communications**. Tất cả thông tin nghề nghiệp được biên tập từ CV do chủ sở hữu cung cấp và nội dung nghề nghiệp đã cập nhật trong website.

## Dùng ngay

1. Giải nén file ZIP. 
2. Mở `index.html` bằng Chrome/Edge để xem trên máy hoặc upload **toàn bộ file + thư mục `assets`** lên GitHub Pages.
3. Không cần Node.js, React, API key, npm hay server xử lý phía sau.

## Cách đưa lên GitHub Pages

1. Tạo repository công khai tại https://github.com/new, ví dụ `cinematic-cv`.
2. Chọn **Add file → Upload files**, tải lên **toàn bộ file từ bên trong gói ZIP**, giữ thư mục `assets/`.
3. Đảm bảo `index.html` nằm ở **thư mục gốc của repository**.
4. Trong **Settings → Pages**, chọn **Build and deployment → Deploy from a branch → main → /(root)** và **Save**.
5. Website sẽ xuất hiện tại `https://TEN_TAI_KHOAN.github.io/cinematic-cv/` sau khi GitHub hoàn tất triển khai.

## Bố cục file

```text
index.html
styles.css
app.js
README.md
build_cv_pdfs.py                 # Chỉ cần khi muốn tạo lại PDF sau khi biên tập
assets/
  cinematic-towers.svg
  real-estate.svg
  planning.svg
  brand-experience.svg
  profile.jpg
  favicon.svg
  Nguyen_Duc_Tuyen_CV_VI.pdf    # CV PDF tiếng Việt: đã tạo sẵn
  Nguyen_Duc_Tuyen_CV_EN.pdf    # CV PDF tiếng Anh: đã tạo sẵn
```

## Tính năng V4

- **Luxury Cinematic Intro:** animation tòa nhà kiến trúc, neon streak, light scan, logo N·T reveal, thanh tải giả lập cho hiệu ứng mở đầu. Tự động vào trang sau khoảng 4,7 giây; có nút **Bỏ qua / Skip intro**.
- **Không lặp phiền phức:** intro chỉ tự chạy lần đầu trong mỗi tab/phiên duyệt. Nút **Xem lại Intro / Replay Intro** ở chân trang để mở lại. Người bật `prefers-reduced-motion` không bị hiển thị intro.
- **CV PDF thật:** nút **Tải CV (PDF) / Download CV** có ở Hero và Contact, tải trực tiếp file tĩnh từ `assets/`. Khi chọn **VI / EN**, tên tệp PDF tải xuống tự đổi theo ngôn ngữ.
- **Song ngữ Việt/Anh:** nội dung chính, thông tin nghề nghiệp, kỹ năng, mục tiêu, nhãn nút và intro chuyển tức thì bằng JavaScript.
- **Dark / Light theme:** chuyển tông nền; lựa chọn ngôn ngữ/chủ đề được lưu trên thiết bị trong trình duyệt.
- **Motion controls:** hỗ trợ bật/tắt chuyển động và tôn trọng cài đặt giảm chuyển động của thiết bị.
- **Responsive:** desktop, tablet, mobile, nút chuyển ngôn ngữ/chủ đề luôn có trên điện thoại.
- **Không dùng video tải từ mạng:** hiệu ứng intro được dựng bằng CSS và tòa nhà SVG có sẵn trong gói. Chỉ có font Google tùy chọn; nếu không tải được sẽ có font hệ thống dự phòng.

## Sửa nội dung, tạo lại PDF

- Sửa nội dung web tiếng Việt/Anh ở đối tượng `translations` trong `app.js`; nội dung HTML của `index.html` là bản dự phòng tiếng Việt trước khi JavaScript tải xong.
- Sửa nội dung PDF trong `build_cv_pdfs.py`, tại `DATA['vi']` và `DATA['en']`.
- Để tạo lại PDF sau khi sửa, cần cài Python và package `reportlab`:

```bash
pip install reportlab
python build_cv_pdfs.py
```

- Nếu chỉ thay file PDF bằng một bản khác, hãy giữ nguyên tên:
  - `assets/Nguyen_Duc_Tuyen_CV_VI.pdf`
  - `assets/Nguyen_Duc_Tuyen_CV_EN.pdf`
- Sửa màu neon ở `styles.css`, animation intro ở các selector `.cinematic-intro` và hàm `playIntro` trong `app.js`.
- Sửa ảnh chân dung ở `assets/profile.jpg`.

## Lưu ý công khai trên Internet

- Bản PDF mới **không đưa** các trường riêng tư từ mẫu ứng tuyển gốc như địa chỉ nhà, ngày sinh, mã số thuế, mức lương, thông tin người tham chiếu. Trước khi công khai, hãy kiểm tra lại **email, điện thoại** và xác nhận bạn muốn chia sẻ chúng.
- Hình bất động sản và bản vẽ là **minh họa concept**, không phải ảnh dự án hoặc KPI thực tế đã kiểm chứng.
- PDF đang được biên tập riêng để phục vụ giới thiệu chuyên môn, không phải bản sao biểu mẫu tuyển dụng gốc.
