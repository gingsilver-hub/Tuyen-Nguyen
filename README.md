# NGUYỄN ĐỨC TUYẾN — CINEMATIC PORTFOLIO V7.2

Website portfolio tương tác, tối ưu triển khai trực tiếp lên **GitHub Pages**.

## Nội dung website

- Intro cinematic, background minh họa Cầu Rồng – Sơn Trà (Đà Nẵng).
- Nhân vật hoạt hình với tạo hình phù hợp các chương: Intro, About, Journey, Skills, Contact.
- Hành trình công tác, kỹ năng Creative / Marketing / AI, song ngữ Việt–Anh, dark/dawn mode.
- Selected Work: ấn phẩm truyền thông và thiết kế dự án Vĩnh Trung Plaza.
- Case study Vĩnh Trung Plaza với video YouTube, brochure PDF và thư viện ảnh.
- Thiết kế responsive: thẻ dự án và gallery ảnh có thể vuốt ngang trên màn hình nhỏ.

## Các thay đổi V7.2

- Rút gọn tiêu đề, chú thích; chỉnh lại văn phong trong toàn bộ phần showcase, popup dự án và ghi chú ở Journey / AI Skills.
- Xóa các câu tường thuật quá trình xây dựng website, xóa các ô đếm số file và các đoạn chú thích nội bộ hiển thị công khai.
- Tránh cắt mất chữ trên các poster (hiển thị trọn ảnh), tối ưu typography và khoảng cách trên điện thoại.
- Giữ nguyên toàn bộ các hình ảnh, công cụ, video nhúng, đường dẫn brochure và tính năng cũ.
- Đã kiểm tra không tràn ngang ở 320 / 390 / 768 / 1440 px, không có lỗi JavaScript ở các chức năng thử nghiệm chính.

## Cập nhật website đang chạy trên GitHub Pages

Nếu đã đăng bản V7.1 và không thay đổi thư mục `assets/`, chỉ cần **thay 3 tệp** ở thư mục gốc repo:

- `index.html`
- `styles.css`
- `script.js`

Bạn có thể tải ZIP patch chứa đúng ba file này, hoặc dùng ZIP đầy đủ.

Sau khi commit, chờ GitHub Pages hoàn tất triển khai và dùng **Ctrl+Shift+R** (Windows) để cập nhật bản mới từ trình duyệt.

## Triển khai mới

1. Giải nén, mở thư mục chứa `index.html`.
2. Tạo repository **Public** trên GitHub.
3. Tải **nội dung bên trong thư mục** lên gốc repository (không chỉ upload file ZIP).
4. Vào **Settings → Pages → Build and deployment → Deploy from a branch**.
5. Chọn nhánh `main`, thư mục `/(root)` và **Save**.
6. Truy cập `https://USERNAME.github.io/REPOSITORY/` sau khi Pages triển khai thành công.

Cấu trúc chính:

```text
index.html
styles.css
script.js
.nojekyll
assets/
    bg-da-nang-hero.webp
    character-hero.webp
    character-about.webp
    character-journey.webp
    character-skills.webp
    character-contact.webp
    project-vtp-*.webp
    vtp-catalogue.pdf
    ...
```

Website dùng HTML/CSS/JavaScript thuần; không yêu cầu Node.js, npm hoặc API key. Video YouTube cần kết nối Internet khi xem. Google Fonts được lấy từ Internet; nếu không tải được sẽ dùng font dự phòng.
