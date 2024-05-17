document.addEventListener("DOMContentLoaded", (e) => {
  gsap.registerPlugin(ScrollTrigger);

  const mainAnim = document.querySelector(".hero-section .main-anim");
  const rects = document.querySelectorAll(".hero-section .rect");
  const items = document.querySelectorAll(".hero-section .rect .item");
  const itemPlaceholder = document.querySelector(
    ".hero-section .item-placeholder",
  );
  const itemsPlaceholderBoundingClientRect =
    itemPlaceholder.getBoundingClientRect();

  const tl1 = gsap.timeline();
  // tl1.delay(1);
  tl1
    .to(".hero-section .main-anim .logo", {
      opacity: 1,
      scale: 1,
      duration: 2,
      ease: "elastic.out(1, 0.7)",
    })
    .from(
      ".hero-section .rect .item",
      {
        z: 800,
        stagger: 0.1,
        duration: 2,
        ease: "elastic.out(1, 0.7)",
        onComplete: () => {
          gsap.to(mainAnim, {
            x:
              itemsPlaceholderBoundingClientRect.x +
              itemsPlaceholderBoundingClientRect.width / 2,
            y:
              itemsPlaceholderBoundingClientRect.y +
              itemsPlaceholderBoundingClientRect.height,
            top: 0,
            left: 0,
          });

          gsap
            .timeline({ delay: 0.3 })
            .to(
              ".hero-section .text .heading, .hero-section .text .content, .hero-section .text .button",
              {
                opacity: 1,
                y: 0,
                scale: 1,
                stagger: 0.2,
              },
            );

          rects.forEach((rect) => {
            rect.classList.add("rotate");
          });
          items.forEach((item) => {
            item.classList.add("rotate");
          });
        },
      },
      "<50%",
    );

  // .to(".rect:nth-child(1)", {
  //   rotateY: 360,
  //   duration: 10,
  //   transformOrigin: "center bottom",
  // });
});
