import React from 'react'
import { Nav } from '../components/Nav'
import { Box, Button, Flex, Text, useMediaQuery } from '@chakra-ui/react'
import { FirstElem } from '../components/FirstElem'
import MyCarousel from '../components/Slick'
import SimpleSlider from '../components/Slick'
import FirstCarousalData from '../utils/FirstCarousalData'
import SecondCaraosalData from '../utils/SecondCarausalData'
import ThirdCaraosalData from '../utils/ThirdCaraoselData'
import MidSlider from '../components/MidScreenSlick'
import { Secondelement } from '../components/Secondelement'
import { Fourthelement } from '../components/FourthElement'
import { Sixthelement } from '../components/SixthElement'
import { Seventhelement } from '../components/Seventhelement'
import { Footer } from '../components/Footer'

export const Home = () => {
  const [isMediumScreen] = useMediaQuery(
    "(max-width: 1300px)"
  );
  return (
    <Flex direction={'column'} >
      <FirstElem/>
{isMediumScreen ? <MidSlider myProp={FirstCarousalData()}/> : <SimpleSlider myProp={FirstCarousalData()} />}
<Secondelement/>
{isMediumScreen ? <MidSlider myProp={SecondCaraosalData()}/> : <SimpleSlider myProp={SecondCaraosalData()}/>}
<Fourthelement/>
{isMediumScreen ? <MidSlider myProp={ThirdCaraosalData()}/> : <SimpleSlider myProp={ThirdCaraosalData()}/>}
<Sixthelement/>
<Seventhelement/>

<Footer />

    </Flex>
  )
}
