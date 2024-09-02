import { todoHTML } from "./todoHTML";

let todoHandler = (function(){

    let appArea = document.getElementById('app');
    
    let init = function() {
        let html = todoHTML.getHomeHTML();
        appArea.innerHTML = html;
    }

    return {
        init
    }

})();

export {
    todoHandler
}