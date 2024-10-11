import { headerTransition } from "./utils/widgets.js";
import { detectScroll } from "./utils/detectors.js";
import { bannerTransition } from "./utils/widgets.js";

headerTransition();
detectScroll();
bannerTransition();

let courses = [
    {
        image: './public/assets/images/python.png',
        languages: ['Python'],
        duration: '8 Weeks',
        speed: 3,
        price: 92
    },
    {
        image: './public/assets/images/webdevelopment.png',
        introduction: ['HTML', 'CSS', 'JavaScript', 'Git & Github', 'Node.js'],
        duration: '8 Weeks',
        speed: 3,
        price: 92
    }
]

function createCards() {

}


console.log('hi')