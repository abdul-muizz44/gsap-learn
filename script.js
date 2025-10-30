gsap.to("body #box1", {
  x: 300,
  delay: 0,
  duration: 1.5,
  backgroundColor: "green",
  borderRadius: "50%",
  scale: 0.5,
  yoyo: true,
  repeat: -1,
});

gsap.from("body #box2", {
  x: 300,
  delay: 0,
  duration: 1.5,
  rotate: 90,
  backgroundColor: "blue",
  borderRadius: "50%",
  repeat: -1,
  yoyo: true,
});

gsap.from(".container h1", {
  duration: 1,
  y: 20,
  opacity: 0,
  stagger: 0.3,
  repeat: -1,
  yoyo: true,
});

let tl = gsap.timeline();

tl.to("#boxA", {
  x: 500,
  duration: 1,
  repeat: -1,
  yoyo: true,
});

tl.to("#boxB", {
  x: 500,
  duration: 1.5,
  repeat: -1,
  yoyo: true,
});

tl.to("#boxC", {
  x: 500,
  duration: 2,
  yoyo: true,
  repeat: -1,
});

let tex = gsap.timeline();

tex.to("#text1", {
  duration: 1,
  x: 20,
  opacity: 0,
  repeat: -1,
  yoyo: true,
});

tex.to("#text2", {
  duration: 1,
  x: 20,
  opacity: 0,
  repeat: -1,
  yoyo: true,
});

tex.to("#text3", {
  duration: 1,
  x: 500,
  opacity: 0,
  repeat: -1,
  yoyo: true,
});

gsap.from("#page1 #box", {
  scale: 0,
  delay: 1,
  duration: 2,
  rotate: 360,
});

gsap.from("#page2 #box", {
  scale: 0,
  duration: 2,
  rotate: 360,
  scrollTrigger: {
    trigger: "#page2 #box",
    scroller: "body",
    markers: true,
    start: "top 90%",
    end: "top 10%",
    scrub: 2,
    pin: true,
  },
});

gsap.from("#page3 #box", {
  scale: 0,
  delay: 1,
  duration: 2,
  rotate: 360,
});

gsap.to("#abcd h1", {
  x: "-350%",
  scrollTrigger: {
    trigger: "#abcd",
    scroller: "body",
    pin: true,
    scrub: 2,
    markers: true,
    start: "top 0%",
    end: "top -200%",
  },
});
