function AnimatedFunction({ next, prev, items, selector, wrapper, item, count = 1, timerClass, infinite, autoTimer }) {
    const nextBtn = document.querySelector(next);
    const prevBtn = document.querySelector(prev);
    const sliderItems = document.querySelectorAll(items);
    const sliderItem = document.querySelector(item);
    const slider = document.querySelector(selector);
    const sliderWrapper = document.querySelector(wrapper);
    let offset = 0;
    sliderWrapper.style = `transform: translateX(${offset}px);`;

    if (infinite) {
        setInterval(() => {
                if (offset === -(getComputedStyle(slider).width.replace(/\D/g, "") * (sliderItems.length / count) - getComputedStyle(slider).width.replace(/\D/g, "")) || offset === -(getComputedStyle(sliderWrapper).width.replace(/\D/g, "") - getComputedStyle(sliderItem).width.replace(/\D/g, ""))) {
                    offset = getComputedStyle(slider).width.replace(/\D/g, "");
                    sliderWrapper.classList.add('slider__timer');
                } else {
                    sliderWrapper.classList.remove('slider__timer');
                }
                offset -= getComputedStyle(slider).width.replace(/\D/g, "");
                sliderWrapper.style = `transform: translateX(${offset}px);`;
        }, autoTimer);
    } else {
        nextBtn.addEventListener("click", () => {
            if (offset === -(getComputedStyle(slider).width.replace(/\D/g, "") * (sliderItems.length / count) - getComputedStyle(slider).width.replace(/\D/g, "")) || offset === -(getComputedStyle(sliderWrapper).width.replace(/\D/g, "") - getComputedStyle(sliderItem).width.replace(/\D/g, ""))) {
                offset = getComputedStyle(slider).width.replace(/\D/g, "");
                sliderWrapper.classList.add('slider__timer');
            } else {
                sliderWrapper.classList.remove('slider__timer');
            }
            offset -= getComputedStyle(slider).width.replace(/\D/g, "");
            sliderWrapper.style = `transform: translateX(${offset}px);`;
        });
        prevBtn.addEventListener("click", () => {      
            if (offset === 0 || offset === (getComputedStyle(sliderWrapper).width.replace(/\D/g, "") / sliderItems.length)) {
                offset = -getComputedStyle(slider).width.replace(/\D/g, "") * (sliderItems.length / count);
                sliderWrapper.classList.add(timerClass);
            } else {
                sliderWrapper.classList.remove(timerClass);
            }
            offset += +getComputedStyle(slider).width.replace(/\D/g, "");
            sliderWrapper.style = `transform: translateX(${offset}px);`;
        });
    }
}
AnimatedFunction({
    next: '.btn--next',
    prev: '.btn--prev',
    items: '.slider__item',
    item: '.slider__item',
    selector: '.slider',
    wrapper: '.slider__wrapper',
    count: 1,
    timerClass: 'slider__timer',
    infinite: true,
    autoTimer: 4000
});

// animatedFunction({
//     next: '.btn--next__second',
//     prev: '.btn--prev__second',
//     items: '.slider__item__second',
//     selector: '.slider__second',
//     wrapper: '.slider__wrapper__second'
// });