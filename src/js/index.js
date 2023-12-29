import { App } from "./app";
import "../sass/style.scss";

const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}
window.addEventListener('resize', appHeight)
appHeight()

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
        }
    ]
})