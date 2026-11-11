/*
 * Nguyễn Đức Tuyến · Cinematic Portfolio
 * Standalone vanilla JavaScript. No build step, no paid API, no framework.
 * Works from GitHub Pages, subfolders, and locally (index.html).
 */
(() => {
  'use strict';
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const storage = {get(key) {try {return localStorage.getItem(key);} catch (_) {return null;}},set(key,v) {try {localStorage.setItem(key,v);}catch (_){}}};
  const translations = {
    en: {
      skip:'Skip the introduction', introEyebrow:'A CREATIVE JOURNEY',introTitle:'Every idea<br/>is a new world.',introDescription:'Step into my world of Marketing, Design &amp; AI.',introStart:'ENTER THE WORLD',introTip:'No need to wait — press to begin',
      navHome:'HOME',navAbout:'MY STORY',navJourney:'JOURNEY',navSkills:'SKILLS',navWork:'WORK',navContact:'LET’S TALK <span aria-hidden="true">↗</span>',navContactShort:'CONTACT',
      heroChapter:'CHAPTER 00 / THE BEGINNING',heroHello:'HELLO, MY NAME IS',heroRole:'MARKETING <span>×</span> CREATIVE DESIGN <span>×</span> AI',heroDescription:'I connect strategy with imagery, storytelling with technology — helping each brand create a distinct impression.',heroExplore:'START THE JOURNEY',heroView:'EXPLORE WORK',heroSpeech:'Welcome to my creative universe!',scroll:'SCROLL TO EXPLORE',
      aboutKicker:'FROM IDEAS TO IMPACT',aboutIntro:'MEET THE STORYTELLER',aboutTitle:'Behind every<br/><em>great idea</em><br/>is a story.',aboutP1:'I’m Nguyễn Đức Tuyến, a marketing specialist based in Da Nang. My journey began in service, sales, and real estate before I focused on building brand identities and communication.',aboutP2:'I enjoy turning complex briefs into clear visual experiences — across campaign graphics, photography, event concepts, and AI-enabled creative workflows.',aboutTag1:'Attention to detail',aboutTag2:'Versatility',aboutTag3:'Practical creativity',aboutSpeech:'Beautiful design should always serve a clear purpose.',metric1:'CAREER START',metric2:'CAREER CHAPTERS',metric3:'CORE CREATIVE FIELDS',
      journeyTop:'STEPS ALONG THE WAY',journeyKicker:'FROM SERVICE TO CREATIVITY',journeyTitle:'Every chapter,<br/><em>a new skill.</em>',journeyNote:'From service and sales to marketing and brand communication.',journeySpeech:'Each chapter added another skill to the person I am today.',
      phase1:'CHAPTER 01 · SERVICE',job1Role:'Marshall · Golf Course Operations',job1Desc:'Oversaw daily course operations, resolved on-site issues, coordinated staff, and prepared daily reports.',
      phase2:'CHAPTER 02 · TECHNOLOGY',job2Role:'Sales & Marketing · Software Implementation Support',job2Desc:'Prospected for customers, assisted with software training, and implemented marketing campaigns.',
      phase3:'CHAPTER 03 · REAL ESTATE',job3Role:'Sales Administrator · General Assistant',job3Desc:'Managed contracts, sales policies, data reconciliation, and coordinated marketing activities with sales teams.',
      phase4:'CHAPTER 04 · OPERATIONS',job4Role:'Sales Assistant',job4Desc:'Helped establish a new office, recruit staff, plan sales operations, and support customer relationships.',
      phase5:'CHAPTER 05 · MANAGEMENT',job5Role:'Executive Assistant',job5Desc:'Supported contracts, administration, business policies, and cross-functional marketing coordination.',
      phase6:'CHAPTER 06 · BRANDING',companyDMC:'Duc Manh Joint Stock Company',job6Role:'Marketing Specialist',job6Desc:'Managed media channels, designed brand communications, developed event concepts, and produced photography and post-production content.',now:'PRESENT',current:'CURRENT ROLE',educationLabel:'EDUCATION',educationSchool:'College of Commerce · 2014–2017',educationDetail:'Service & Travel Business Administration · Full-time diploma',
      skillsTop:'SKILLS & TOOLS',skillsKicker:'CREATIVE TOOLKIT',skillsTitle:'Ideas are just the start.<br/><em>Tools bring them to life.</em>',skillsLead:'Combining marketing fundamentals, visual production, and emerging creative tools. Select a category to explore.',tabCreative:'DESIGN & MEDIA',tabAI:'AI & TECHNOLOGY',tabBusiness:'MARKETING & OPERATIONS',
      worksTop:'DESIGN & COMMUNICATION',worksKicker:'SELECTED WORK / PORTFOLIO',worksTitle:'Selected <em>work.</em>',worksNote:'Visual design, brand communication, and multimedia content for commercial real estate.',work1Type:'OFFICE LEASING · KEY VISUAL',work1Title:'Office leasing',work1Desc:'Visuals promoting office space and the panoramic views of Vinh Trung Plaza.',work2Type:'LOCATION · CONNECTIVITY',work2Title:'Convenient connectivity',work2Desc:'Communicating easy access to the airport, railway station, and My Khe Beach.',work3Type:'FACILITIES · LIFESTYLE',work3Title:'Everyday amenities',work3Desc:'Showcasing shopping, leisure, and sports facilities within the building.',tagDesign:'Design',worksDisclaimer:'',featuredKicker:'BRAND COMMUNICATION',featuredTitle:'Vinh Trung <em>Plaza.</em>',featuredDesc:'Visual communication for office space, commercial areas, and the amenity ecosystem in central Da Nang.',featuredWatch:'WATCH VIDEO',featuredBrochure:'BROCHURE',featuredStat1:'YouTube video',featuredStat2:'brochure PDF',featuredStat3:'project visuals & media',featuredEmbedTitle:'PROJECT FILM',featuredEmbedDesc:'',featuredGalleryTitle:'DESIGN & PHOTOGRAPHY',featuredGalleryNote:'Visual perspectives on the spaces, location, and amenities of Vinh Trung Plaza.',featuredCard1Title:'Office leasing',featuredCard1Desc:'725 m² office visual.',featuredCard2Title:'Panoramic views',featuredCard2Desc:'City, sea, and mountains.',featuredCard3Title:'Urban connectivity',featuredCard3Desc:'Station, airport, My Khe.',featuredCard4Title:'In-building amenities',featuredCard4Desc:'Shopping, leisure, sports.',featuredCard5Title:'Pickleball photography',featuredCard5Desc:'Vinh Trung Pickleball Club.',
      contactTop:'THE NEXT STORY',contactKicker:'YOU’VE REACHED THE FINAL CHAPTER',contactTitle:'The next chapter —<br/><em>shall we write it together?</em>',contactDescription:'Have an idea to bring to life, a story to share, or simply want to connect? Start with a hello.',contactEmail:'SAY HELLO',contactEnd:'THANK YOU FOR VISITING · SEE YOU AGAIN',footerMade:'MADE WITH IMAGINATION, DESIGN & A LITTLE MAGIC ✦',backTop:'BACK TO TOP ↑'
    }
  };

  const skillContent = {
    vi: {
      creative:{number:'01 / CREATIVE',heading:'Design & Visual Storytelling',description:'Từ ý tưởng đến hình ảnh truyền thông, video và trải nghiệm thương hiệu.',chips:['Adobe Illustrator','Adobe Premiere Pro','Adobe After Effects','Adobe Photoshop','Photography','Visual Concept'],footnote:'Thiết kế đồ họa · Hậu kỳ ảnh/video · Concept sáng tạo'},
      ai:{number:'02 / AI LAB',heading:'AI & Creative Technology',description:'Thử nghiệm công cụ AI hỗ trợ tạo hình, tạo chuyển động, làm nội dung và xử lý dữ liệu theo quy trình.',chips:['Google Flow','Google Colab','AI-assisted Design','Prompt Crafting','Creative Automation'],footnote:'Ứng dụng AI vào thiết kế, sản xuất nội dung và xử lý dữ liệu'},
      strategy:{number:'03 / MARKETING',heading:'Strategy & Business Operations',description:'Nền tảng kinh doanh, thực thi marketing và phối hợp hoạt động giữa các bộ phận.',chips:['Marketing tổng hợp','Social Media','Content Planning','Sales Administration','Event Planning','Brand Communication'],footnote:'Từ kinh nghiệm thực tế tại doanh nghiệp công nghệ, bất động sản và thương mại'}
    },
    en: {
      creative:{number:'01 / CREATIVE',heading:'Design & Visual Storytelling',description:'From the initial idea to campaign graphics, videos, and meaningful brand experiences.',chips:['Adobe Illustrator','Adobe Premiere Pro','Adobe After Effects','Adobe Photoshop','Photography','Visual Concept'],footnote:'Graphic design · Photo/video post-production · Creative concept development'},
      ai:{number:'02 / AI LAB',heading:'AI & Creative Technology',description:'Exploring AI tools for image and motion creation, content production, and practical data workflows.',chips:['Google Flow','Google Colab','AI-assisted Design','Prompt Crafting','Creative Automation'],footnote:'Applying AI to design, content production, and data workflows'},
      strategy:{number:'03 / MARKETING',heading:'Strategy & Business Operations',description:'A cross-functional foundation in business operations, marketing execution, and team coordination.',chips:['General Marketing','Social Media','Content Planning','Sales Administration','Event Planning','Brand Communication'],footnote:'Hands-on experience across technology, real estate, and commercial businesses'}
    }
  };
  const projectDetail = {
    vi: [
      {
        title: 'Văn phòng cho thuê', lead: 'Thiết kế ấn phẩm văn phòng thương mại',
        description: 'Hệ thống hình ảnh truyền thông tập trung vào diện tích thuê, vị trí trung tâm và tầm nhìn ba hướng tại Vĩnh Trung Plaza.',
        items: ['Key visual quảng bá diện tích 725 m²', 'Hình ảnh không gian văn phòng và lợi thế tầm nhìn', 'Nội dung hướng tới khách thuê doanh nghiệp'],
        note: 'Vĩnh Trung Plaza · Office Leasing'
      },
      {
        title: 'Kết nối thuận tiện', lead: 'Truyền thông lợi thế vị trí',
        description: 'Giới thiệu khả năng kết nối từ trung tâm thành phố đến các đầu mối giao thông và điểm đến nổi bật.',
        items: ['Ga Đà Nẵng', 'Sân bay quốc tế Đà Nẵng', 'Biển Mỹ Khê'],
        note: 'Vĩnh Trung Plaza · Location'
      },
      {
        title: 'Tiện ích nổi bật', lead: 'Giá trị trải nghiệm nội khu',
        description: 'Truyền tải các tiện ích phục vụ hoạt động làm việc, mua sắm, giải trí và thể thao tại tòa nhà.',
        items: ['GO! và Mr. D.I.Y.', 'CGV và Elite Fitness', 'Vĩnh Trung Pickleball Club'],
        note: 'Vĩnh Trung Plaza · Amenities'
      }
    ],
    en: [
      {
        title: 'Office leasing', lead: 'Commercial office visual design',
        description: 'Brand communication materials built around available floor area, central location, and panoramic views at Vinh Trung Plaza.',
        items: ['725 m² leasing key visual', 'Office interiors and panoramic viewpoints', 'Corporate tenant-focused messaging'],
        note: 'Vinh Trung Plaza · Office Leasing'
      },
      {
        title: 'Convenient connectivity', lead: 'Communicating the location advantage',
        description: 'Showcasing connections from central Da Nang to major transport hubs and city destinations.',
        items: ['Da Nang Railway Station', 'Da Nang International Airport', 'My Khe Beach'],
        note: 'Vinh Trung Plaza · Location'
      },
      {
        title: 'Everyday amenities', lead: 'A complete on-site experience',
        description: 'Visuals presenting the shopping, leisure, fitness, and sports facilities inside the building.',
        items: ['GO! and Mr. D.I.Y.', 'CGV and Elite Fitness', 'Vinh Trung Pickleball Club'],
        note: 'Vinh Trung Plaza · Amenities'
      }
    ]
  };

  let lang = storage.get('portfolio-lang') === 'en' ? 'en' : 'vi';
  let activeSkill = 'creative';
  const initialVietnamese = new Map();
  $$('[data-i18n]').forEach(el => initialVietnamese.set(el, el.innerHTML));

  function applyLanguage(next) {
    lang = next;
    document.documentElement.lang = next;
    $$('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      el.innerHTML = next === 'en' ? (translations.en[key] ?? initialVietnamese.get(el)) : initialVietnamese.get(el);
    });
    $('#currentLang').textContent = lang.toUpperCase();
    $('#otherLang').textContent = lang === 'vi' ? 'EN' : 'VI';
    storage.set('portfolio-lang', lang);
    applySkills(activeSkill, false);
  }
  function applySkills(group, animate = true) {
    activeSkill = group;
    const data = skillContent[lang][group];
    const stage = $('#skill-panel');
    if (animate) {stage.classList.remove('is-changing'); void stage.offsetWidth; stage.classList.add('is-changing');}
    $('#skillNumber').textContent = data.number;
    $('#skillHeading').textContent = data.heading;
    $('#skillDescription').textContent = data.description;
    $('#skillFootnote').textContent = data.footnote;
    const chips = $('#skillChips'); chips.replaceChildren();
    for (const name of data.chips) {const tag = document.createElement('span');tag.textContent = name;chips.append(tag);}
    $$('.skill-tab').forEach(tab => {
      const selected = tab.dataset.skill === group;
      tab.classList.toggle('is-active', selected);
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
      if (selected) stage.setAttribute('aria-labelledby', tab.id);
    });
  }
  $('#langToggle').addEventListener('click', () => applyLanguage(lang === 'vi' ? 'en' : 'vi'));
  $$('.skill-tab').forEach(tab => tab.addEventListener('click', () => applySkills(tab.dataset.skill)));
  $('.skill-tabs').addEventListener('keydown', (event) => {
    if (!['ArrowRight','ArrowLeft','Home','End'].includes(event.key)) return;
    event.preventDefault();
    const tabs = $$('.skill-tab'); const current = tabs.findIndex(el => el.dataset.skill === activeSkill);
    const index = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length-1 : (current+(event.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;
    tabs[index].focus();applySkills(tabs[index].dataset.skill);
  });
  applyLanguage(lang);

  const themeToggle = $('#themeToggle');
  let dawn = storage.get('portfolio-theme') === 'dawn';
  function updateTheme() {
    document.body.classList.toggle('dawn-mode', dawn);
    themeToggle.setAttribute('aria-pressed', String(dawn));
    themeToggle.setAttribute('title', dawn ? 'Chuyển về giao diện đêm / Night mode' : 'Chuyển sang giao diện hoàng hôn / Dawn mode');
    storage.set('portfolio-theme', dawn ? 'dawn':'night');
  }
  updateTheme();
  themeToggle.addEventListener('click', () => {dawn=!dawn;updateTheme();});

  /* Intro: cinematic opening with accessible skip and automatic entry. */
  const intro = $('#intro');
  const start = $('#startExperience');
  let introDismissed = false;
  function dismissIntro() {
    if (introDismissed) return;
    introDismissed = true;
    intro.classList.add('is-exiting');
    intro.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('intro-open');
    window.setTimeout(() => {intro.hidden = true;}, reduceMotion ? 40 : 1000);
  }
  document.body.classList.add('intro-open');
  start.addEventListener('click', dismissIntro);
  document.addEventListener('keydown', e => {
    if (!introDismissed && (e.key === 'Escape' || e.key === 'Enter') && e.target !== $('#langToggle')) dismissIntro();
  });
  if (location.hash && location.hash !== '#top') dismissIntro();
  else window.setTimeout(dismissIntro, reduceMotion ? 250 : 3000);

  /* Progressive reveal with a plain HTML / reduced motion fallback. */
  const revealed = $$('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {if (entry.isIntersecting) {entry.target.classList.add('is-visible');io.unobserve(entry.target);}});
    }, {rootMargin:'0px 0px -45px 0px',threshold:.08});
    revealed.forEach(el => io.observe(el));
  } else revealed.forEach(el => el.classList.add('is-visible'));

  /* Scrolling navbar, progress marker, and restrained illustration parallax. */
  const header = $('#siteHeader'); const progress = $('#scrollProgress');
  const navLinks = $$('.desktop-nav .nav-link');
  const sections = $$('.section-anchor');
  let scheduled = false;
  function updateScroll() {
    const sc = window.scrollY || document.documentElement.scrollTop;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${max > 0 ? (sc/max)*100 : 0}%`;
    header.classList.toggle('scrolled', sc > 130);
    let section = 'story';
    for (const item of sections) {if (item.getBoundingClientRect().top < window.innerHeight * .39) section = item.id;}
    navLinks.forEach(link => link.classList.toggle('is-active',link.getAttribute('href') === `#${section}`));
    if (!reduceMotion && window.innerWidth > 700 && sc < window.innerHeight * 1.2) {
      const heroScene = $('.hero-scene');
      const avatar = $('.hero-character-wrap');
      if (heroScene) heroScene.style.transform = `scale(1.06) translate3d(0,${Math.min(45,sc*.08)}px,0)`;
      if (avatar) avatar.style.transform = `translate3d(0,${Math.min(46,sc*.12)}px,0)`;
    }
    scheduled = false;
  }
  window.addEventListener('scroll', () => {if (!scheduled){scheduled=true;requestAnimationFrame(updateScroll);}}, {passive:true});
  window.addEventListener('resize', updateScroll,{passive:true});updateScroll();

  /* Mobile menu: click outside and follow a link to close. */
  const menuToggle = $('#menuToggle'); const mobileNav = $('#mobileNav');
  function setMenu(open) {mobileNav.hidden=!open;menuToggle.setAttribute('aria-expanded',String(open));}
  menuToggle.addEventListener('click', () => setMenu(mobileNav.hidden));
  $$('a',mobileNav).forEach(a => a.addEventListener('click',()=>setMenu(false)));
  document.addEventListener('click',e=>{if (!mobileNav.hidden && !mobileNav.contains(e.target) && !menuToggle.contains(e.target)) setMenu(false);});
  document.addEventListener('keydown',e=>{if (e.key==='Escape' && !mobileNav.hidden) setMenu(false);});

  /* Project cards have a genuinely functional detail view (no dead CTAs). */
  const dialog = document.createElement('dialog');dialog.className='project-dialog';
  dialog.innerHTML = '<button type="button" class="dialog-close" aria-label="Đóng / Close">×</button><div class="dialog-inner"><p class="dialog-eyebrow">SELECTED WORLD / <span id="dialogNumber"></span></p><h2 id="dialogTitle"></h2><h3 id="dialogLead"></h3><p id="dialogDescription"></p><ul id="dialogItems"></ul><p class="dialog-note" id="dialogNote"></p></div>';
  document.body.append(dialog);
  const dialogCss = document.createElement('style');
  dialogCss.textContent = `.project-dialog{border:1px solid #f5c8dc72;border-radius:11px;padding:0;width:min(550px,calc(100% - 30px));max-height:85svh;overflow:auto;background:linear-gradient(155deg,#55406e,#201f3a);color:#fff5f4;box-shadow:0 30px 130px #100d28d9}.project-dialog::backdrop{background:#140e25cb;backdrop-filter:blur(8px)}.dialog-close{position:absolute;right:18px;top:13px;border:1px solid #ffffff63;background:#ffffff15;border-radius:50%;width:36px;height:36px;font-size:25px}.dialog-inner{padding:54px 40px 37px}.dialog-eyebrow{font:700 10px Outfit,sans-serif;letter-spacing:2px;color:#f7becf}.dialog-inner h2{font:700 37px/1.2 Outfit,'Be Vietnam Pro',sans-serif;margin:20px 0 13px}.dialog-inner h3{font-size:15px;color:#f8c8db}.dialog-inner p,.dialog-inner li{font-size:13px;line-height:1.9;color:#e3d4e7}.dialog-inner ul{padding-left:23px}.dialog-inner li::marker{color:#ffd3ac}.dialog-inner .dialog-note{color:#c7b2d2;font-size:11px;margin-top:26px;border-top:1px solid #fff3;padding-top:17px}@media(max-width:600px){.dialog-inner{padding:53px 24px 22px}.dialog-inner h2{font-size:29px}}`;
  document.head.append(dialogCss);
  let previouslyFocused = null;
  function openProject(index){
    const data=projectDetail[lang][index];previouslyFocused=document.activeElement;
    $('#dialogNumber').textContent = String(index+1).padStart(3,'0');
    $('#dialogTitle').textContent=data.title;
    $('#dialogLead').textContent=data.lead;
    $('#dialogDescription').textContent=data.description;
    $('#dialogNote').textContent=data.note;
    $('#dialogItems').replaceChildren();
    data.items.forEach(item=>{const li=document.createElement('li');li.textContent=item;$('#dialogItems').append(li);});
    dialog.showModal();$('.dialog-close',dialog).focus();
  }
  $$('.project-card').forEach((card,index)=>{
    card.setAttribute('role','button');
    card.setAttribute('aria-label',lang==='en'?'Open project details':'Xem chi tiết nhóm công việc');
    card.addEventListener('click',()=>openProject(index));
    card.addEventListener('keydown',e=>{if (e.key==='Enter'||e.key===' '){e.preventDefault();openProject(index);}});
  });
  $('.dialog-close',dialog).addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
  dialog.addEventListener('close',()=>previouslyFocused?.focus());

  $('#currentYear').textContent = new Date().getFullYear();
})();
