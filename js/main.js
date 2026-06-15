// gsap.registerPlugin(ScrollTrigger);


const categories = document.querySelectorAll('#main .categories button');
const thumbnailProjects = document.querySelectorAll('#main .thumbnail .projects');
const thumbnailProjectLists = document.querySelectorAll('#main .thumbnail .projects li');
const detailProjects = document.querySelectorAll('#main .detail .projects li.project_wrap');

// categories

categories.forEach((category, index) => {
  category.addEventListener('click', () => {
    // category color
    categories.forEach(category => {
      category.classList.remove('active');
    });
    document.querySelector(`#main .categories button.ct0${index+1}`).classList.add('active');
    
    // 모든 thumbnail 숨김
    thumbnailProjects.forEach(thumbnailProject => {
      thumbnailProject.style.opacity = '0';

      // active
      thumbnailProject.classList.remove('active');
      // console.log(thumbnailProject);
    });
    
    // 선택한 thumbnail 표시
    // console.log(document.querySelector(`#main .thumbnail .projects.ct0${index+1}`));
    document.querySelector(`#main .thumbnail .projects.ct0${index+1}`).style.opacity = '100';
    document.querySelector(`#main .thumbnail .projects.ct0${index+1}`).classList.add('active');
  })
})



// detail

// detail 열기
thumbnailProjectLists.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    // scroll top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // 모든 thumbnail 숨김
    thumbnailProjects.forEach(thumbnailProject => {
      thumbnailProject.style.display = 'none';
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
  detail.querySelector('.btn_close').addEventListener('click', () => {
    // 모든 thumbnail 표시
    thumbnailProjects.forEach(thumbnailProject => {
      thumbnailProject.style.display = 'flex';
    });
    
    // 모든 detail 숨김
    detailProjects.forEach((detail) => {
      detail.parentElement.style.display = 'none';
    });
  })
});