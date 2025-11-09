var main = document.querySelector("#main");
var courser = document.querySelector("#courser");
var img = document.querySelector("#image");

main.addEventListener("mousemove", (e) => {
  gsap.to(courser, {
    x: e.x - 10,
    y: e.y - 10,
    duration: 0.3,
  });
});

img.addEventListener("mouseenter", () => {
  courser.innerHTML = "view more";
  gsap.to(courser, {
    scale: 4,
    opacity: 0.5,
  });
});

img.addEventListener("mouseleave", () => {
  courser.innerHTML = "";
  gsap.to(courser, {
    scale: 1,
    opacity: 1,
  });
});
