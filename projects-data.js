// V5 portfolio gallery — edit this file to add projects.
// See README.md. Video entries can be YouTube embeds or local MP4; see README.
window.CV_PROJECTS = [
  {
    "id": "vinh-trung-view",
    "type": "image",
    "category": "design",
    "featured": true,
    "thumb": "assets/projects/vinh-trung-view-thumb.webp",
    "src": "assets/projects/vinh-trung-view.webp",
    "vi": {
      "title": "Vĩnh Trung Plaza – Tầm view thành phố biển",
      "subtitle": "Ấn phẩm quảng bá tầm nhìn từ tòa nhà",
      "description": "Thiết kế truyền thông về tầm nhìn toàn cảnh thành phố biển từ Vĩnh Trung Plaza; bố cục gồm bốn khung ảnh đô thị và hệ nhận diện thương hiệu."
    },
    "en": {
      "title": "Vinh Trung Plaza – City & Coastal Views",
      "subtitle": "Real estate view-promotion graphic",
      "description": "A real-estate promotional artwork highlighting panoramic city and coastal views from Vinh Trung Plaza, arranged as four cityscape panels with brand identity elements."
    }
  },
  {
    "id": "pickleball-portrait",
    "type": "image",
    "category": "photography",
    "thumb": "assets/projects/pickleball-portrait-thumb.webp",
    "src": "assets/projects/pickleball-portrait.webp",
    "vi": {
      "title": "Pickleball – Chân dung thể thao",
      "subtitle": "Ảnh hoạt động & không gian CLB",
      "description": "Khung hình thể thao tại Vĩnh Trung Plaza Pickleball Club, kết hợp nhân vật, không gian và màu sắc truyền thông."
    },
    "en": {
      "title": "Pickleball – Sports Portrait",
      "subtitle": "Club environment & sports photography",
      "description": "A sports portrait at Vinh Trung Plaza Pickleball Club, capturing a subject, the club setting and lively brand colors."
    }
  },
  {
    "id": "tet-sharing-event",
    "type": "image",
    "category": "photography",
    "thumb": "assets/projects/tet-sharing-event-thumb.webp",
    "src": "assets/projects/tet-sharing-event.webp",
    "vi": {
      "title": "Xuân gắn kết – Tết sẻ chia",
      "subtitle": "Ghi nhận hoạt động cộng đồng",
      "description": "Khoảnh khắc sân khấu của chương trình trao quà Tết cho các hộ có hoàn cảnh khó khăn, với không khí cộng đồng và sắc đỏ ngày xuân."
    },
    "en": {
      "title": "Spring Together – Sharing Tet",
      "subtitle": "Community event coverage",
      "description": "A stage moment at a Tet gift-giving event for families in difficult circumstances, documenting a community gathering and festive atmosphere."
    }
  },
  {
    "id": "street-portrait",
    "type": "image",
    "category": "photography",
    "thumb": "assets/projects/street-portrait-thumb.webp",
    "src": "assets/projects/street-portrait.webp",
    "vi": {
      "title": "Đời thường – Một nụ cười",
      "subtitle": "Nhiếp ảnh đời sống",
      "description": "Khoảnh khắc chân dung đời thường giữa không gian đường phố, nhấn vào cảm xúc tự nhiên và tính kể chuyện."
    },
    "en": {
      "title": "Street Life – A Smile",
      "subtitle": "Candid documentary photography",
      "description": "A candid street portrait emphasizing natural expression and everyday storytelling."
    }
  },
  {
    "id": "family-moment",
    "type": "image",
    "category": "photography",
    "thumb": "assets/projects/family-moment-thumb.webp",
    "src": "assets/projects/family-moment.webp",
    "vi": {
      "title": "Khoảnh khắc gia đình",
      "subtitle": "Nhiếp ảnh chân dung đời thường",
      "description": "Một khoảnh khắc gần gũi của gia đình giữa không gian đông người, thể hiện cách tiếp cận tự nhiên trong nhiếp ảnh."
    },
    "en": {
      "title": "A Family Moment",
      "subtitle": "Candid family photography",
      "description": "An intimate candid moment in a public gathering, reflecting a natural observational photography style."
    }
  },
  {
    "id": "childhood-portrait",
    "type": "image",
    "category": "photography",
    "thumb": "assets/projects/childhood-portrait-thumb.webp",
    "src": "assets/projects/childhood-portrait.webp",
    "vi": {
      "title": "Chân dung tuổi thơ",
      "subtitle": "Nhiếp ảnh chân dung",
      "description": "Ảnh chân dung với bố cục trực diện, tận dụng đường nét và màu sắc của bối cảnh đời thường."
    },
    "en": {
      "title": "Childhood Portrait",
      "subtitle": "Portrait photography",
      "description": "A direct portrait framed by the lines and colors of an everyday setting."
    }
  },
  {
    "id": "youtube-video-burittulghs",
    "type": "video",
    "category": "video",
    "youtubeId": "BUrITTULghs",
    "youtubeUrl": "https://youtu.be/BUrITTULghs",
    "thumb": "assets/projects/youtube-video-poster.webp",
    "youtubeThumbnail": "https://i.ytimg.com/vi/BUrITTULghs/hqdefault.jpg",
    "vi": {
      "title": "Video dự án – YouTube",
      "subtitle": "Video Showcase · Phát trực tiếp trên website",
      "description": "Video được chia sẻ từ kênh YouTube. Xem trực tiếp tại đây hoặc mở trên YouTube."
    },
    "en": {
      "title": "Project Video – YouTube",
      "subtitle": "Video Showcase · Embedded Playback",
      "description": "A video shared via YouTube. Watch here or open the original video on YouTube."
    }
  }
];

/*
To add a VIDEO, insert an object inside the array above, separated by a comma:
{
  id: "my-video", type: "video", category: "video",
  thumb: "assets/projects/my-video-poster.webp",
  videoSrc: "assets/videos/my-video.mp4", // local MP4, preferably short and compressed
  vi: { title: "Tên video", subtitle: "Mô tả ngắn", description: "Giới thiệu video" },
  en: { title: "Video title", subtitle: "Short summary", description: "Description" }
}
OR use youtubeId: "XXXXXXXXXXX" instead of videoSrc for YouTube embeds.
*/