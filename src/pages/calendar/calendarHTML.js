window.btnHandler = () => {
    import(/* webpackChunkName: "[request]" */ `./${window.FILE_NAME}.js`).then(() => {
        // window.test1();
    })
};


let calendarHTML = (function() {

    let getHomeHTML = function() {
        return  `<h1>Calendar</h1>
                <a href=\"#\">Home</a></br>
                <a href=\"#todo\">To-Do</a>
                <button onclick="btnHandler()">Load</button>
                <button onclick="window.FILE_NAME = window.FILE_NAME === 'a' ? 'b': 'a'">Switch</button>
                <button onclick="window.test1()">test</button>
                `;
                
    }

    return {
        getHomeHTML
    }
})();

export {
    calendarHTML
}