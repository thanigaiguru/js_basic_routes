export const setToStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

export const getFromStorage = key => {
    let value = localStorage.getItem(key);
    return value && JSON.parse(value);
};