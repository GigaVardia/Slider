const nextBtn = document.querySelector('#nextBtn');
const backBtn = document.querySelector('#backBtn');
const sliderContainer = document.querySelector('.slider-container');

export class App {
    constructor(data) {
        this._serviceData = data;
        this._currentPage = 1;

        this._renderPages(data.pages);
        nextBtn.addEventListener('click', () => {
            if (this._currentPage < this._serviceData.pages.length) {
                this._currentPage += 1;

                sliderContainer.style.transform = `translateX(-${(this._currentPage - 1) * 100}%)`;
            }
        })

        backBtn.addEventListener('click', () => {
            if (this._currentPage !== 1) {
                this._currentPage -= 1;

                sliderContainer.style.transform = `translateX(-${(this._currentPage - 1) * 100}%)`;
            }
        })
    }

    _renderPages(pages) {
        const sliderContainer = document.querySelector('.slider-container');
        pages.forEach((page) => {
            const sliderItem = document.createElement('div');

            sliderItem.classList.add('slider-item');
            sliderItem.style.position = 'relative';
            sliderItem.style.minWidth = '100%';
            sliderItem.style.width = '100%';
            sliderItem.style.height = '100%';
            sliderItem.style.flex = '1';
            sliderItem.style.background = 'url(' + page.background + ')';

            sliderContainer.appendChild(sliderItem);
        })
    }
}