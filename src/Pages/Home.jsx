import React, { useContext } from 'react'
import CardContainer from '../Components/CardContainer'
import { CarouselCustomNavigation } from '../Components/HeroCarousal'

function Home() {
  return (
    <div>
      <CarouselCustomNavigation/>
        <CardContainer/>

    </div>
  )
}

export default Home
