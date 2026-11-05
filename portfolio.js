/* CV V5 interactive portfolio — no frameworks, no external APIs. */
(() => {
  'use strict';
  const items = Array.isArray(window.CV_PROJECTS) ? window.CV_PROJECTS : [];
  const gallery = document.getElementById('projects-gallery');
  const emptyState = document.getElementById('projects-empty');
  const count = document.getElementById('projects-count');
  const filters = [...document.querySelectorAll('[data-project-filter]')];
  const dialog = document.getElementById('project-lightbox');
  if (!gallery || !emptyState || !count || !dialog) return;
  const media = document.getElementById('lightbox-media');
  const title = document.getElementById('project-lightbox-title');
  const type = document.getElementById('lightbox-type');
  const caption = document.getElementById('lightbox-caption');
  const counter = document.getElementById('lightbox-counter');
  const prev = document.getElementById('lightbox-prev');
  const next = document.getElementById('lightbox-next');
  const close = document.getElementById('lightbox-close');
  const youtubeLink = document.getElementById('lightbox-youtube-link');
  const youtubeLabel = document.getElementById('lightbox-youtube-label');
  let currentFilter = 'all';
  let visible = [];
  let currentIndex = 0;

  const locale = () => document.body.dataset.lang === 'en' ? 'en' : 'vi';
  const dict = () => locale() === 'en' ? {
    design: 'GRAPHIC DESIGN', photography: 'PHOTOGRAPHY', video: 'VIDEO PROJECT',
    view: 'VIEW PROJECT', count: 'SELECTED WORKS', videoEmpty: 'Videos coming soon',
    fileMissing: 'Video source unavailable.', youtubeOpen: 'OPEN ON YOUTUBE'
  } : {
    design: 'THIẾT KẾ ĐỒ HỌA', photography: 'NHIẾP ẢNH', video: 'DỰ ÁN VIDEO',
    view: 'XEM DỰ ÁN', count: 'SẢN PHẨM TIÊU BIỂU', videoEmpty: 'Video đang được cập nhật',
    fileMissing: 'Chưa có nguồn phát video.', youtubeOpen: 'XEM TRÊN YOUTUBE'
  };

  function create(tag, cls, text) {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text !== undefined) node.textContent = text;
    return node;
  }
  function itemText(item) {
    return item[locale()] || item.vi || item.en || {title:item.id,subtitle:'',description:''};
  }
  function renderCard(item, index) {
    const text = itemText(item);
    const button = create('button', `project-tile project-tile-${item.category}` +
      (item.featured && currentFilter === 'all' ? ' project-tile-featured' : '') +
      (index === 1 && currentFilter === 'all' ? ' project-tile-followup' : ''));
    button.type = 'button';
    button.setAttribute('aria-label', `${dict().view}: ${text.title}`);
    const frame = create('span','project-tile-frame');
    if (item.thumb) {
      const backdrop = create('span', 'project-tile-backdrop');
      backdrop.style.backgroundImage = `url("${item.thumb.replace(/["'\\]/g, '')}")`;
      frame.appendChild(backdrop);
      const image = create('img','project-tile-image');
      // Always show a local poster immediately. Replace it with the real
      // YouTube thumbnail only after that external image loads successfully.
      image.src = item.thumb;
      if (item.youtubeThumbnail) {
        const remotePreview = new Image();
        remotePreview.onload = () => { if (button.isConnected) image.src = item.youtubeThumbnail; };
        remotePreview.src = item.youtubeThumbnail;
      }
      image.alt = text.title;
      image.loading = index < 2 ? 'eager' : 'lazy';
      image.decoding = 'async';
      frame.appendChild(image);
    } else {
      frame.appendChild(create('span','project-tile-placeholder','▶'));
    }
    const gradient = create('span','project-tile-shade');
    frame.appendChild(gradient);
    const number = create('span','project-tile-number',`PROJECT / ${String(items.indexOf(item) + 1).padStart(2,'0')}`);
    frame.appendChild(number);
    const corner = create('span','project-tile-corner', item.type === 'video' ? '▶' : '↗');
    frame.appendChild(corner);
    const overlay = create('span','project-tile-text');
    overlay.appendChild(create('span','project-tile-tag',dict()[item.category] || 'PROJECT'));
    overlay.appendChild(create('strong','project-tile-title',text.title));
    overlay.appendChild(create('span','project-tile-subtitle',text.subtitle));
    frame.appendChild(overlay);
    button.appendChild(frame);
    button.addEventListener('click',() => openProject(index));
    return button;
  }

  function render() {
    visible = items.filter(item => currentFilter === 'all' || item.category === currentFilter);
    const fragment = document.createDocumentFragment();
    visible.forEach((item, index) => fragment.appendChild(renderCard(item, index)));
    gallery.replaceChildren(fragment);
    emptyState.hidden = visible.length > 0;
    count.textContent = `${String(visible.length).padStart(2,'0')} / ${dict().count}`;
    filters.forEach(button => {
      const active = button.dataset.projectFilter === currentFilter;
      button.classList.toggle('is-active',active);
      button.setAttribute('aria-pressed', String(active));
    });
    if (dialog.open) {
      if (!visible.length) dialog.close();
      else { currentIndex = Math.min(visible.length - 1,currentIndex); updateLightbox(); }
    }
  }

  function updateLightbox() {
    const item = visible[currentIndex];
    if (!item) return;
    const text = itemText(item);
    const info = dict();
    media.replaceChildren();  // Stops previous video when changing slides.
    if (item.type === 'video') {
      if (item.youtubeId && /^[\w-]{11}$/.test(item.youtubeId)) {
        const iframe = create('iframe','lightbox-video');
        iframe.src = `https://www.youtube-nocookie.com/embed/${item.youtubeId}?rel=0`;
        iframe.title = text.title;
        iframe.loading = 'lazy';
        iframe.referrerPolicy = 'strict-origin-when-cross-origin';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
        iframe.allowFullscreen = true;
        media.appendChild(iframe);
      } else if (item.videoSrc) {
        const video = create('video','lightbox-video');
        video.src = item.videoSrc;
        video.controls = true;
        video.playsInline = true;
        video.preload = 'metadata';
        if (item.thumb) video.poster = item.thumb;
        media.appendChild(video);
      } else media.appendChild(create('p','lightbox-unavailable',info.fileMissing));
    } else {
      const image = create('img','lightbox-photo');
      image.src = item.src || item.thumb;
      image.alt = text.title;
      image.decoding = 'async';
      media.appendChild(image);
    }
    title.textContent = text.title;
    type.textContent = info[item.category] || 'PORTFOLIO';
    caption.textContent = text.description || text.subtitle || '';
    if (youtubeLink) {
      const hasYouTube = item.type === 'video' && item.youtubeId && /^[\w-]{11}$/.test(item.youtubeId);
      youtubeLink.hidden = !hasYouTube;
      if (hasYouTube) youtubeLink.href = `https://www.youtube.com/watch?v=${item.youtubeId}`;
    }
    if (youtubeLabel) youtubeLabel.textContent = info.youtubeOpen;
    counter.textContent = `${String(currentIndex+1).padStart(2,'0')} / ${String(visible.length).padStart(2,'0')}`;
    prev.disabled = visible.length < 2;
    next.disabled = visible.length < 2;
  }

  function openProject(index) {
    currentIndex = index;
    updateLightbox();
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open','');
  }
  function navigate(step) {
    if (!visible.length) return;
    currentIndex = (currentIndex + step + visible.length) % visible.length;
    updateLightbox();
  }
  filters.forEach(button => button.addEventListener('click',() => {
    currentFilter = button.dataset.projectFilter;
    render();
  }));
  prev.addEventListener('click',()=>navigate(-1));
  next.addEventListener('click',()=>navigate(1));
  close.addEventListener('click',()=>dialog.close());
  dialog.addEventListener('close',()=>media.replaceChildren());
  dialog.addEventListener('click',event=>{ if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('keydown',event=>{
    if (event.key === 'ArrowLeft') { event.preventDefault(); navigate(-1); }
    else if (event.key === 'ArrowRight') { event.preventDefault(); navigate(1); }
  });
  document.addEventListener('cv:language-change',render);
  render();
})();
