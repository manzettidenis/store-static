import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Navigation from '../components/Header'

import React from 'react'

// eslint-disable-next-line react/prop-types
const MyApp = ({ Component, pageProps }) => {
  return (

    <>
      <Navigation/>
      <Component {...pageProps} />
      <Footer/>
    </>

  )
}

export default MyApp
