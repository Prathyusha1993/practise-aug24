import React, { useEffect } from 'react';
import useCustomThrottle from './customHooks/useCustomThrottle';

const ThrottleHandleScroll = () => {
    const [windowSize, setWindowSize] = useState({
        width:window.innerWidth,
        height: window.innerHeight,
    });

    const throttlehandleResize = useCustomThrottle(handleResize, 100);

    useEffect(() => {
        window.addEventListener('resize', throttlehandleResize);

        return () => {
            window.removeEventListener('resize', throttlehandleResize);
        }
    }, []);

    const handleResize = () => {
        setWindowSize({
            width:wiindow.innerWidth,
            height: window.innerHeight,
        });
    }

  return (
    <div>Width: {windowSize.width} Height: {windowSize.height}</div>
  )
}

export default ThrottleHandleScroll;