import PropTypes from 'prop-types'
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'
import { useState } from 'react'
import '../Styles/Carousel.css'
const Carousel = ( {data} )  => {


  const [slide, setSlide] = useState(0);
  
  const nextSlide = () => {
    setSlide(slide+1);
  }

  const prevSlide = () => {
    setSlide(slide-1);
  }

  return (
    <div className= 'carousel'>
      <BsArrowLeftCircleFill className = 'arrow arrow-left' onClick={prevSlide}/>
      {data.slides.map((item, idx) => {
        return <img src={item.src} alt={item.alt} key={idx} className={slide === idx ? 'slide' : 'slide slide-hidden'}/>
      })}
      <BsArrowRightCircleFill className = 'arrow arrow-right' onClick={nextSlide}/>
      <span className='indicators'>
        {data.slides.map((_ ,idx)=> {
      return <button key={idx} onClick={null} className={slide === idx ? 'indicator': 'indicator indicator-inactive'}>

      </button> })}
      </span>
    </div>
  )
}

Carousel.propTypes = {
  data: PropTypes.object,
}

export default Carousel