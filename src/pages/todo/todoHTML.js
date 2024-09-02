let todoHTML = (function() {

    let getHomeHTML = function() {
        return  `<h1>To-Do</h1><a href=\"#\">Home</a><br/><a href=\"#calendar\">Calendar</a>`;
    }

    return {
        getHomeHTML
    }
})();

export {
    todoHTML
}