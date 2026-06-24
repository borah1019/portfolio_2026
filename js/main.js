gsap.registerPlugin(ScrollTrigger);

// ABOUT - fade_up
gsap.from('#main .title .title_fu', {
  y: 100,
  opacity: 0,
  duration: 0.5,
  stagger: 0.1,
  scrollTrigger: {
    trigger: '#main .title_fu',
    toggleActions: 'play none play reverse'
  }
});

gsap.utils.toArray('#main .fu:not(#main .title_fu)').forEach(el => {
  gsap.from(el, {
    y: 100,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
      trigger: el,
      start: 'top bottom',
      toggleActions: 'play none play reverse'
    }
  });
});

// ABOUT - projects_image
const flow = document.querySelector('#main .projects_image_wrap .projects_image');


if (flow) {
  const tween = gsap.to(flow, {
    x: '-150vw',
    ease: 'none',
    duration: 16,
    repeat: -1
  });

flow.addEventListener('mouseenter', () => tween.pause());
flow.addEventListener('mouseleave', () => tween.resume());
}

// PROJECTS - categories

const categories = document.querySelectorAll('#main .categories button');
const thumbnailProjects = document.querySelectorAll('#main .thumbnail .projects');
const thumbnailProjectLists = document.querySelectorAll('#main .thumbnail .projects li');
const detailProjects = document.querySelectorAll('#main .detail .projects li.project_wrap');

function updateThumbnailHeight() {
  const activeProject = document.querySelector('#main .thumbnail .projects.active');

  document.querySelector('#main .thumbnail').style.height = activeProject.offsetHeight + 'px';
}

window.addEventListener('load', updateThumbnailHeight);

categories.forEach((category, index) => {
  category.addEventListener('click', () => {
    // index 저장
    location.hash = category.classList[0];

    // category color
    categories.forEach(category => {
      category.classList.remove('active');
    });
    document.querySelector(`#main .categories button.ct0${index+1}`).classList.add('active');
    
    // 모든 thumbnail 숨김
    thumbnailProjects.forEach(thumbnailProject => {
      thumbnailProject.classList.remove('active');
    });
    
    // 선택한 thumbnail 표시
    document.querySelector(`#main .thumbnail .projects.ct0${index+1}`).classList.add('active');

    // 선택한 thumbnail 높이 설정
    updateThumbnailHeight();
  })
})

// PROJECTS - category index 적용
window.addEventListener('load', () => {
  const activeNum = location.hash.replace('#', '') || 'ct01';

  categories.forEach(category => {
    category.classList.remove('active');
  })
  document.querySelector(`#main .categories .${activeNum}`).classList.add('active');

  thumbnailProjects.forEach(thumbnailProject => {
    thumbnailProject.classList.remove('active');
  });
  document.querySelector(`#main .thumbnail .projects.${activeNum}`).classList.add('active');

  const activeProjectHeight = document.querySelector(`#main .thumbnail .projects.${activeNum}`);

  document.querySelector('#main .thumbnail').style.height = activeProjectHeight.offsetHeight + 'px';
})
