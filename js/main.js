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

  // 4. Mobile Navigation Drawer (Crisp, High-Z-Index Standalone System)
  const mobileOpenBtn = document.getElementById('mobileDrawerOpenBtn') || document.querySelector('.lnbG_open');
  const mobileCloseBtn = document.getElementById('mobileDrawerCloseBtn') || document.querySelector('.mobile-drawer-close');
  const mobileNav = document.getElementById('mobileDrawer') || document.querySelector('.mobile-drawer');
  const mobileOverlay = document.getElementById('mobileDrawerOverlay') || document.querySelector('.mobile-drawer-overlay');

  function openMobileNav() {
    if (mobileNav) mobileNav.classList.add('open');
    if (mobileOverlay) mobileOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    if (mobileNav) mobileNav.classList.remove('open');
    if (mobileOverlay) mobileOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Make globally available for inline onclick handlers
  window.openMobileNav = openMobileNav;
  window.closeMobileNav = closeMobileNav;

  if (mobileOpenBtn) {
    mobileOpenBtn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      openMobileNav();
    });
  }

  if (mobileCloseBtn) {
    mobileCloseBtn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      closeMobileNav();
    });
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', function (e) {
      e.preventDefault();
      closeMobileNav();
    });
  }

  // Mobile Submenu Accordions
  const accordionItems = document.querySelectorAll('.mobile-menu-list .m-menu-item.has-sub');
  accordionItems.forEach(item => {
    const link = item.querySelector('.m-menu-link');
    if (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        const isOpen = item.classList.contains('active');
        accordionItems.forEach(i => i.classList.remove('active'));
        if (!isOpen) {
          item.classList.add('active');
        }
      });
    }
  });

  // Close drawer when an anchor link is clicked inside mobile drawer
  const drawerSubLinks = document.querySelectorAll('.mobile-drawer a');
  drawerSubLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      // If it's an internal anchor link
      if (href && href.startsWith('#') && href.length > 1) {
        e.preventDefault();
        closeMobileNav();
        const targetElement = document.querySelector(href);
        if (targetElement) {
          setTimeout(() => {
            const headerHeight = 70;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }, 200);
        }
      }
    });
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

  // 8. Notice Detail Modal System (공지사항 & 운영정책 팝업 - 땡큐캠핑 실제 등록 공지 완벽 연동)
  const noticeData = {
    1: {
      badge: '필독',
      badgeClass: 'req',
      date: '2026.10.16',
      category: '반려동물 동반 운영정책',
      title: '더선셋 캠핑장 반려동물 동반 이용에 관한 안내 말씀',
      summary: '최근 E 사이트 외 반려동물 동반 불가 구역에서 반려견과 함께 입실하시거나 산책하시는 사례가 확인되어, 모두가 안전하고 쾌적한 캠핑을 즐기실 수 있도록 안내드립니다.',
      sections: [
        {
          title: '반려동물 동반 이용 구역 안내',
          items: [
            '<strong>동반 가능 구역</strong>: 오직 <strong>E 사이트 (E1~E6)</strong>만 가능 (E 사이트 내에서만 머물러 주시길 바랍니다.)',
            '<strong>동반 불가 구역</strong>: <strong>A, B, C, D, F, G, H, P 사이트 (그 외 전 사이트 동반 절대 불가)</strong>'
          ]
        },
        {
          title: '필수 협조 및 주의사항',
          items: [
            '예약 시 동의해 주신 바와 같이, <strong>E 사이트를 제외한 모든 구역은 리드줄을 착용하시더라도 반려동물과의 출입 및 산책이 엄격히 제한</strong>됩니다.',
            'E 사이트 외 구역에 무단 동반 입실 시 <strong>환불 없이 즉시 퇴실 조치</strong>될 수밖에 없사오니 적극적인 협조를 부탁드립니다.',
            '반려동물 동반 캠퍼님과 일반 캠퍼님 모두가 서로를 배려하며 행복한 시간을 보내실 수 있도록 협조 부탁드립니다.'
          ]
        }
      ]
    },
    2: {
      badge: '소식',
      badgeClass: 'info',
      date: '2026.10.15',
      category: '시즌 특별 장박 안내',
      title: '더선셋 캠핑장 2026–2027 동계 장박 예약 안내',
      summary: '서해 남당항의 아름다운 겨울 노을과 함께하는 특별한 감성 캠핑! 더선셋 캠핑장에서 2026–2027 동계 장박 예약을 시작합니다.',
      sections: [
        {
          title: '장박 운영 기간 및 이용 요일',
          items: [
            '<strong>운영 기간</strong>: 2026년 12월 1일 ~ 2027년 3월 31일',
            '<strong>이용 요일</strong>: 금요일 ~ 일요일 및 공휴일 (금, 토 입실 기준 주말만 이용 가능 / 크리스마스·설날 공휴일 이용 가능)',
            '<strong>입·퇴실 시간</strong>: 입실 금/토 12시 이후 ~ 퇴실 일요일 오후 3시까지 (주말 1박2일 또는 2박3일 선택 이용, 평일 상시 거주 불가)'
          ]
        },
        {
          title: '장박 대상 사이트 및 신청 문의',
          items: [
            '<strong>H사이트 (H-1 ~ H-6)</strong>: 일반 텐트 전용 (2개월 / 3개월 / 4개월 계약)',
            '<strong>A-5, A-12 사이트</strong>: 일반 텐트 및 캠핑카·카라반·트레일러 가능 (2개월 / 3개월 / 4개월 계약)',
            '<strong>이용 요금 및 접수 문의</strong>: <strong>010-7907-5587</strong> 로 문의 부탁드립니다.'
          ]
        },
        {
          title: '동계 장박 필수 안전 수칙',
          items: [
            '<strong>강풍 대비</strong>: 40cm 이상 장팩 사용 필수, 스트링 2중 고정 및 퇴실 시 타프·어닝 안전 조치',
            '<strong>적설 관리</strong>: 대설 특보 시 사전 안내하며, 텐트 위 적설 및 제설 작업은 이용객 직접 관리',
            '<strong>전기 및 난방 안전</strong>: 사이트당 최대 600W, 고전력 전기히터·인덕션 금지, 등유·가스난로 사용 시 일산화탄소 경보기 2개 이상 필수'
          ]
        }
      ]
    },
    3: {
      badge: '이벤트',
      badgeClass: 'info',
      date: '2026.10.01',
      category: '할로윈 페스티벌',
      title: '🍂🎃 THE SUNSET CAMPING 2026 HALLOWEEN EVENT 🎃🍂',
      summary: '선선한 가을바람과 서해의 붉은 노을, 그리고 캠핑의 낭만에 할로윈의 즐거움을 더해 2026 더선셋 캠핑장 HALLOWEEN EVENT를 진행합니다.',
      sections: [
        {
          title: '할로윈 주요 프로그램 일정',
          items: [
            '<strong>10.09 – 10.31 | HALLOWEEN 포토존</strong>: 관리동 앞과 정문 옆 산책로 쉼터에 할로윈 포토존 운영',
            '<strong>10.09 – 10.31 매주 토요일 | 베스트 할로윈 텐트 콘테스트</strong>: 개성 있게 꾸민 텐트 선정, 1등~3등 푸짐한 시상품 증정',
            '<strong>10.24 & 10.31 | 어린이 할로윈 코스튬</strong>: 코스튬을 입은 어린이 고객 관리동에서 폴라로이드 즉석사진 촬영 증정',
            '<strong>10.24 & 10.31 | TRICK OR TREAT</strong>: 이웃 텐트와 “Trick or Treat!” 사탕/간식 나누기 & 관리동 사탕 나눔 진행',
            '<strong>10.31 오후 2:30~6:30 | 어린이 페이스 페인팅 (무료)</strong>: 작은 호박, 거미 등 귀여운 할로윈 페이스 페인팅 무료 진행'
          ]
        }
      ]
    },
    4: {
      badge: '소식',
      badgeClass: 'info',
      date: '2026.09.30',
      category: '부대시설 매점 오픈',
      title: '더선셋 캠핑장 매점 오픈 안내',
      summary: '캠퍼님들의 편리한 캠핑을 위해 더선셋 캠핑장 매점을 정식 오픈하였습니다. 신선한 먹거리와 필수 캠핑 용품을 편리하게 만나보세요.',
      sections: [
        {
          title: '매점 주요 판매 품목',
          items: [
            '<strong>캠핑 필수품</strong>: 참나무 장작, 각얼음, 부탄/이소가스, 석쇠, 숯, 일회용품 등',
            '<strong>신선 먹거리</strong>: 제철 남당항 대하, 고소한 홍성 한돈 삼겹살·목살',
            '<strong>음료 및 주류</strong>: 시원한 생수, 탄산음료, 커피, 캔맥주, 소주 등',
            '<strong>스낵류</strong>: 어린이 캠퍼를 위한 과자, 아이스크림, 라면류 등'
          ]
        },
        {
          title: '위치 및 운영 시간',
          items: [
            '<strong>매점 위치</strong>: A관리동 관리실 1층',
            '<strong>운영 시간</strong>: 오전 08:30 ~ 오후 22:00'
          ]
        }
      ]
    },
    5: {
      badge: '안내',
      badgeClass: 'guide',
      date: '2026.09.09',
      category: '정기 위생 & 방역',
      title: '더선셋 캠핑장 정기 방역 & 위생관리 소독 안내',
      summary: '자연 속에서 머무는 시간이 조금 더 쾌적하고 편안할 수 있도록 철저한 정기 방역과 공용시설 소독을 실시하고 있습니다.',
      sections: [
        {
          title: '정기 방역 및 위생 소독 기준',
          items: [
            '<strong>캠핑장 전체 정기 방역</strong>: 매월 1회 전 사이트 및 캠핑장 전 구역 정기 방역 실시',
            '<strong>공용시설 살균 소독</strong>: 주 1회 화장실, 개별 샤워실, 실내 개수대 등 집중 방역 소독',
            '<strong>해충 저감 관리</strong>: 야외 캠핑 특성상 발생할 수 있는 벌레와 해충을 저감하여 안심하고 머무실 수 있도록 꾸준히 관리합니다.'
          ]
        }
      ]
    },
    6: {
      badge: '필독',
      badgeClass: 'req',
      date: '2026.09.03',
      category: '오시는 길 & 진입로 안내',
      title: '더선셋 캠핑장 오시는 길 & 진입로 안내 (승용차 / 대형차량)',
      summary: '내비게이션 목적지 설정에 따라 후문으로 잘못 안내되는 경우가 있어, 안전한 입실을 위한 차종별 진입로를 안내해 드립니다.',
      sections: [
        {
          title: '일반 승용차 진입 (정문)',
          items: [
            '네비게이션에 <strong>"더선셋 갤러리앤커피"</strong>를 목적지로 설정하시면 카페 바로 왼쪽에 캠핑장 정문으로 안전하게 진입하실 수 있습니다.'
          ]
        },
        {
          title: '캠핑카·카라반·트레일러·미니버스 진입 (후문 전용)',
          items: [
            '차체가 큰 대형 차량은 반드시 후문으로만 진입 가능합니다.',
            '네비게이션 검색 시 <strong>"전망이있는곳"</strong>을 목적지로 설정하시면 더선셋 캠핑장 후문으로 바로 안내됩니다.'
          ]
        }
      ]
    },
    7: {
      badge: '혜택',
      badgeClass: 'info',
      date: '2026.08.27',
      category: '상시 웰컴 이벤트',
      title: '[상시혜택] 사이트당 1박에 무료음료 쿠폰 1장 증정',
      summary: '더선셋 캠핑장을 찾아주시는 모든 캠퍼 여러분께 감사의 마음을 담아 1박당 무료 웰컴 드링크 쿠폰을 선물합니다.',
      sections: [
        {
          title: '혜택 상세 안내',
          items: [
            '<strong>대상</strong>: 더선셋 캠핑장 예약 및 방문 고객 전원',
            '<strong>제공 혜택</strong>: 사이트당 1박 기준 무료 음료 쿠폰 1매 증정 (아메리카노 HOT/ICE 또는 복숭아 아이스티)',
            '<strong>수령 장소</strong>: 관리동 체크인 시 예약자 확인 후 실물 쿠폰 수령',
            '<strong>이용 장소</strong>: A관리동 매점 카페테리아 및 더선셋 갤러리앤커피'
          ]
        }
      ]
    },
    8: {
      badge: '필독',
      badgeClass: 'req',
      date: '2026.08.24',
      category: '캠핑장 기본 운영정책',
      title: '더선셋 캠핑장 기본 운영정책 및 예약·이용 수칙',
      summary: '예약 전 캠핑장 운영정책을 꼭 읽어주시기 바라며, 확인 후 동의하시면 예약을 진행해 주시기 바랍니다.',
      sections: [
        {
          title: '예약 및 상담 안내',
          items: [
            '<strong>상담 가능 시간</strong>: 오전 09:00 ~ 오후 18:00 (점심시간 12:00 ~ 13:00)',
            '<strong>예약 방식</strong>: 전화 예약은 불가하며, 땡큐캠핑 온라인 실시간 예약으로만 가능합니다.',
            '<strong>입금 확인</strong>: 온라인 예약 후 1시간 이내 미입금 시 자동 취소되며, 예약자와 입금자명이 반드시 동일해야 합니다.'
          ]
        },
        {
          title: '입실 및 퇴실 시간 엄수',
          items: [
            '<strong>입실 시간</strong>: 14:00 (오후 2시)',
            '<strong>퇴실 시간</strong>: 12:00 (오후 12시)',
            '<strong>입실 마감 시간</strong>: <strong>오후 21:00까지 반드시 입실 완료</strong>하셔야 하며, 22:00까지 모든 텐트 피칭을 완료하셔야 합니다. (오후 9시 이후 야간 입실 불가)',
            '<strong>시간 초과 안내</strong>: 조기 입실 및 늦은 퇴실은 시간당 5,000원 추가금이 발생합니다. (사전 가능 여부 확인 시)'
          ]
        },
        {
          title: '매너타임(Quiet Time) 준수',
          items: [
            '<strong>매너타임 시간</strong>: <strong>22:00 ~ 익일 08:00</strong>',
            '22시 이후 메인 조명 소등 및 음향 기기(블루투스 스피커 등) 사용이 전면 금지됩니다.'
          ]
        }
      ]
    }
  };

  const noticeModal = document.getElementById('noticeModal');
  const noticeModalBody = document.getElementById('noticeModalBody');
  const noticeModalClose = document.getElementById('noticeModalClose');

  window.openNoticeModal = function (id) {
    const data = noticeData[id];
    if (!data || !noticeModal || !noticeModalBody) return;

    const badgeColor = data.badgeClass === 'req' ? '#e74c3c' : 'var(--main-color)';
    const badgeBg = data.badgeClass === 'req' ? '#fdecea' : '#fff3ea';

    let sectionsHtml = '';
    data.sections.forEach(sec => {
      sectionsHtml += `
        <div style="margin-bottom: 22px;">
          <h4 style="font-size: 16px; font-weight: 700; color: var(--dark-color); margin-bottom: 10px; display: flex; align-items: center; gap: 8px;">
            <i class="fa-solid fa-circle-check" style="color: ${badgeColor}; font-size: 15px;"></i>
            <span>${sec.title}</span>
          </h4>
          <ul style="list-style: none; padding-left: 0; margin: 0; display: flex; flex-direction: column; gap: 8px;">
            ${sec.items.map(item => `
              <li style="font-size: 14.5px; color: #444; line-height: 1.65; padding-left: 18px; position: relative;">
                <span style="position: absolute; left: 4px; top: 0; color: #888;">•</span>
                ${item}
              </li>
            `).join('')}
          </ul>
        </div>
      `;
    });

    noticeModalBody.innerHTML = `
      <div style="padding: 34px 28px;">
        <div style="display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 14px; flex-wrap: wrap;">
          <div style="display: flex; align-items: center; gap: 10px;">
            <span style="display: inline-block; padding: 4px 12px; border-radius: 20px; font-size: 12.5px; font-weight: 700; background: ${badgeBg}; color: ${badgeColor}; border: 1px solid ${badgeColor};">${data.badge}</span>
            <span style="font-size: 13.5px; font-weight: 600; color: var(--text-mid);">${data.category}</span>
          </div>
          <span style="font-size: 13px; color: var(--text-light);"><i class="fa-regular fa-calendar-check" style="margin-right: 5px;"></i>${data.date}</span>
        </div>

        <h3 id="noticeModalTitle" style="font-size: 22px; font-weight: 700; color: var(--dark-color); line-height: 1.4; margin-bottom: 16px; letter-spacing: -0.3px;">${data.title}</h3>

        <div style="background: var(--bg-light); border-left: 4px solid ${badgeColor}; padding: 16px 20px; border-radius: 8px; margin-bottom: 24px;">
          <p style="font-size: 14.5px; color: #333; line-height: 1.7; margin: 0; font-weight: 500;">${data.summary}</p>
        </div>

        <div class="notice-sections-wrap">
          ${sectionsHtml}
        </div>

        <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid var(--border-color); display: flex; justify-content: flex-end; align-items: center;">
          <button type="button" onclick="closeNoticeModal()" style="padding: 10px 28px; border-radius: 25px; background: var(--dark-color); color: #fff; font-size: 14.5px; font-weight: 600; border: none; cursor: pointer; transition: opacity 0.2s ease;">
            닫기
          </button>
        </div>
      </div>
    `;

    noticeModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.closeNoticeModal = function () {
    if (noticeModal) {
      noticeModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  if (noticeModalClose) noticeModalClose.addEventListener('click', closeNoticeModal);
  if (noticeModal) {
    noticeModal.addEventListener('click', function (e) {
      if (e.target === noticeModal) closeNoticeModal();
    });
  }

  // 9. ESC key closes all modals
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeSiteModal();
      closeMapModal();
      closeNoticeModal();
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
