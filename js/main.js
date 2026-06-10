// gsap.registerPlugin(ScrollTrigger);

/* HEADER */
const categories = document.querySelectorAll('#main .categories');
const thumbnails = document.querySelectorAll('#main .thumbnail');
const thumbnailProjects = document.querySelectorAll('#main .thumbnail .projects li');
const detailProjects = document.querySelectorAll('#main .detail .projects li.project_wrap');

// detail 열기
thumbnailProjects.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    // scroll top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // 모든 thumbnail 숨김
    thumbnails.forEach(thumbnail => {
      thumbnail.style.display = 'none';
    });
    
    // 모든 detail 숨김
    detailProjects.forEach((detail) => {
      detail.style.display = 'none';
    });
    
    // 선택한 detail 표시
    detailProjects[index].parentElement.style.display = 'block';
    detailProjects[index].style.display = 'flex';
  })
});

// detail 닫기
detailProjects.forEach((detail) => {
  console.log(detail.querySelector('.btn_close'))
  detail.querySelector('.btn_close').addEventListener('click', () => {
    // 모든 thumbnail 표시
    thumbnails.forEach(thumbnail => {
      thumbnail.style.display = 'flex';
    });
    
    // 모든 detail 숨김
    detailProjects.forEach((detail) => {
      detail.parentElement.style.display = 'none';
    });
  })
});