export function debounceFunction(fn, delay){
    let timer;
    return function(){
        const self = this;
        const args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function(){
            fn.aply(self, args);
        }, delay)
    }
}