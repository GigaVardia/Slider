import { App } from "./app";
import "../sass/style.scss";

const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}
window.addEventListener('resize', appHeight)
appHeight()

document.ontouchmove = function (event) {
    event.preventDefault();
}

window.app = new App({
    generalData: {
        "lang": "GE",
        "darkMode": true
    },
    pages: [
        {
            text1: 'Text1',
            text2: 'Text2',
            pageName: 'page1',
            background: '/assets/img/1.svg'
        },
        {
            text1: 'Text1',
            text2: 'Text2',
            pageName: 'page2',
            background: '/assets/img/2.svg'
        },
        {
            text1: 'Text1',
            text2: 'Text2',
            pageName: 'page3',
            background: '/assets/img/1.svg'
        },
        {
            text1: 'Text1',
            text2: 'Text2',
            pageName: 'page4',
            background: '/assets/img/2.svg'
        },
        {
            text1: 'Text1',
            text2: 'Text2',
            pageName: 'page5',
            background: '/assets/img/1.svg'
        },
        {
            text1: 'Text1',
            text2: 'Text2',
            pageName: 'page6',
            background: '/assets/img/2.svg'
        },
        {
            text1: 'Text1',
            text2: 'Text2',
            pageName: 'page7',
            background: '/assets/img/1.svg'
        },
        {
            text1: 'Text1',
            text2: 'Text2',
            pageName: 'page8',
            background: '/assets/img/2.svg'
        },
        {
            text1: 'Text1',
            text2: 'Text2',
            pageName: 'page9',
            background: '/assets/img/1.svg'
        },
        {
            text1: 'Text1',
            text2: 'Text2',
            pageName: 'page10',
            background: '/assets/img/2.svg'
        },
        {
            text1: 'Text1',
            text2: 'Text2',
            pageName: 'page11',
            background: '/assets/img/1.svg'
        },
        {
            text1: 'Text1',
            text2: 'Text2',
            pageName: 'page12',
            background: '/assets/img/2.svg'
        }
    ]
})