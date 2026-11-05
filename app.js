(() => {
  'use strict';
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const loader = $('#intro-loader');
  const skipIntro = $('#intro-skip');
  const replayIntro = $('#replay-intro');
  const header = $('#site-header');
  const progress = $('#scroll-progress');
  const menuButton = $('#menu-toggle');
  const mobileNav = $('#mobile-nav');
  const motionButton = $('#motion-toggle');
  const motionLabel = $('#motion-label');
  const themeButton = $('#theme-toggle');
  const themeMode = $('#theme-mode');
  const langButton = $('#lang-toggle');
  const langCode = $('#lang-code');
  const body = document.body;

  const translations = {
    vi: {
      loaderOverline: 'KHỞI TẠO / HỒ SƠ CÁ NHÂN', loaderCaption: 'BẤT ĐỘNG SẢN / MARKETING / SÁNG TẠO', brandSmall: 'NEON PERSONAL PORTFOLIO',
      navAbout: 'Giới thiệu', navExpertise: 'Năng lực', navJourney: 'Hành trình', navWorks: 'Lĩnh vực',
      langToggle: 'NGÔN NGỮ', themeToggle: 'CHỦ ĐỀ', motionToggle: 'CHUYỂN ĐỘNG', contactBtn: 'LIÊN HỆ',
      mobAbout: '01 / Giới thiệu', mobExpertise: '02 / Năng lực', mobJourney: '03 / Hành trình', mobWorks: '04 / Lĩnh vực', mobContact: '05 / Liên hệ',
      heroEyebrow: 'PORTFOLIO <b>/</b> MARKETING × REAL ESTATE', heroChapter: 'CINEMATIC CAREER / COLORFUL BRAND STORY.', heroIndex: '[ THƯƠNG HIỆU CÁ NHÂN / 2026 ]',
      heroBody: 'Tôi kết nối <em>tư duy kinh doanh</em>, <em>ngôn ngữ hình ảnh</em> và <em>trải nghiệm thương hiệu</em> để biến ý tưởng thành những hoạt động có giá trị thực tế.',
      heroCtaPrimary: 'KHÁM PHÁ HÀNH TRÌNH', heroCtaSecondary: 'Làm việc cùng tôi', heroVisualTag: 'KIẾN TRÚC / KHÔNG GIAN 3D',
      planA1: '01 — CHIẾN LƯỢC THƯƠNG HIỆU', planA2: 'PHÁT TRIỂN CONCEPT', planB1: '02 — DÒNG CHẢY DỰ ÁN', planB2: 'KẾ HOẠCH / THỰC THI', planC1: '03 — TẦM NHÌN BẤT ĐỘNG SẢN', planC2: 'MINH HỌA ĐÔ THỊ NEON',
      heroVisualCaption: 'BẤT ĐỘNG SẢN <span>✳</span> TƯ DUY SÁNG TẠO', stat1: 'BẮT ĐẦU SỰ NGHIỆP', stat2: 'CHẶNG ĐƯỜNG NGHỀ NGHIỆP', stat3: 'VIỆT NAM', scrollPrompt: 'CUỘN XUỐNG ĐỂ KHÁM PHÁ', heroSideLabel: 'PORTFOLIO — NEON EDITION / 2026',
      marqueeText: 'CHIẾN LƯỢC <b>✳</b> KỂ CHUYỆN HÌNH ẢNH <b>✳</b> BẤT ĐỘNG SẢN <b>✳</b> TRẢI NGHIỆM THƯƠNG HIỆU <b>✳</b> Ý TƯỞNG ĐA SẮC <b>✳</b> ',
      aboutNo: '01 / ĐÔI ĐIỀU VỀ TÔI', aboutSide: 'CON NGƯỜI / ĐẰNG SAU CÔNG VIỆC', aboutMini: 'NGƯỜI ĐỨNG SAU NHỮNG Ý TƯỞNG',
      aboutTitle: 'Từ tư duy <em>kinh doanh</em> đến ngôn ngữ <em>hình ảnh.</em>',
      aboutP1: 'Tôi là <strong>Nguyễn Đức Tuyến</strong>, làm việc trong lĩnh vực Marketing với kinh nghiệm trải dài qua kinh doanh, hỗ trợ vận hành, bất động sản và truyền thông thương hiệu.',
      aboutP2: 'Hành trình từ quản trị hoạt động, hỗ trợ kinh doanh đến triển khai hình ảnh và concept sự kiện giúp tôi tiếp cận công việc theo cả hai góc nhìn: <strong>tính thực thi và cảm xúc thương hiệu.</strong>',
      aboutCta: 'KHÁM PHÁ HỒ SƠ CHUYÊN MÔN', profileNo: '02 / HỒ SƠ CHUYÊN MÔN', profileTitle: 'Hồ sơ chuyên môn.<br/><em>Rõ định hướng phát triển.</em>', profileDesc: 'Tổng hợp định hướng nghề nghiệp, kỹ năng nổi bật và hệ công cụ hỗ trợ công việc — theo phong cách gọn rõ, hiện đại và phù hợp với vị trí Marketing trong môi trường doanh nghiệp.', objectiveChip: 'MỤC TIÊU', objectiveTitle: 'Mục tiêu nghề nghiệp', objectiveBody: 'Mục tiêu nghề nghiệp của tôi là phát triển theo hướng Chuyên viên Marketing/Brand Communications có khả năng kết nối chiến lược kinh doanh, truyền thông hình ảnh và trải nghiệm thương hiệu, đặc biệt trong lĩnh vực bất động sản, thương mại và dịch vụ. Tôi mong muốn làm việc trong môi trường năng động, chuyên nghiệp, nơi có thể phát huy tư duy thẩm mỹ, khả năng triển khai thực tế và tinh thần phối hợp liên phòng ban để tạo ra các chiến dịch hiệu quả, chỉn chu và mang giá trị bền vững cho thương hiệu.', skillsChip: 'KỸ NĂNG', skillsTitle: 'Kỹ năng nổi bật', skill1: 'Lập kế hoạch và phối hợp triển khai Marketing', skill2: 'Thiết kế hình ảnh thương hiệu và nội dung truyền thông', skill3: 'Concept sự kiện, chụp ảnh và hậu kỳ cơ bản', skill4: 'Hỗ trợ kinh doanh, hợp đồng, hồ sơ và đối chiếu số liệu', skill5: 'Khả năng thích nghi nhanh, chú ý chi tiết và làm việc phối hợp', toolsChip: 'PHẦN MỀM', toolsTitle: 'Phần mềm & công cụ', toolLabel1: 'Thiết kế & Hình ảnh', toolText1: 'Adobe Photoshop, Canva', toolLabel2: 'Văn phòng & Báo cáo', toolText2: 'Microsoft Office, Excel, PowerPoint, WPS Office, Google Workspace', toolLabel3: 'AI hỗ trợ sáng tạo', toolText3: 'ChatGPT, Gemini, Suno, Stable Diffusion / ComfyUI', expNo: '03 / NĂNG LỰC CỐT LÕI', expTitle: 'Năng lực tạo nên <em>dấu ấn.</em>', expDesc: 'Từ xây dựng hình ảnh tới điều phối triển khai — phối hợp giữa sự sáng tạo và tính kỷ luật trong vận hành.',
      cap1Title: 'Marketing &amp; Kế hoạch', cap1Desc: 'Phối hợp triển khai hoạt động marketing theo kế hoạch kinh doanh và nhu cầu thị trường.',
      cap2Title: 'Thiết kế thương hiệu', cap2Desc: 'Thiết kế hình ảnh, phát triển ý tưởng thị giác và đảm bảo tính nhất quán cho hoạt động thương hiệu.',
      cap3Title: 'Media &amp; Hậu kỳ', cap3Desc: 'Chụp ảnh, xử lý hình ảnh, quản trị các kênh truyền thông và sản xuất nội dung thương hiệu.',
      cap4Title: 'Concept &amp; Sự kiện', cap4Desc: 'Phát triển concept trang trí, phối hợp hoạt động sự kiện và phụ trách hình ảnh thương hiệu tại sự kiện.',
      cap5Title: 'Điều phối kinh doanh', cap5Desc: 'Soạn thảo hợp đồng, chính sách bán hàng, quản trị hồ sơ và hỗ trợ vận hành phòng kinh doanh.',
      cap6Title: 'Đối chiếu &amp; Triển khai', cap6Desc: 'Theo dõi hoạt động, đối chiếu số liệu và phối hợp giữa các bộ phận để triển khai kế hoạch.',
      journeyNo: '04 / HÀNH TRÌNH NGHỀ NGHIỆP', journeyTitle: 'Mỗi chặng đường.<br/><em>Một góc nhìn mới.</em>', journeyDesc: 'Từ vận hành dịch vụ và công nghệ phần mềm đến bất động sản, hỗ trợ điều hành và marketing thương hiệu.',
      job1Title: 'Chuyên viên Marketing', job1Company: 'Công ty Cổ phần Đức Mạnh', job1Desc: 'Quản trị media, thiết kế hình ảnh thương hiệu, phát triển concept sự kiện, chụp ảnh – hậu kỳ và phối hợp marketing với bộ phận kinh doanh.',
      job2Title: 'Trợ lý Ban Giám Đốc', job2Company: 'L.U.X Property Danang', job2Desc: 'Quản trị hồ sơ hợp đồng, chính sách bán hàng, đối chiếu số liệu và phối hợp triển khai marketing đến phòng kinh doanh.',
      job3Title: 'Trợ lý Kinh doanh', job3Company: 'Minh Trần Holdings', job3Desc: 'Hỗ trợ thiết lập văn phòng, tuyển dụng, xây dựng kế hoạch phòng kinh doanh, tìm kiếm – chăm sóc khách hàng và marketing online.',
      job4Title: 'Sales Admin / Trợ lý tổng hợp', job4Company: 'DKRV Đà Nẵng &amp; Bất động sản Tâm Phát', job4Desc: 'Hợp đồng đại lý – khách hàng, quản trị hồ sơ, chính sách kinh doanh, đối chiếu số liệu và hỗ trợ triển khai marketing.',
      job5Title: 'Sales &amp; Marketing', job5Company: 'Polaris Việt Nam', job5Desc: 'Tìm kiếm khách hàng, hỗ trợ đào tạo người dùng phần mềm, triển khai chương trình marketing và hoạt động marketing tổng hợp.',
      job6Title: 'Marshall', job6Company: 'Bà Nà Hills Golf Club', job6Desc: 'Giám sát hoạt động sân, xử lý tình huống phát sinh, hỗ trợ quản lý nhân sự trên sân và báo cáo hằng ngày.',
      worksNo: '05 / NHÓM CÔNG VIỆC TIÊU BIỂU', worksTitle: 'Những lĩnh vực<br/><em>tôi từng thực hiện.</em>', worksDesc: 'Ba nhóm công việc tiêu biểu được tổng hợp từ hành trình nghề nghiệp. Hình minh họa mang tính concept, thể hiện tinh thần bất động sản, quy hoạch và thương hiệu.',
      work1Title: 'Truyền thông <em>bất động sản</em>', work1Desc: 'Phối hợp truyền thông, hình ảnh thương hiệu và kế hoạch tiếp cận thị trường trong lĩnh vực bất động sản.',
      work2Title: 'Kế hoạch &amp; <em>triển khai</em>', work2Desc: 'Từ chính sách kinh doanh, hồ sơ vận hành đến phối hợp triển khai giữa các bộ phận.',
      work3Title: 'Hình ảnh &amp; <em>trải nghiệm</em>', work3Desc: 'Thiết kế hình ảnh, sản xuất nội dung, xây dựng concept trang trí và hỗ trợ hình ảnh sự kiện.',
      eduNo: '06 / NỀN TẢNG', eduTitle: 'Nền tảng.<br/><em>Động lực phát triển.</em>', eduDesc: 'Học tập về quản trị và tích lũy kinh nghiệm thực tế qua nhiều môi trường — một hành trình chú trọng sự thích nghi, chi tiết và phối hợp.',
      eduSchool: 'Cao đẳng Thương mại', eduMajor: 'Quản trị Kinh doanh<br/>Dịch vụ &amp; Lữ hành', eduMode: 'HỆ CHÍNH QUY', eduDegree: 'CAO ĐẲNG ↗', eduSoftTitle: 'Đào tạo Kỹ năng mềm', eduSoftPlace: 'Cao đẳng Thương mại',
      contactNo: '07 / HÃY KẾT NỐI', contactStatus: 'SẴN SÀNG KẾT NỐI', contactPretitle: 'CÓ MỘT Ý TƯỞNG ĐÁNG ĐỂ BẮT ĐẦU?', contactTitle: 'CÙNG TẠO RA<br/><em>ĐIỀU ĐÁNG NHỚ.</em>', contactEmail: 'GỬI EMAIL CHO TÔI', contactLocation: 'ĐỊA ĐIỂM / ĐÀ NẴNG, VIỆT NAM', backTop: 'LÊN ĐẦU TRANG ↑',
      footerMid: 'THIẾT KẾ THEO CHẤT NEON / XÂY DỰNG BẰNG CODE', footerEnd: 'KẾT THÚC PORTFOLIO — 04',
      introOverline: 'MỘT CHẶNG ĐƯỜNG. MỘT GÓC NHÌN.', introSubtitle: 'NGUYỄN ĐỨC TUYẾN', introTagline: 'REAL ESTATE  ×  BRAND THINKING  ×  CREATIVITY', introLoading: 'ĐANG MỞ CÂU CHUYỆN...', introSkip: 'BỎ QUA INTRO <span>↗</span>', replayIntro: 'XEM LẠI INTRO', downloadCV: 'TẢI CV (PDF)',
      motionOn: 'ON', motionOff: 'OFF', themeDark: 'DARK', themeLight: 'LIGHT'
    },
    en: {
      loaderOverline: 'INITIALIZING / PERSONAL PORTFOLIO', loaderCaption: 'REAL ESTATE / MARKETING / CREATIVITY', brandSmall: 'NEON PERSONAL PORTFOLIO',
      navAbout: 'About', navExpertise: 'Expertise', navJourney: 'Journey', navWorks: 'Domains',
      langToggle: 'LANGUAGE', themeToggle: 'THEME', motionToggle: 'MOTION', contactBtn: 'CONTACT',
      mobAbout: '01 / About', mobExpertise: '02 / Expertise', mobJourney: '03 / Journey', mobWorks: '04 / Domains', mobContact: '05 / Contact',
      heroEyebrow: 'PORTFOLIO <b>/</b> MARKETING × REAL ESTATE', heroChapter: 'CINEMATIC CAREER / COLORFUL BRAND STORY.', heroIndex: '[ PERSONAL BRAND / 2026 ]',
      heroBody: 'I connect <em>business thinking</em>, <em>visual language</em> and <em>brand experience</em> to turn ideas into practical and memorable actions.',
      heroCtaPrimary: 'EXPLORE THE JOURNEY', heroCtaSecondary: 'Work with me', heroVisualTag: 'ARCHITECTURE / 3D SPACE',
      planA1: '01 — BRAND STRATEGY', planA2: 'CONCEPT DEVELOPMENT', planB1: '02 — PROJECT FLOW', planB2: 'PLANNING / EXECUTION', planC1: '03 — PROPERTY VISION', planC2: 'NEON URBAN ILLUSTRATIONS',
      heroVisualCaption: 'REAL ESTATE <span>✳</span> CREATIVE THINKING', stat1: 'CAREER START', stat2: 'CAREER CHAPTERS', stat3: 'VIET NAM', scrollPrompt: 'SCROLL TO EXPLORE', heroSideLabel: 'PORTFOLIO — NEON EDITION / 2026',
      marqueeText: 'STRATEGY <b>✳</b> VISUAL STORYTELLING <b>✳</b> REAL ESTATE <b>✳</b> BRAND EXPERIENCE <b>✳</b> COLORFUL IDEAS <b>✳</b> ',
      aboutNo: '01 / A LITTLE ABOUT ME', aboutSide: 'THE PERSON / BEHIND THE WORK', aboutMini: 'THE MIND BEHIND THE IDEAS',
      aboutTitle: 'From <em>business thinking</em> to visual <em>storytelling.</em>',
      aboutP1: 'I am <strong>Nguyễn Đức Tuyến</strong>, a marketing professional whose experience spans sales, operations support, real estate and brand communication.',
      aboutP2: 'My journey from business operations and sales support to visual execution and event concepts allows me to approach work from two angles: <strong>practical execution and brand emotion.</strong>',
      aboutCta: 'EXPLORE PROFESSIONAL PROFILE', profileNo: '02 / PROFESSIONAL PROFILE', profileTitle: 'Professional profile.<br/><em>Clear direction for growth.</em>', profileDesc: 'A concise overview of career objective, standout skills and working tools — presented in a modern format suitable for a Marketing role in a corporate environment.', objectiveChip: 'OBJECTIVE', objectiveTitle: 'Career objective', objectiveBody: 'My career objective is to grow as a Marketing and Brand Communications Specialist who can connect business strategy, visual communication and brand experience—especially in real estate, commercial and service environments. I aim to contribute in a dynamic, professional workplace where I can leverage aesthetics, hands-on execution and cross-functional collaboration to build effective, polished and sustainable brand campaigns.', skillsChip: 'SKILLS', skillsTitle: 'Core skills', skill1: 'Marketing planning and execution coordination', skill2: 'Brand visual design and communication content creation', skill3: 'Event concepting, photography and basic post-production', skill4: 'Sales support, contracts, documentation and data reconciliation', skill5: 'Fast adaptability, attention to detail and collaborative teamwork', toolsChip: 'SOFTWARE', toolsTitle: 'Software & tools', toolLabel1: 'Design & Visuals', toolText1: 'Adobe Photoshop, Canva', toolLabel2: 'Office & Reporting', toolText2: 'Microsoft Office, Excel, PowerPoint, WPS Office, Google Workspace', toolLabel3: 'AI Creative Support', toolText3: 'ChatGPT, Gemini, Suno, Stable Diffusion / ComfyUI', expNo: '03 / CORE CAPABILITIES', expTitle: 'Capabilities that shape <em>impact.</em>', expDesc: 'From visual creation to execution coordination — a balance between creativity and operational discipline.',
      cap1Title: 'Marketing &amp; Planning', cap1Desc: 'Coordinate marketing activities in line with business plans and market needs.',
      cap2Title: 'Brand Design', cap2Desc: 'Create visuals, develop creative directions and maintain brand consistency.',
      cap3Title: 'Media &amp; Post-production', cap3Desc: 'Photography, image retouching, media channel management and branded content production.',
      cap4Title: 'Concept &amp; Events', cap4Desc: 'Develop decoration concepts, support event activations and oversee brand visuals at events.',
      cap5Title: 'Business Operations Support', cap5Desc: 'Handle contracts, sales policies, document systems and internal business support.',
      cap6Title: 'Coordination &amp; Execution', cap6Desc: 'Track activities, reconcile figures and coordinate across teams to execute plans.',
      journeyNo: '04 / PROFESSIONAL JOURNEY', journeyTitle: 'Every chapter.<br/><em>A new perspective.</em>', journeyDesc: 'From service operations and software to real estate, executive support and brand marketing.',
      job1Title: 'Marketing Specialist', job1Company: 'Duc Manh Joint Stock Company', job1Desc: 'Managed media channels, designed brand visuals, developed event concepts, handled photography/post-production and coordinated marketing with sales.',
      job2Title: 'Executive Assistant', job2Company: 'L.U.X Property Danang', job2Desc: 'Managed contract documents, sales policies, data reconciliation and marketing coordination for the sales department.',
      job3Title: 'Sales Assistant', job3Company: 'Minh Trần Holdings', job3Desc: 'Supported office setup, recruitment, sales planning, customer care and online marketing.',
      job4Title: 'Sales Admin / General Assistant', job4Company: 'DKRV Danang &amp; Tam Phat Real Estate', job4Desc: 'Handled agency/client contracts, records, sales policies, data reconciliation and marketing support.',
      job5Title: 'Sales &amp; Marketing', job5Company: 'Polaris Vietnam', job5Desc: 'Found new clients, supported software-user training and implemented integrated marketing activities.',
      job6Title: 'Marshall', job6Company: 'Ba Na Hills Golf Club', job6Desc: 'Supervised golf course operations, handled on-site issues, supported staff coordination and made daily reports.',
      worksNo: '05 / SELECTED WORK DOMAINS', worksTitle: 'Fields I have<br/><em>worked across.</em>', worksDesc: 'Three representative work clusters shaped by my career journey. The visuals are conceptual illustrations of property, planning and brand thinking.',
      work1Title: 'Real Estate <em>Communication</em>', work1Desc: 'Brand communication, market-facing visuals and strategic campaign support in the real estate sector.',
      work2Title: 'Planning &amp; <em>Execution</em>', work2Desc: 'From sales policies and operation documents to cross-team implementation.',
      work3Title: 'Visuals &amp; <em>Experience</em>', work3Desc: 'Visual design, content production, decoration concepts and event imaging support.',
      eduNo: '06 / FOUNDATION', eduTitle: 'Foundation.<br/><em>Momentum for growth.</em>', eduDesc: 'A business-oriented education combined with hands-on experience across diverse environments — driven by adaptability, detail and collaboration.',
      eduSchool: 'College of Commerce', eduMajor: 'Business Administration<br/>Service &amp; Tourism', eduMode: 'FULL-TIME PROGRAM', eduDegree: 'COLLEGE DEGREE ↗', eduSoftTitle: 'Soft Skills Training', eduSoftPlace: 'College of Commerce',
      contactNo: '07 / LET\'S CONNECT', contactStatus: 'OPEN TO CONNECT', contactPretitle: 'DO YOU HAVE AN IDEA WORTH STARTING?', contactTitle: 'LET\'S CREATE<br/><em>SOMETHING MEMORABLE.</em>', contactEmail: 'EMAIL ME', contactLocation: 'LOCATION / DA NANG, VIET NAM', backTop: 'BACK TO TOP ↑',
      footerMid: 'DESIGNED IN NEON / BUILT WITH CODE', footerEnd: 'END OF PORTFOLIO — 04',
      introOverline: 'ONE JOURNEY. ONE PERSPECTIVE.', introSubtitle: 'NGUYEN DUC TUYEN', introTagline: 'REAL ESTATE  ×  BRAND THINKING  ×  CREATIVITY', introLoading: 'OPENING THE STORY...', introSkip: 'SKIP INTRO <span>↗</span>', replayIntro: 'REPLAY INTRO', downloadCV: 'DOWNLOAD CV (PDF)',
      motionOn: 'ON', motionOff: 'OFF', themeDark: 'DARK', themeLight: 'LIGHT'
    }
  };

  let motionEnabled = !prefersReduced;
  let scrollScheduled = false;
  let currentScroll = window.scrollY;
  let currentTheme = localStorage.getItem('ndt-theme') || 'dark';
  let currentLang = localStorage.getItem('ndt-lang') || 'vi';

  const revealElements = $$('.reveal');
  if ('IntersectionObserver' in window && motionEnabled) {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }
    }, { rootMargin: '0px 0px -30px 0px', threshold: .08 });
    revealElements.forEach(el => observer.observe(el));
  } else revealElements.forEach(el => el.classList.add('is-visible'));

  const applyTranslations = (lang) => {
    const dict = translations[lang] || translations.vi;
    document.documentElement.lang = lang;
    body.dataset.lang = lang;
    $$('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key]) el.innerHTML = dict[key];
    });
    langCode.textContent = lang === 'vi' ? 'EN' : 'VI';
    skipIntro?.setAttribute('aria-label', lang === 'vi' ? 'Bỏ qua màn giới thiệu' : 'Skip portfolio introduction');
    const pdfName = lang === 'vi' ? 'Nguyen_Duc_Tuyen_CV_VI.pdf' : 'Nguyen_Duc_Tuyen_CV_EN.pdf';
    $$('[data-pdf-download]').forEach(a => {
      a.setAttribute('href', `assets/${pdfName}`);
      a.setAttribute('download', pdfName);
      a.setAttribute('aria-label', lang === 'vi' ? 'Tải CV tiếng Việt dưới dạng PDF' : 'Download English CV as PDF');
    });
    updateThemeUI();
    updateMotionUI();
    localStorage.setItem('ndt-lang', lang);
  };

  // Cinematic intro: 4.7s with accessible skip, replay and one-play-per-tab behavior.
  // The overlay never prevents access for reduced-motion users or people without JS.
  let introTimer = null;
  let introHideTimer = null;
  let introStarted = false;
  let playingIntro = false;
  let introHideFocus = null;
  let introPercentFrame = null;
  const introStorageKey = 'ndt-intro-played-v4';
  let introSeen = false;
  try { introSeen = sessionStorage.getItem(introStorageKey) === '1'; } catch(_) {}
  function finishIntro({ focusBack = false } = {}) {
    clearTimeout(introTimer);
    if (introPercentFrame !== null) cancelAnimationFrame(introPercentFrame);
    $('#intro-percent').textContent = '100%';
    playingIntro = false;
    body.classList.remove('intro-active');
    loader?.classList.remove('is-playing');
    loader?.classList.add('is-gone');
    loader?.setAttribute('aria-hidden','true');
    try { sessionStorage.setItem(introStorageKey,'1'); } catch(_) {}
    clearTimeout(introHideTimer);
    introHideTimer = setTimeout(() => {
      if (loader && !playingIntro) loader.style.display = 'none';
    }, 850);
    if (focusBack && introHideFocus && typeof introHideFocus.focus === 'function') introHideFocus.focus();
  }
  function playIntro({ fromReplay = false } = {}) {
    if (!loader) return;
    clearTimeout(introTimer);
    if (introPercentFrame !== null) cancelAnimationFrame(introPercentFrame);
    clearTimeout(introHideTimer);
    $('#intro-percent').textContent = '00%';
    loader.style.display = 'grid';
    loader.classList.remove('is-gone','is-playing');
    loader.setAttribute('aria-hidden','false');
    body.classList.add('intro-active');
    // Restart CSS timeline without recreating any page content.
    void loader.offsetWidth;
    loader.classList.add('is-playing');
    playingIntro = true;
    introStarted = true;
    const startedAt = performance.now();
    function animatePercent(now) {
      if (!playingIntro) return;
      const pct = Math.min(99, Math.round((now - startedAt) / 4400 * 100));
      $('#intro-percent').textContent = `${String(Math.max(0,pct)).padStart(2,'0')}%`;
      introPercentFrame = requestAnimationFrame(animatePercent);
    }
    introPercentFrame = requestAnimationFrame(animatePercent);
    introTimer = setTimeout(() => finishIntro(), 4700);
    if (fromReplay) skipIntro?.focus();
  }
  skipIntro?.addEventListener('click',() => finishIntro({focusBack:true}));
  replayIntro?.addEventListener('click',() => {
    introHideFocus = replayIntro;
    if (prefersReduced || !motionEnabled) return;
    playIntro({fromReplay:true});
  });
  document.addEventListener('keydown', e => {
    if (playingIntro && (e.key === 'Escape' || e.key === 'Enter' && document.activeElement === skipIntro)) {
      e.preventDefault(); finishIntro({focusBack:true});
    }
  });
  if (prefersReduced || introSeen) {
    finishIntro();
    if (prefersReduced) loader.style.display = 'none';
  } else {
    // Start immediately: no reliance on slow font or image loading.
    playIntro();
  }

  function updateScroll() {
    currentScroll = window.scrollY;
    header?.classList.toggle('is-scrolled', currentScroll > 50);
    const distance = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    if (progress) progress.style.width = `${Math.min(100, Math.max(0, currentScroll / distance * 100))}%`;
    scrollScheduled = false;
  }
  window.addEventListener('scroll', () => {
    if (!scrollScheduled) { requestAnimationFrame(updateScroll); scrollScheduled = true; }
  }, { passive: true });
  updateScroll();

  const setMenu = (open) => {
    menuButton?.classList.toggle('is-open', open);
    mobileNav?.classList.toggle('is-open', open);
    menuButton?.setAttribute('aria-expanded', String(open));
    menuButton?.setAttribute('aria-label', open ? (currentLang==='vi' ? 'Đóng menu' : 'Close menu') : (currentLang==='vi' ? 'Mở menu' : 'Open menu'));
  };
  menuButton?.addEventListener('click', () => setMenu(!mobileNav.classList.contains('is-open')));
  $$('#mobile-nav a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

  function updateMotionUI() {
    document.body.classList.toggle('motion-paused', !motionEnabled);
    motionLabel.textContent = motionEnabled ? translations[currentLang].motionOn : translations[currentLang].motionOff;
    motionButton?.setAttribute('aria-pressed', String(motionEnabled));
    if (!motionEnabled) revealElements.forEach(el => el.classList.add('is-visible'));
  }
  motionButton?.addEventListener('click', () => { motionEnabled = !motionEnabled; updateMotionUI(); if(!motionEnabled && playingIntro) finishIntro(); });

  function updateThemeUI() {
    body.dataset.theme = currentTheme;
    const isLight = currentTheme === 'light';
    themeMode.textContent = isLight ? translations[currentLang].themeLight : translations[currentLang].themeDark;
    themeButton?.setAttribute('aria-pressed', String(isLight));
    localStorage.setItem('ndt-theme', currentTheme);
  }
  themeButton?.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    updateThemeUI();
  });

  langButton?.addEventListener('click', () => {
    currentLang = currentLang === 'vi' ? 'en' : 'vi';
    applyTranslations(currentLang);
  });

  currentLang = currentLang in translations ? currentLang : 'vi';
  currentTheme = currentTheme === 'light' ? 'light' : 'dark';
  applyTranslations(currentLang);
  updateThemeUI();
  updateMotionUI();
  $('#year').textContent = String(new Date().getFullYear());

  const canvas = $('#world-canvas');
  if (!canvas || !canvas.getContext) return;
  const ctx = canvas.getContext('2d', { alpha: true });
  if (!ctx) return;
  let w = 0, h = 0, dpr = 1, frameTime = 0;
  let pointer = { x: .5, y: .5 };
  let dots = [];
  let intersectionVisible = !document.hidden;
  const rand = (min, max) => min + Math.random() * (max - min);
  const seededRandom = (seed) => { let s = seed >>> 0; return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296); };
  let sceneRandom = seededRandom(2026);
  let skyline = [];
  const palette = [
    ['rgba(113,255,199,', 'rgba(104,236,255,'],
    ['rgba(255,102,214,', 'rgba(255,214,102,'],
    ['rgba(171,255,123,', 'rgba(90,255,214,']
  ];

  function layoutCanvas() {
    dpr = Math.min(window.devicePixelRatio || 1, 1.8);
    w = window.innerWidth; h = window.innerHeight;
    canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    sceneRandom = seededRandom(2026);
    dots = Array.from({ length: Math.min(90, Math.floor(w * h / 11000)) }, (_, i) => ({ x:rand(0,w), y:rand(0,h), r:rand(.6,1.8), o:rand(.15,.55), vx:rand(-.13,.13), vy:rand(-.19,-.04), color: palette[i % palette.length][i % 2] }));
    skyline = [];
    const count = Math.ceil(w / 85) + 3;
    for(let i=0;i<count;i++) skyline.push({x:i*84-24,width:rand(40,86),height:rand(55,205),gap:rand(7,17),seed:sceneRandom()});
  }

  function drawFrame(t) {
    if (!motionEnabled || !intersectionVisible) { requestAnimationFrame(drawFrame); return; }
    if (t - frameTime < 33) { requestAnimationFrame(drawFrame); return; }
    frameTime = t;
    ctx.clearRect(0,0,w,h);
    const phase = t * .001;
    const px = (pointer.x - .5) * 15;
    const py = (pointer.y - .5) * 10;

    const wash = ctx.createRadialGradient(w*0.68, h*0.22, 10, w*0.68, h*0.22, h*0.7);
    wash.addColorStop(0, body.dataset.theme === 'light' ? 'rgba(140,255,182,.12)' : 'rgba(119,255,199,.09)');
    wash.addColorStop(.35, 'rgba(0,0,0,0)');
    wash.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = wash;
    ctx.fillRect(0,0,w,h);

    ctx.save();
    ctx.strokeStyle = body.dataset.theme === 'light' ? 'rgba(64,156,109,.08)' : 'rgba(120,255,219,.06)';
    ctx.lineWidth = 1;
    const step = 88;
    for (let x = (px%step)-step; x < w; x+=step) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,h); ctx.stroke(); }
    for (let y = (py%step)-step; y < h; y+=step) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(w,y); ctx.stroke(); }
    ctx.restore();

    const base = h * .94;
    skyline.forEach((b,i) => {
      const x = b.x + px * .22;
      const top = base - b.height;
      ctx.fillStyle = body.dataset.theme === 'light' ? 'rgba(76,102,80,.07)' : 'rgba(8,27,15,.16)';
      ctx.fillRect(x,top,b.width,b.height);
      ctx.strokeStyle = i % 3 === 0 ? 'rgba(109,255,198,.16)' : (i % 3 === 1 ? 'rgba(255,117,217,.12)' : 'rgba(255,211,104,.12)');
      ctx.lineWidth = .75;
      ctx.strokeRect(x,top,b.width,b.height);
      ctx.beginPath();ctx.moveTo(x,top);ctx.lineTo(x+12,top-12);ctx.lineTo(x+b.width+12,top-12);ctx.lineTo(x+b.width,top);ctx.stroke();
      for (let ry=top+10;ry<base-5;ry+=15){
        for(let rx=x+8;rx<x+b.width-4;rx+=14) {
          if ((Math.floor(ry*4+rx*3+b.seed*100)%8)===0) {ctx.fillStyle=i%3===0?'rgba(155,249,212,.2)':i%3===1?'rgba(255,134,223,.18)':'rgba(255,224,130,.18)';ctx.fillRect(rx,ry,2.5,3.5);}
        }
      }
    });

    dots.forEach((dot,i) => {
      dot.x += dot.vx; dot.y += dot.vy;
      if(dot.x<-4)dot.x=w+4; if(dot.x>w+4)dot.x=-4; if(dot.y<-4)dot.y=h+4;
      const o = dot.o * (.72 + .28*Math.sin(phase*.7+i));
      ctx.fillStyle=`${dot.color}${Math.max(0,o)})`;
      ctx.beginPath(); ctx.arc(dot.x+px*.3,dot.y+py*.3,dot.r,0,Math.PI*2); ctx.fill();
      if (i%11===0) {
        ctx.strokeStyle=i%22===0?'rgba(255,105,219,.15)':'rgba(161,224,205,.13)';
        ctx.beginPath();ctx.moveTo(dot.x-8,dot.y);ctx.lineTo(dot.x+8,dot.y);ctx.moveTo(dot.x,dot.y-8);ctx.lineTo(dot.x,dot.y+8);ctx.stroke();
      }
    });

    const scanX = (phase*17 % (w+220))-110;
    const gradient=ctx.createLinearGradient(scanX-50,0,scanX+50,0);
    gradient.addColorStop(0,'rgba(150,244,220,0)');gradient.addColorStop(.5,'rgba(150,244,220,.03)');gradient.addColorStop(1,'rgba(150,244,220,0)');
    ctx.fillStyle=gradient;ctx.fillRect(scanX-50,0,100,h);
    requestAnimationFrame(drawFrame);
  }
  window.addEventListener('resize', layoutCanvas, { passive:true });
  window.addEventListener('pointermove', e => { pointer.x = e.clientX / window.innerWidth;pointer.y=e.clientY / window.innerHeight; }, { passive:true });
  document.addEventListener('visibilitychange', () => { intersectionVisible = !document.hidden; });
  layoutCanvas();
  if (!prefersReduced) requestAnimationFrame(drawFrame);
})();