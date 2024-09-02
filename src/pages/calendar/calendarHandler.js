import { calendarHTML } from "./calendarHTML";

let calendarHandler = (function(){

    let appArea = document.getElementById('app');
    
    let init = function() {
        let html = calendarHTML.getHomeHTML();
        appArea.innerHTML = html;
    }

    return {
        init
    }

})();

export {
    calendarHandler
}