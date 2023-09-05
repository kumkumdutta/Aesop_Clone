import { Box, Text } from '@chakra-ui/react'
import React from 'react'

export const Seventhelement = () => {
  return (
    <Box display={'flex'} flexDirection={'column'} gap={{base:50,md:100,lg:200}} justifyContent={'center'}>
        <Text fontFamily={'Suisse Regular,sans-serif;'} color={'#666666'} fontSize={{base:5,md:10,lg:15}}> Aesop fashion Walk</Text>
        <Box width={'50%'} m={'auto'}>
        <Text fontFamily={'Zapf Humanist,serif'} color={'#333333'} fontSize={{base:10,md:30,lg:40}}>‘Life never becomes a habit to me. It's always a marvel.’</Text>
        <Text fontFamily={'Suisse,sans-serif'} color={'black'} mt={3} mr={2} fontWeight={'bold'} fontSize={{base:10,md:15,lg:20}}>Katherine Mansfield</Text>
        </Box>
        

    </Box>
  )
}
