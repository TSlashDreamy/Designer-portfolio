import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaChevronCircleRight, FaChevronCircleLeft } from 'react-icons/fa';
import {Link} from 'react-scroll';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import './../../App.css';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  function nextSlide() {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  function prevSlide() {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

// default swipe event
document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     
                                                                         
function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                
                                                                         
function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
                                                                         
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
          /* right swipe */
          nextSlide();
          // setCurrent(current === length - 1 ? 0 : current + 1);
        } else {
            /* left swipe */
            // setCurrent(current === 0 ? length - 1 : current - 1);
            prevSlide();
        }                       
    }                                                    
    /* reset values */
    xDown = null;
    yDown = null;                                          
};

  return (
    <section className='slider'>
      <Link to="lastWorks" spy={true} smooth={true}><FaChevronCircleLeft className='left-arrow' onClick={prevSlide} /></Link>
      <Link to="lastWorks" spy={true} smooth={true}><FaChevronCircleRight className='right-arrow' onClick={nextSlide} /></Link>
      {SliderData.map((slide, index) => {
        return (
          <div
            class='image-gallery'
            className={index === current ? 'image-gallery slide active' : 'image-gallery slide'}
            key={index}
          >
            {index === current && (
              <img style={{ height: "100%", zIndex: '2', position: 'relative' }} src={slide.image} alt='Превью работы' className='slider-image' />
            )}
            <SkeletonTheme color="#cfcfcf" highlightColor="#f5f5f5">
                    <Skeleton style={{ height: "99%", position: "absolute", top: 0, zIndex: '1' }}/>
                    </SkeletonTheme>
          </div>
        );
      })}
    </section>
  );
};
export default ImageSlider;