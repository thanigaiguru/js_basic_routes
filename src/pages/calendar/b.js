import { myData } from './c';
const test1 = function() {
    console.log("from b.js "+(++myData.value));
}

window.test1 = test1;