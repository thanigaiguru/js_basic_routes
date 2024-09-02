let homeHTML = (function() {

    let getHomeHTML = function() {
        return  `<h1>Home</h1><a href=\"#todo\">To-Do</a><br/><a href=\"#calendar\">Calendar</a>"`;
    }

    return {
        getHomeHTML
    }
})();

export {
    homeHTML
}