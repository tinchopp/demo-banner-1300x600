const banner = document.getElementById('banner');

const tl = gsap.timeline();

tl.from('.product', {
  duration: 0.8,
  opacity: 0,
  scale: 0.82,
  stagger: 0.035,
  ease: 'back.out(1.3)'
})
.from(
  '.logo',
  {
    duration: 0.6,
    y: -20,
    opacity: 0,
    ease: 'power2.out'
  },
  '-=0.6'
)
.from(
  '.cta',
  {
    duration: 0.5,
    scale: 0.85,
    opacity: 0,
    ease: 'back.out(1.7)'
  },
  '-=0.4'
);

gsap.utils.toArray('.product').forEach((item, index) => {
  const moveY = index % 2 === 0 ? -9 : 9;
  const moveRot = index % 2 === 0 ? '+=2' : '-=2';

  gsap.to(item, {
    y: moveY,
    rotation: moveRot,
    duration: 2 + index * 0.06,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  });
});

banner.addEventListener('click', () => {
  window.open(clickTag, '_blank');
});