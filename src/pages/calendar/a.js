import { myData } from './c';

const test1 = function() {
    console.log("from a.js "+(++myData.value));
}

window.test1 = test1;