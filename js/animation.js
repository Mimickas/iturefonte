gsap.to(".box", {
  x: 300,
  duration: 2,
  ease: "power3.out"
});

const containerHero = document.getElementById("container-hero");

gsap.to(containerHero, {
  scale: 0.96,
  opacity: 0.96,
  scrollTrigger: {
    trigger: containerHero,
    start: "center center", // quand le top de l'élément atteint le centre de l'écran
    end: "bottom 20%",   // quand le bottom de l'élément atteint le top de l'écran
    scrub: true,         // animation liée au scroll
  }
});