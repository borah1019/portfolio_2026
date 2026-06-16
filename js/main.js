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
