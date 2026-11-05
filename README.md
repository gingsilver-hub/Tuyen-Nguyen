# NGUYỄN ĐỨC TUYẾN — LUXURY CINEMATIC CV | VERSION 5

Website CV / project portfolio cá nhân theo hướng **Luxury Real Estate × Neon Cinematic × Marketing / Brand Communications**. Bản này kế thừa V4 (intro điện ảnh, song ngữ, chuyển Sáng/Tối, tải PDF) và bổ sung **Project Showcase** từ `Project.zip`.

## 1. Những gì đã tích hợp từ `Project.zip`

Tệp ZIP được cung cấp có **6 ảnh JPG (1 Design, 5 Nhiếp ảnh) và thư mục Video trống**. Bản mới giữ 6 ảnh WebP và thêm **1 liên kết YouTube** do người dùng cung cấp (`https://youtu.be/BUrITTULghs`). Ảnh/video gốc không được tải xuống từ YouTube; trình phát nhúng phát trực tiếp.:

| Hạng mục | Hình ảnh nguồn | Tên hiển thị |
| --- | --- | --- |
| Graphic Design | `Artboard 2 copy 2matbangmoi.jpg` | Vĩnh Trung Plaza – Tầm view thành phố biển |
| Photography | `2702.jpg` | Pickleball – Chân dung thể thao |
| Photography | `3603.jpg` | Xuân gắn kết – Tết sẻ chia |
| Photography | `1965.jpg` | Đời thường – Một nụ cười |
| Photography | `1959.jpg` | Khoảnh khắc gia đình |
| Photography | `2081.jpg` | Chân dung tuổi thơ |

**Lưu ý bản quyền/riêng tư:** Các ảnh có người thật, trong đó có ảnh trẻ em. Trước khi công khai website, cần bảo đảm bạn có quyền sử dụng hình và sự đồng ý phù hợp của người xuất hiện trong ảnh (đặc biệt là cha mẹ/người giám hộ của trẻ). Nếu chưa chắc chắn, xóa tệp ảnh đó khỏi `assets/projects/` **và** mục tương ứng trong `projects-data.js` trước khi đẩy lên repository Public.

## 2. Đưa website lên GitHub Pages

1. Giải nén `Nguyen_Duc_Tuyen_CV_V5_Project_Portfolio.zip`.
2. Vào repository GitHub `cinematic-cv` → **Add file → Upload files**.
3. Tải lên **toàn bộ file và thư mục `assets/` từ bên trong ZIP**, giữ nguyên tên và đường dẫn. Không đặt `index.html` trong thư mục con.
4. Chọn **Commit changes** để ghi nhận cập nhật.
5. Nếu chưa kích hoạt: **Settings → Pages → Deploy from a branch → main → /(root) → Save**.
6. Kiểm tra `https://USERNAME.github.io/cinematic-cv/` và dùng **Ctrl+F5** nếu còn hiển thị bản cũ.

### Cấu trúc chính

```text
index.html               # giao diện CV và section dự án
styles.css               # phong cách neon + gallery + lightbox
app.js                   # cinematic intro, VI/EN, Sáng/Tối, motion
portfolio.js             # bộ lọc dự án, popup hình ảnh/video, phím ← →, Escape
projects-data.js         # QUAN TRỌNG: sửa file này để bổ sung dự án
build_cv_pdfs.py         # công cụ tạo lại hai tệp PDF nếu có Python/reportlab
assets/
  profile.jpg
  cinematic-towers.svg, planning.svg, real-estate.svg, brand-experience.svg, favicon.svg
  Nguyen_Duc_Tuyen_CV_VI.pdf
  Nguyen_Duc_Tuyen_CV_EN.pdf
  projects/
    vinh-trung-view.webp
    vinh-trung-view-thumb.webp
    pickleball-portrait.webp
    pickleball-portrait-thumb.webp
    ... (4 cặp WebP còn lại)
```

## 3. Cách thêm một dự án HÌNH ẢNH

1. Xuất JPG/WebP, nên để khoảng 1600–2000 px chiều rộng và giảm dung lượng khi có thể. Tạo `ten-du-an.webp` (xem lớn), `ten-du-an-thumb.webp` (ảnh lưới, khoảng 800 px).
2. Đặt hai ảnh trong `assets/projects/`.
3. Mở file `projects-data.js`, bổ sung thêm một object mới vào mảng `window.CV_PROJECTS` (đặt dấu phẩy phân cách giữa các object):

```js
{
  "id": "du-an-moi",
  "type": "image",
  "category": "design", // hoặc "photography"
  "thumb": "assets/projects/du-an-moi-thumb.webp",
  "src": "assets/projects/du-an-moi.webp",
  "vi": {
    "title": "Tên dự án",
    "subtitle": "Thể loại / vai trò",
    "description": "Mô tả ngắn bằng tiếng Việt"
  },
  "en": {
    "title": "Project title",
    "subtitle": "Category / role",
    "description": "Short English description"
  }
}
```

Không phải sửa `portfolio.js` hoặc HTML vì gallery tự sinh từ `projects-data.js`.

