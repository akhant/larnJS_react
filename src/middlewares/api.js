export default store => next => action => {
    const {callAPI} = action
    if (!callAPI) return next(action);
setTimeout(() => {
    fetch(callAPI)
        .then(res => res.json())
        .then(res => next({...action, res}))
}, 1000)

}