export default state => next => action => {
    console.log('dispatch', action);
    next(action)
}