## 4. Cách thêm VIDEO vào tab Video

**Đã chèn 1 video YouTube** có ID `BUrITTULghs`, hiển thị trong tab **Video** và **Tất cả**. Mở thẻ để phát video trong lightbox, hoặc nhấn **Xem trên YouTube** nếu bị giới hạn nhúng. Vì không xác minh được metadata/nội dung từ YouTube trong môi trường này, tiêu đề được đặt trung tính: “Video dự án – YouTube”. Bản ảnh preview nền kiến trúc là ảnh minh họa, không phải thumbnail nội dung video được xác thực.

### Phương án A — Video YouTube (khuyên dùng cho video dài)

1. Đăng video lên YouTube, chọn Public hoặc Unlisted tùy ý (Unlisted **không phải** chế độ bảo mật tuyệt đối).
2. Lấy video ID — ví dụ URL `https://www.youtube.com/watch?v=AbCdEfGhIjK` thì ID là `AbCdEfGhIjK` (11 ký tự).
3. Thêm object sau vào `projects-data.js`:

```js
{
  "id": "video-ra-mat-du-an",
  "type": "video",
  "category": "video",
  "youtubeId": "AbCdEfGhIjK",
  "thumb": "assets/projects/video-poster.webp",
  "vi": {
    "title": "Video giới thiệu dự án",
    "subtitle": "Video Marketing",
    "description": "Giới thiệu nội dung và vai trò của bạn."
  },
  "en": {
    "title": "Project introduction video",
    "subtitle": "Marketing video",
    "description": "Describe the work and your role."
  }
}
```

### Phương án B — Video MP4 trực tiếp (chỉ nên dùng clip nhỏ)

1. Nén MP4 ở chuẩn H.264/AAC, ưu tiên kích thước vừa phải. Tạo thư mục `assets/videos/` rồi đặt video vào, ví dụ `showreel.mp4`.
2. Thêm object tương tự nhưng dùng `"videoSrc": "assets/videos/showreel.mp4"` **thay vì** `youtubeId`.
3. Để có ảnh preview, thêm tệp `assets/projects/video-poster.webp` và thuộc tính `thumb` tương ứng.
4. GitHub Upload web có giới hạn dung lượng mỗi file; video dài nên đặt trên YouTube hoặc hạ tầng chuyên phát video, không đẩy trực tiếp vào GitHub Pages.

Nếu muốn video xuất hiện ở đầu danh sách, đặt object video ở đầu mảng `window.CV_PROJECTS`. Khi thêm nhiều clip, dùng tên và mô tả dự án đã được xác minh.

## 5. Các tính năng tương tác

- **Filter:** Tất cả / Thiết kế / Nhiếp ảnh / Video.
- **Lightbox:** xem ảnh gốc tối ưu lớn, nút đóng, trước/sau, phím mũi tên ←/→, Escape; xem video MP4 hoặc YouTube khi có nội dung.
- **VI / EN:** mọi tiêu đề, mô tả của dự án đổi ngôn ngữ cùng CV.
- **Dark / Light:** gallery tương thích với cả hai chế độ nền.
- **Responsive:** lưới nhiều cột trên máy tính, một cột trên điện thoại.
- **Motion:** tôn trọng chế độ giảm chuyển động của thiết bị và nút Motion của website.
- **CV PDF:** nút tải tự đổi file Việt/Anh theo lựa chọn trên trang.

## 6. Lưu ý triển khai

- Không đưa biểu mẫu xin việc gốc có địa chỉ nhà, mã số thuế, mức lương hay người tham chiếu lên repository Public.
- Thư mục `assets/projects/` gồm bản ảnh WebP tối ưu, không chứa các ảnh JPG gốc dung lượng lớn; file `Project.zip` của bạn vẫn giữ được riêng.
- Nội dung dự án trong V5 **không khẳng định doanh số, KPI, thời gian hoặc vai trò chưa được xác nhận**. Bạn có thể bổ sung sau tại `projects-data.js`.
- Nếu website thiếu ảnh hoặc font, hãy kiểm tra vị trí file, phân biệt chữ hoa/chữ thường trong đường dẫn, và tải lại trang bằng Ctrl+F5.

## 7. Cập nhật V5.1 — Video YouTube

- Link được nhúng: **https://youtu.be/BUrITTULghs**.
- Video ID: `BUrITTULghs`.
- Dữ liệu tại `projects-data.js`, đối tượng `id: "youtube-video-burittulghs"`.
- `youtubeThumbnail` tải thumbnail YouTube khi khả dụng. Nếu không tải được, sử dụng ảnh poster WebP nội bộ `assets/projects/youtube-video-poster.webp`.
- Trình phát nhúng `youtube-nocookie.com` mở khi click, có liên kết dự phòng **Xem trên YouTube / Open on YouTube**.
- Video chỉ phát nếu chủ kênh cho phép embed và người xem có quyền xem; video Unlisted vẫn có thể xem bằng link.
- Không cần tải file MP4 lên GitHub.
