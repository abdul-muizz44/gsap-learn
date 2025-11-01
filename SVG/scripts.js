var initialPath = `M 0 100 Q 250 100 500 100`;
var finalPath = `M 0 100 Q 250 100 500 100`;
var string = document.querySelector("#string");

string.addEventListener("mousemove", (e) => {
  path = `M 0 100 Q ${e.x} ${e.y} 500 100`;

  gsap.to("svg path", {
    attr: { d: path },
    duration: 0.2,
    ease: "power3.out",
    scrub: 2,
  });
});

string.addEventListener("mouseleave", () => {
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 1.5,
    ease: "elastic.out(1,0.2)",
  });
});
