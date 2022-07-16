window.addEventListener('scroll', onScroll);

const navigation = document.getElementById('navigation');
const backToTopButton = document.getElementById('backToTopButton');

onScroll();
function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();

  activateMenuAtCurrentSection(services);
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2;

  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;

  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;

  console.log('topo passou da linha?', sectionTopReachOrPassedTargetLine ? 'sim' : '');

  const sectionEndsAt = sectionTop + sectionHeight;

  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id');
  const menuElement = document.querySelector(`.menu a [href*=${sectionId}]`);

  if (sectionBoundaries) {
    menuElement.classList.add()
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 400) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`
  #home,
  #home img,
  #home .stats,
  #services,
  #services header,
  #services .card,
  #about,
  #about header,
  #abour .content`
);
