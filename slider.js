function animatedFunction({ next, prev, items, selector, wrapper }) {
    const nextBtn = document.querySelector(next);
    const prevBtn = document.querySelector(prev);
    const sliderItems = document.querySelectorAll(items);
    const slider = document.querySelector(selector);
    const sliderWrapper = document.querySelector(wrapper);
    let offset = 0;
    slider.style = `transform: translateX(${offset}px)`;

    nextBtn.addEventListener("click", () => {
        if (offset === -(getComputedStyle(slider).width.replace('px', '') * sliderItems.length - getComputedStyle(slider).width.replace('px', ''))) {
            offset = getComputedStyle(slider).width.replace('px', '');
        }
        offset -= getComputedStyle(slider).width.replace('px', '');
        // console.log(offset);
        sliderWrapper.style = `transform: translateX(${offset}px);`;
    });

    prevBtn.addEventListener("click", () => {
        if (offset === 0) {
            offset = -getComputedStyle(slider).width.replace('px', '') * sliderItems.length;
        }
        offset += +getComputedStyle(slider).width.replace('px', '');
        // console.log(offset);
        sliderWrapper.style = `transform: translateX(${offset}px);`;
    });
}
animatedFunction({
    next: '.btn--next',
    prev: '.btn--prev',
    items: '.slider__item',
    selector: '.slider',
    wrapper: '.slider__wrapper'
});

animatedFunction({
    next: '.btn--next__second',
    prev: '.btn--prev__second',
    items: '.slider__item__second',
    selector: '.slider__second',
    wrapper: '.slider__wrapper__second'
});