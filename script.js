const SITE_CONFIG = {
  registrationUrl: 'https://affiliate.garudaqu.com/register/AF24695614',
  whatsappNumber: '6288293528853',
  whatsappMessage: 'Halo Queen, saya ingin bertanya tentang GMA Megapro Affiliate.',
  explainerVideos: [
    { title: 'Dr. Robert Sesi 1: Pengenalan GMA Megapro', url: 'https://youtu.be/DtKz2pO7gGI?si=GbzzP8Q90XdfVDYt' },
    { title: 'Dr. Robert Sesi 2: Penjelasan Lanjutan GMA Megapro', url: 'https://youtu.be/gfNHu6XbWK8?si=QpEMwyMNlwWhz2lQ' }
  ],
  testimonials: [
    { name: 'Ibu Hj. Lili Riana', role: 'Pengalaman anggota senior', stars: 5, text: 'Kisah anggota senior yang menunjukkan bahwa program dapat dipelajari oleh berbagai kelompok usia.', highlight: 'Testimoni anggota GMA Megapro', videoUrl: 'https://youtu.be/FDMiipuqbX0?si=f4RYOn-rCpLbksNr' },
    { name: 'Anggota Usia 19 Tahun', role: 'Pengalaman anggota muda', stars: 5, text: 'Cerita anak muda berusia 19 tahun mengenai pengalamannya menjalankan aktivitas di Megapro.', highlight: 'Perspektif generasi muda', videoUrl: 'https://youtu.be/lg4o4nJzMTI?si=xASy8ZhUI1PfN5vv' },
    { name: 'Anggota Muda GMA', role: 'Perjalanan anggota muda', stars: 5, text: 'Pengalaman anggota muda dalam mempelajari sistem dan mengembangkan aktivitas bersama GMA Megapro.', highlight: 'Cerita perjalanan anggota', videoUrl: 'https://youtu.be/kVJrwhWTiMM?si=Xwxy06D7i8O3GZS1' },
    { name: 'Ibu Lidya Sembiring', role: 'Kisah pengalaman finansial', stars: 5, text: 'Testimoni Ibu Lidya Sembiring mengenai perjalanan dan hasil yang ia sampaikan setelah mengikuti Megapro.', highlight: 'Hasil merupakan pengalaman pribadi', videoUrl: 'https://youtu.be/LxuSnRe3iKg?si=6wcnFzxgM_rzCgTE' },
    { name: 'Bapak Chris Sebayang', role: 'Pengalaman anggota GMA', stars: 5, text: 'Bapak Chris Sebayang membagikan pandangan dan pengalamannya selama mengenal program Megapro.', highlight: 'Testimoni langsung anggota', videoUrl: 'https://youtu.be/fxHRCwv78sQ?si=CkEC2JqQ2loSm8MQ' },
    { name: 'Ibu Eni Ernawati', role: 'Pengalaman anggota GMA', stars: 5, text: 'Ibu Eni Ernawati menceritakan pengalamannya mengikuti GMA Megapro Affiliate.', highlight: 'Cerita anggota Megapro', videoUrl: 'https://youtu.be/hYzDeWpPOOs?si=4P3oYEEi0PWZQuMg' }
  ]
};

function buildWhatsAppLink(number, message) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

function getYouTubeId(url = '') {
  const patterns = [
    /(?:youtube\.com\/watch\?v=)([a-zA-Z0-9_-]{6,})/,
    /(?:youtu\.be\/)([a-zA-Z0-9_-]{6,})/,
    /(?:youtube\.com\/embed\/)([a-zA-Z0-9_-]{6,})/
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return '';
}

function applyThumbnail(el, url) {
  const id = getYouTubeId(url);
  if (!id || url.includes('VIDEO_')) return false;
  el.style.backgroundImage = `url(https://img.youtube.com/vi/${id}/hqdefault.jpg)`;
  el.classList.add('has-thumb');
  return true;
}

function renderExplainerVideo() {
  const [video1, video2] = SITE_CONFIG.explainerVideos;
  const preview = document.getElementById('explainerVideoPreview');
  const previewLink = document.getElementById('explainerVideoLink');
  const previewTitle = document.getElementById('explainerVideoTitle');
  const button1 = document.getElementById('explainerVideoButton1');
  const button2 = document.getElementById('explainerVideoButton2');

  previewLink.href = video1.url;
  previewTitle.textContent = video1.title;
  button1.href = video1.url;
  button2.href = video2.url;
  applyThumbnail(preview, video1.url);
}

function renderTestimonials() {
  const grid = document.getElementById('testimonialGrid');
  grid.innerHTML = SITE_CONFIG.testimonials.map((item) => {
    const initials = item.name.split(' ').map((part) => part[0]).slice(0,2).join('').toUpperCase();
    const stars = '★'.repeat(item.stars || 5);
    return `
      <article class="testimonial-card">
        <div class="testimonial-thumb" data-video="${item.videoUrl}">
          <span class="video-chip">Video</span>
          <div class="thumb-overlay">▶</div>
        </div>
        <div class="testimonial-body">
          <div class="person-row">
            <div class="avatar">${initials}</div>
            <div class="person-meta">
              <h3>${item.name}</h3>
              <small>${item.role}</small>
            </div>
          </div>
          <div class="stars" aria-label="${item.stars} bintang">${stars}</div>
          <div class="testimonial-text">${item.text}</div>
          <div class="testimonial-highlight">${item.highlight}</div>
          <a class="watch-btn" href="${item.videoUrl}" target="_blank" rel="noopener">Tonton di YouTube</a>
        </div>
      </article>
    `;
  }).join('');

  document.querySelectorAll('.testimonial-thumb').forEach((thumb) => {
    applyThumbnail(thumb, thumb.dataset.video || '');
  });
}

function initLinks() {
  const waLink = buildWhatsAppLink(SITE_CONFIG.whatsappNumber, SITE_CONFIG.whatsappMessage);
  ['heroWhatsapp'].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.href = waLink;
  });

  const registerLink = document.getElementById('registerLink');
  if (registerLink) {
    registerLink.href = SITE_CONFIG.registrationUrl;
    registerLink.target = '_blank';
    registerLink.rel = 'noopener';
  }
}

initLinks();
renderExplainerVideo();
renderTestimonials();


document.querySelectorAll('section,.card,.testimonial-card').forEach(el=>el.classList.add('reveal'));
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));


function initMobileMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('mainNav');
  if (!toggle || !nav) return;

  const closeMenu = () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('click', (event) => {
    if (!nav.contains(event.target) && !toggle.contains(event.target)) closeMenu();
  });
}

initMobileMenu();
