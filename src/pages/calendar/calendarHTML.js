let calendarHTML = (function() {

    let getHomeHTML = function() {
        return  `<h1>Calendar</h1><a href=\"#\">Home</a></br><a href=\"#todo\">To-Do</a>`;
    }

    return {
        getHomeHTML
    }
})();

export {
    calendarHTML
}