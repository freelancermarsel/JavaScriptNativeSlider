function animatedFunction({ next, prev, items, selector, wrapper, count = 1 }) {
    const nextBtn = document.querySelector(next);
    const prevBtn = document.querySelector(prev);
    const sliderItems = document.querySelectorAll(items);
    const slider = document.querySelector(selector);
    const sliderWrapper = document.querySelector(wrapper);
    let offset = 0;
    slider.style = `transform: translateX(${offset}px)`;

    nextBtn.addEventListener("click", () => {
        if (offset === -(getComputedStyle(slider).width.replace(/\D/g, "") * (sliderItems.length / count) - getComputedStyle(slider).width.replace(/\D/g, ""))) {
            offset = getComputedStyle(slider).width.replace(/\D/g, "");
        }
        offset -= getComputedStyle(slider).width.replace(/\D/g, "");
        sliderWrapper.style = `transform: translateX(${offset}px);`;
    });

    prevBtn.addEventListener("click", () => {
        if (offset === 0) {
            offset = -getComputedStyle(slider).width.replace(/\D/g, "") * (sliderItems.length / count);
        }
        console.log(-getComputedStyle(slider).width.replace(/\D/g, ''));
        offset += +getComputedStyle(slider).width.replace(/\D/g, "");
        // console.log(offset);
        sliderWrapper.style = `transform: translateX(${offset}px);`;
    });
}
animatedFunction({
    next: '.btn--next',
    prev: '.btn--prev',
    items: '.slider__item',
    selector: '.slider',
    wrapper: '.slider__wrapper',
    count: 2
});

// animatedFunction({
//     next: '.btn--next__second',
//     prev: '.btn--prev__second',
//     items: '.slider__item__second',
//     selector: '.slider__second',
//     wrapper: '.slider__wrapper__second'
// });