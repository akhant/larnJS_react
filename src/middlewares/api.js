export default store => next => action => {
    const {callAPI} = action
    if (!callAPI) return next(action);

    fetch(callAPI)
    .then(res => res.json())
    .then(res => next({...action, res}))
}