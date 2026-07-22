const SITE_CONFIG = {
  registrationUrl: 'https://affiliate.garudaqu.com/',
  whatsappNumber: '6288293528853',
  whatsappMessage: 'Halo Queen, saya ingin konsultasi tentang GMA Affiliate by GarudaQu.',
  explainerVideos: [
    {
      title: 'Video penjelasan GMA 1 - ganti dengan video resmi Anda',
      url: 'https://www.youtube.com/watch?v=VIDEO_ID_GMA_1'
    },
    {
      title: 'Video penjelasan GMA 2 - ganti dengan video resmi Anda',
      url: 'https://www.youtube.com/watch?v=VIDEO_ID_GMA_2'
    }
  ],
  testimonials: [
    {
      name: 'Budi Santoso',
      role: 'Mahasiswa • 19 tahun',
      stars: 5,
      text: 'Saya baru mulai, tapi merasa terbantu karena penjelasannya mudah dipahami dan ada arahan langkah demi langkah dari mentor.',
      highlight: 'Silakan ganti dengan pencapaian / ringkasan hasil',
      videoUrl: 'https://www.youtube.com/watch?v=VIDEO_TESTI_1'
    },
    {
      name: 'Siti Aminah',
      role: 'Ibu Rumah Tangga • 45 tahun',
      stars: 5,
      text: 'Saya senang karena bisa belajar dari rumah menggunakan handphone. Cocok untuk saya yang ingin produktif tanpa harus ribet.',
      highlight: 'Silakan ganti dengan pencapaian / ringkasan hasil',
      videoUrl: 'https://www.youtube.com/watch?v=VIDEO_TESTI_2'
    },
    {
      name: 'Pak Hendra',
      role: 'Karyawan Swasta • 58 tahun',
      stars: 5,
      text: 'Awalnya saya ragu, namun setelah dijelaskan dengan baik saya mulai paham. Sistemnya lebih mudah diikuti daripada yang saya bayangkan.',
      highlight: 'Silakan ganti dengan pencapaian / ringkasan hasil',
      videoUrl: 'https://www.youtube.com/watch?v=VIDEO_TESTI_3'
    },
    {
      name: 'Nina Marlina',
      role: 'Karyawan • 31 tahun',
      stars: 5,
      text: 'Saya mencari tambahan penghasilan yang fleksibel. Yang saya suka, saya bisa menyesuaikan waktu belajar dengan pekerjaan utama.',
      highlight: 'Silakan ganti dengan pencapaian / ringkasan hasil',
      videoUrl: 'https://www.youtube.com/watch?v=VIDEO_TESTI_4'
    },
    {
      name: 'Bu Rahayu',
      role: 'Pensiunan • 63 tahun',
      stars: 5,
      text: 'Saya bukan orang yang terlalu paham teknologi, tetapi tampilannya sederhana dan penjelasannya sabar, jadi saya merasa lebih percaya diri.',
      highlight: 'Silakan ganti dengan pencapaian / ringkasan hasil',
      videoUrl: 'https://www.youtube.com/watch?v=VIDEO_TESTI_5'
    },
    {
      name: 'Dimas Pratama',
      role: 'Anak Muda • 24 tahun',
      stars: 5,
      text: 'Bagi saya yang masih muda, ini menarik karena semuanya bisa dimulai dari handphone dan ada banyak materi yang membantu untuk belajar.',
      highlight: 'Silakan ganti dengan pencapaian / ringkasan hasil',
      videoUrl: 'https://www.youtube.com/watch?v=VIDEO_TESTI_6'
    }
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
          <div class="testimonial-text">“${item.text}”</div>
          <div class="testimonial-highlight">${item.highlight}</div>
          <a class="watch-btn" href="${item.videoUrl}" target="_blank" rel="noopener">Tonton Testimoni</a>
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
  ['heroWhatsapp','gmaWhatsapp','finalWhatsapp','floatingWhatsapp'].forEach((id) => {
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
