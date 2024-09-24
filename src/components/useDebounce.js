export default useDebounce = (func, delay) => {
    let timeoutid;
    return function (...args){
        if(timeoutid){
            clearTimeout(timeoutid);
        }
        timeoutid = setTimeout(() => {
            func(...args);
        }, delay);
    }
}