$(document).ready(function () {
  $(".carousel-container").slick({
    lazyLoad: "ondemand",
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 350,
    dots: true,
    prevArrow:
      " <img src='./assets/arrow.svg'  alt='left-arrow' class='left-arrow'>",
    nextArrow:
      "<img src='./assets/arrow.svg' alt='right-arrow' class='right-arrow'>",
  });
});

const imgElements = document.querySelectorAll("img[data-src]");

const lazyLoadingImage = (entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener("load", () => {
      entry.target.classList.remove("lazy-loading");
      observer.unobserve(entry.target);
    });
  });
};
const lazyLoadingObserver = new IntersectionObserver(lazyLoadingImage, {
  threshold: 0.9,
});
imgElements.forEach((img) => lazyLoadingObserver.observe(img));
