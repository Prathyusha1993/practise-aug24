import React, { forwardRef } from 'react'

const Circle = forwardRef((props, ref) => {
  return (
    <div ref={ref} style={{height:'30px', width:'30px', borderRadius:'40px', backgroundColor:'indigo', position:'absolute'}}>
        
    </div>
  )
})

export default Circle;