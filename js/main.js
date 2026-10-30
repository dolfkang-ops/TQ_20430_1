/**
 * THE SUNSET CAMPING - Main JavaScript (Enhanced & Robust)
 * Interactive controls for sliders, modals, navigation & animations
 */

document.addEventListener('DOMContentLoaded', function () {
  // 1. Header scroll effect
  const header = document.querySelector('.hsec1');
  const gotopBtn = document.querySelector('.quick_item.gotop');

  function handleScroll() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollY > 40) {
      if (header && !header.classList.contains('scrolled')) {
        header.classList.add('scrolled');
      }
    } else {
      if (header && header.classList.contains('scrolled')) {
        header.classList.remove('scrolled');
      }
    }

    if (scrollY > 350) {
      if (gotopBtn) gotopBtn.classList.add('active');
    } else {
      if (gotopBtn) gotopBtn.classList.remove('active');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // 2. Main Hero Swiper Slider (.msec1)
  const heroSlider = new Swiper('.msec1 .swiper', {
    loop: true,
    speed: 1200,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.msec1 .swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.msec1 .swiper-button-next',
      prevEl: '.msec1 .swiper-button-prev'
    },
    observer: true,
    observeParents: true,
    on: {
      init: function () {
        const msec1 = document.querySelector('.msec1');
        if (msec1) msec1.classList.add('on');
      }
    }
  });

  // 3. Showroom Facility Slider (.c-showroom)
  const showroomSlider = new Swiper('.c-showroom__con .swiper', {
    slidesPerView: 1.15,
    spaceBetween: 20,
    speed: 600,
    loop: true,
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: '.c-showroom__btn .swiper-next',
      prevEl: '.c-showroom__btn .swiper-prev'
    },
    pagination: {
      el: '.c-showroom__btn .swiper-page',
      type: 'fraction'
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 24
      },
      1025: {
        slidesPerView: 2.8,
        spaceBetween: 28
      }
    }
  });

  // 4. Mobile Navigation Drawer
  const mobileOpenBtn = document.querySelector('.lnbG_open');
  const mobileCloseBtn = document.querySelector('.lnbG .close');
  const mobileNav = document.querySelector('.lnbG');
  const mobileBg = document.querySelector('.lnbG_bg');

  function openMobileNav() {
    if (mobileNav) mobileNav.classList.add('open');
    if (mobileBg) mobileBg.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    if (mobileNav) mobileNav.classList.remove('open');
    if (mobileBg) mobileBg.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (mobileOpenBtn) mobileOpenBtn.addEventListener('click', openMobileNav);
  if (mobileCloseBtn) mobileCloseBtn.addEventListener('click', closeMobileNav);
  if (mobileBg) mobileBg.addEventListener('click', closeMobileNav);

  // Mobile submenu accordions
  const mobileMenuItems = document.querySelectorAll('.hsec1 .menu > li');
  mobileMenuItems.forEach(item => {
    const link = item.querySelector('a');
    const sub = item.querySelector('.sub');
    if (sub) {
      link.addEventListener('click', function (e) {
        if (window.innerWidth <= 1024) {
          const href = link.getAttribute('href');
          if (!href || href === '#' || href.startsWith('javascript')) {
            e.preventDefault();
          }
          if (item.classList.contains('active')) {
            item.classList.remove('active');
          } else {
            mobileMenuItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
          }
        }
      });
    }
  });

  // 5. Gotop button click
  if (gotopBtn) {
    gotopBtn.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 6. Site Details Modal System
  const siteData = {
    'A': {
      title: 'A구역 (노을 1열 오션뷰 사이트)',
      sub: 'A1 ~ A10 (총 10면 / 파쇄석 8m × 9m)',
      desc: '텐트 문을 열자마자 눈앞에 남당항의 푸른 서해바다와 환상적인 낙조가 펼쳐지는 더선셋의 대표 명당 구역입니다. 바로 앞 탁 트인 바다 전망을 온전히 누릴 수 있어 예약 인기가 가장 높습니다.',
      features: ['바다 바로 앞 1열 배치', '초고속 개별 600W 전기', '대형 거실형 텐트 피칭 가능', '차량 사이트 내 주차'],
      price: '주중 50,000원 / 주말 60,000원'
    },
    'B': {
      title: 'B & C구역 (오션 파노라마 파쇄석)',
      sub: 'B1~B12, C1~C10 (총 22면 / 파쇄석 8m × 8m)',
      desc: '넓은 시야로 서해 일몰과 바다를 여유롭게 조망할 수 있는 쾌적한 힐링 사이트입니다. 부대시설(개수대, 온수 샤워실, 매점)과의 접근 동선이 가장 이상적인 균형 잡힌 명품 사이트입니다.',
      features: ['탁 트인 오션 파노라마 뷰', '화장실·샤워실 인접 동선', '고급 쇄석 마감', '사이트 바로 옆 주차 가능'],
      price: '주중 45,000원 / 주말 55,000원'
    },
    'D': {
      title: 'D구역 (프리미엄 우드 데크)',
      sub: 'D1 ~ D6 (총 6면 / 프리미엄 데크 6m × 7m)',
      desc: '지면 습기와 한기로부터 자유로운 프리미엄 원목 데크 사이트입니다. 깔끔하고 쾌적한 캠핑을 선호하시는 감성 캠퍼 및 초보 캠퍼님들에게 강력히 추천하는 구역입니다.',
      features: ['평탄화 원목 대형 데크', '오징어 팩 호환 설계', '오션뷰 조망 데크', '독립적인 여유 공간'],
      price: '주중 50,000원 / 주말 60,000원'
    },
    'E': {
      title: 'E구역 (반려견 동반 전용 펫 프렌들리)',
      sub: 'E1 ~ E6 (총 6면 / 파쇄석 8m × 8m)',
      desc: '사랑하는 반려견과 함께 서해 바다의 아름다운 노을을 즐길 수 있는 전용 힐링 구역입니다. 안전을 위해 10kg 미만 반려견 동반이 가능하며 타 사이트와 분리되어 있어 편안합니다.',
      features: ['오직 E구역만 반려견 동반 가능', '안전 리드줄 착용 필수', '펫 매너 준수 구역', '넓은 사이트 간격'],
      price: '주중 50,000원 / 주말 60,000원 (반려견 1마리 포함)'
    },
    'F': {
      title: 'F & P구역 (차박·카라반·캠핑카 전용)',
      sub: 'F1~F4, P1~P2 (총 6면 / 광폭 사이트 9m × 10m)',
      desc: '모터홈, 트레일러, 카라반, 루프탑 차박 캠퍼님들을 위한 광폭 규격 사이트입니다. 진입로가 넓고 평탄하여 대형 차량도 안전하고 편리하게 진입 및 피칭할 수 있습니다.',
      features: ['대형 카라반·모터홈 전용 규격', '차량 진출입 최적화 동선', '고용량 분전함 완비', '차박 도킹 텐트 설치 완비'],
      price: '주중 55,000원 / 주말 65,000원'
    }
  };

  const modalOverlay = document.getElementById('siteModal');
  const modalBody = document.getElementById('siteModalBody');
  const modalClose = document.getElementById('siteModalClose');

  window.openSiteModal = function (siteKey) {
    const data = siteData[siteKey];
    if (!data || !modalOverlay) return;

    modalBody.innerHTML = `
      <div style="padding: 35px 28px;">
        <span style="display:inline-block; font-family: var(--tit-font); color: var(--main-color); font-weight:700; font-size:14px; letter-spacing:2px; margin-bottom:8px;">THE SUNSET SITES</span>
        <h3 style="font-size:26px; font-weight:700; color:var(--dark-color); margin-bottom:6px;">${data.title}</h3>
        <p style="font-size:15px; color:var(--text-mid); font-weight:500; margin-bottom:20px;">${data.sub}</p>
        
        <div style="background:var(--bg-light); padding:20px; border-radius:12px; margin-bottom:24px; border:1px solid var(--border-color);">
          <p style="font-size:15px; color:#444; line-height:1.75;">${data.desc}</p>
        </div>

        <h4 style="font-size:16px; font-weight:700; color:var(--dark-color); margin-bottom:12px;">구역 주요 특장점</h4>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:24px;">
          ${data.features.map(f => `
            <div style="display:flex; align-items:center; gap:8px; font-size:14px; color:#333;">
              <i class="fa-solid fa-check" style="color:var(--main-color);"></i>
              <span>${f}</span>
            </div>
          `).join('')}
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; padding-top:20px; border-top:1px solid var(--border-color); flex-wrap:wrap; gap:16px;">
          <div>
            <span style="font-size:13px; color:var(--text-light);">이용 요금 (1박 기준)</span>
            <div style="font-size:18px; font-weight:700; color:var(--dark-color);">${data.price}</div>
          </div>
          <a href="https://m.thankqcamping.com/resv/view.hbb?cseq=20430" target="_blank" style="padding:12px 28px; background:var(--main-color); color:#fff; font-size:15px; font-weight:600; border-radius:30px; display:inline-flex; align-items:center; gap:8px;">
            <span>땡큐캠핑 실시간 예약</span>
            <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    `;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.closeSiteModal = function () {
    if (modalOverlay) modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (modalClose) modalClose.addEventListener('click', closeSiteModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', function (e) {
      if (e.target === modalOverlay) closeSiteModal();
    });
  }

  // 7. Camp Map Modal
  const mapModal = document.getElementById('mapModal');
  const mapModalClose = document.getElementById('mapModalClose');

  window.openMapModal = function () {
    if (mapModal) {
      mapModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  window.closeMapModal = function () {
    if (mapModal) {
      mapModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  if (mapModalClose) mapModalClose.addEventListener('click', closeMapModal);
  if (mapModal) {
    mapModal.addEventListener('click', function (e) {
      if (e.target === mapModal) closeMapModal();
    });
  }

  // 8. ESC key closes modals
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeSiteModal();
      closeMapModal();
      closeMobileNav();
    }
  });

  // 9. Smooth scrolling for internal anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '#none') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        closeMobileNav();
        const headerOffset = 75;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // 10. AOS init
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50
    });
  }
});
