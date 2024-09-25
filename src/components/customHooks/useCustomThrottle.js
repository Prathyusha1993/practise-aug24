import { useEffect, useRef } from "react";

const useCustomThrottle = (value, delay) => {
    const [throttledValue, setThrottledValue] = useState(value);

    const lastExcuted = useRef(Date.now());

    useEffect(() => {
        const handler = setTimeout(() => {
            const now =  Date.now();
            const timeElapsed = now - lastExcuted.current;
            if(timeElapsed >= delay) {
                setThrottledValue(value);
                lastExcuted.currrent  = now;
            }
        }, delay - (Date.now() - lastExcuted.current));
        return () => {
            clearTimeout(handler);
        }
    }, [delay, value]);
    return throttledValue;
};

export default useCustomThrottle;