function ThrottleFn(fn=()=>{}, timer=400) {
    let reTimes = null
    return ()=>{ 
        if(reTimes){
            clearTimeout(reTimes)
        }
        reTimes = setTimeout(()=>{
            fn();
        }, timer);
    }
}