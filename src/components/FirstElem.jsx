import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { FiArrowRight } from "react-icons/fi";
export const FirstElem = () => {
  return (
    <Flex height={'700px'}   backgroundPosition={'center'} flexDirection={'column'} width="100%"  backgroundImage={'https://www.aesop.com/u1nb1km7t5q7/AGQGWYrTapcQI1NrPvsYU/11e99769c1767531dd3c12b6fce85f37/Aesop_Bar_Soaps_2023_Web_Homepage_2_Primary_Full_Bleed_Desktop_2880x1044px.jpg'} backgroundSize="cover">
      <Flex 
       alignContent={'center'}  width={'50%'} mt={30}>
       <Box width={'fit-content'} m='auto'>
<Text fontSize={{base:20,md:40,lg:50}} color={'white'}>Aesop</Text>
       </Box>
       <Flex m='auto' display={{base:'none',md:'flex',lg:'flex'}} gap={4} height={'fit-content'} flexDirection={'column'}  width={'40%'}  >
<Text fontSize={{md:13,lg:17}} color={'white'} textAlign={'justify'}>Bar Soap</Text>
<Text fontSize={{md:13,lg:32}} color={'white'} textAlign={'justify'}>A body care classic, reimagined </Text>
<Text fontSize={{md:15,lg:19}} color={'white'}textAlign={'justify'}>Breathing new life into the humble bar soap are Nurture, Polish and Refresh—three additions to the range, each imparting a unique constellation of benefits. </Text>
<Button
width={'fit-content'}
p={3}
borderRadius={'none'}
      border="1px solid white"
      color="white"
      background="none"
      _hover={{
        background: "white",
        color:'black',
        transition: "background 0.3s ease-in-out", 
      }}
      
    >
      Discover Bar Soaps <span style={{marginLeft:'40px'}}> <FiArrowRight /></span>
    </Button>
       </Flex>
      </Flex>
      
    </Flex>
  )
}
