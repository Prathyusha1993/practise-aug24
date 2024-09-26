import React, { useEffect } from 'react';

const ImageCarousel = ({images}) => {
    const [index, setIndex] = React.useState(0);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         handleNext();
    //     }, 1000);
    //     return () => clearTimeout(timer);
    // }, [index])

    const handlePrev =() => {
        if(index === 0){
            return setIndex(images.length - 1);
        }
        setIndex(index - 1);
    };

    const handleNext = () => {
        setIndex((index + 1) % images.length);
    };

  return (
    <div>
        <h1>ImageCarousel</h1>
        {index > 0 && <button onClick={handlePrev}>Prev</button>}
        <img style={{width:'300px', height:'250px', objectFit:'contain'}} src={images[index].image} alt={images[index].id} />
        {index < images.length-1 && <button onClick={handleNext}>Next</button>}
        <div style={{marginTop: '15px'}}>
            {images.map((_,imgIndex) => (
                <span 
                key={imgIndex}
                style={{
                    height:'10px',
                    width:'10px',
                    margin:'0 3px',
                    backgroundColor: imgIndex === index ? 'black' : 'grey',
                    borderRadius:'50%',
                    diaplay:'inline-block'
                }}
                />
            ))}
        </div>
    </div>
  )
}

export default ImageCarousel;