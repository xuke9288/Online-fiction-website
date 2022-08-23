var swiper = new Swiper(".main-banner", {
  autoplay: {
    pauseOnMouseEnter: true,
    disableOnInteraction:false
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".hot-banner", {
  autoplay: {
    pauseOnMouseEnter: true,
    disableOnInteraction:false
  },
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

  // 获取导航栏的选项li
  let lis = document.querySelectorAll('.lis li')
  // 获取内容区块div
  let neirongs = document.querySelectorAll('.neirong')
  // 循环遍历添加点击事件
  for (let i = 0; i < lis.length; i++) {
      lis[i].addEventListener('click', function () {
          document.querySelector('.lis .active').classList.remove('active')
          this.classList.add('active')
          document.documentElement.scrollTop = neirongs[i].offsetTop
      })
  }