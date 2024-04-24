import PropTypes from 'prop-types'
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'

const Carousel = ( {data} )  => {

  const carouselStyles = {
    color: '#105bbd' ,
    backgroundColor: '#f2e875',
    height:'900px',
    width:'100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems : 'center'

  }

  const slideStyles = {
    borderRadius: '0.5rem',
    boxShadow: '0px 0px 7 px #666',
    width: '400px',
    height: '400px' 
  }


  return (
    <div style={carouselStyles}>
      <BsArrowLeftCircleFill/>
      {data.slides.map((item, idx) => {
        return <img src={item.src} alt={item.alt} key={idx} style= {slideStyles}/>
      })}
      <BsArrowRightCircleFill/>
    </div>
  )
}

Carousel.propTypes = {
  data: PropTypes.object,
}

export default Carousel