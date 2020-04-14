const logger = store => next => action => {
    console.group(action.type);
    for (let [key, value] of Object.entries(action)) {
        if (key !== 'type') {
            console.group(key);
            console.log(value);
            console.groupEnd();
        }
    }
    console.groupEnd()
    return next(action);
}

export default logger;