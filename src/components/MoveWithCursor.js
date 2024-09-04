import React, { useEffect, useRef } from 'react'
import Circle from './Circle';

const MoveWithCursor = () => {
    const rootRef = useRef();
    const circleRef = useRef();

    const handleMouseMove = (e) => {
        console.log('moving mouse');
        const circle = circleRef.current;
        circle.style.left= `${e.clientX}px`;        
        circle.style.top=`${e.clientY}px`;
        circle.style.right= `${e.clientX}px`;
        circle.style.bottom=`${e.clientY}px`;
    };

  return (
    <div ref={rootRef} onMouseMove={handleMouseMove}>
        <div style={{height:'screen', position:'relative'}} className='h-screen'>
            <Circle ref={circleRef} />
        </div>
    </div>
  )
}

export default MoveWithCursor;