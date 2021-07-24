import React from 'react'
import { SliderContainer, HomeTopStyle, RelatedStyledProducts } from './HomeTop.style'
import Slider from 'react-slick'
import { Container } from 'react-grid-system'

function SampleNextArrow (props) {
  // eslint-disable-next-line react/prop-types
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'black' }}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow (props) {
  // eslint-disable-next-line react/prop-types
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'black' }}
      onClick={onClick}
    />
  )
}

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 2500,
  slidesToShow: 1,
  slidesToScroll: 1
//   nextArrow: <SampleNextArrow />,
//   prevArrow: <SamplePrevArrow />
}

const relatedsettings = {
  infinite: true,
  speed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
}

const HomeTop = () => {
  return (
    <HomeTopStyle>
      <Container>
        <Slider {...settings}>
          <SliderContainer>
            <img src="/1290x500.png"/>
          </SliderContainer>
          <SliderContainer>
            <img src="/1290x500.png"/>
          </SliderContainer>
          <SliderContainer>
            <img src="/1290x500.png"/>
          </SliderContainer>
        </Slider>
        <Slider {...relatedsettings}>

          <div>
            <RelatedStyledProducts/>
          </div>

          <div>
            <RelatedStyledProducts/>
          </div>

        </Slider>

        <Slider {...relatedsettings}>

          <div>
            <RelatedStyledProducts/>
          </div>
          <div>
            <RelatedStyledProducts/>
          </div>

        </Slider>

        <Slider {...relatedsettings}>

          <div>
            <RelatedStyledProducts/>
          </div>

          <div>
            <RelatedStyledProducts/>
          </div>

        </Slider>
      </Container>
    </HomeTopStyle>
  )
}
export default HomeTop
