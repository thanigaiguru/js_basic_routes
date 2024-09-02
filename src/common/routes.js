import { homeHandler } from "../pages/home/homeHandler"
import { todoHandler } from "../pages/todo/todoHandler";
import { calendarHandler } from "../pages/calendar/calendarHandler"

let routes = 
[
    {
        url: '', 
        callback: homeHandler.init
    },
    { 
        url: "todo", 
        callback: todoHandler.init
    },
    { 
        url: "calendar", 
        callback: calendarHandler.init
    }
]

export {
    routes
}