import React from 'react'
import Navbar from '../Components/Navbar'
import Carousel from '../Components/Carousel'
import Popular from '../Components/Popular'
import Dark from '../Components/Dark'
import Services from '../Components/Services'
import Blog from '../Components/Blog'
import Reviews from '../Components/Reviews'
import QNA from '../Components/QNA'
import Accordion from '../Components/Accordion'
import Footer from '../Components/Footer'


const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Popular />
      <Dark />
      <Services />
      <Blog />
      <Reviews />
      <QNA />
      <Accordion />
      <Footer />
    </div>
  )
}

export default Home