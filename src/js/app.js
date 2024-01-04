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

            const text1 = page.text1;
            const text2 = page.text2;

            const circle1 = document.createElement('div');
            circle1.classList.add('circle1');

            const circle1BgImage = document.createElement('img');
            circle1BgImage.src = 'https://img.freepik.com/free-photo/white-painted-wall-texture-background_53876-138197.jpg';
            circle1BgImage.classList.add('circle1Bg');
            circle1.appendChild(circle1BgImage);

            const text1El = document.createElement('div');
            text1El.innerText = text1;
            text1El.classList.add('text1');
            const text1test = document.createElement('span');
            text1test.innerText = 'test';
            text1El.appendChild(text1test);
            circle1.appendChild(text1El);

            const text2El = document.createElement('span');
            text2El.innerText = text2;
            text2El.classList.add('text2')

            sliderItem.appendChild(circle1);
            sliderItem.appendChild(text2El);
        })
    }
}