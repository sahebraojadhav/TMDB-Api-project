function useDebounce(callback,delay=1000){
    //it takes callback and returns a modified callback that execute after given interval
    let timeId=null;
    return (...args)=>{
        clearTimeout(timeId);
        timeId=setTimeout(()=>{
            callback(...args);
        },delay)
    }
}

export default useDebounce;