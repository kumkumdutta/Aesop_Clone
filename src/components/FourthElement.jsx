import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
export const Fourthelement = () => {
  return (
    <Flex ml={20} direction={{base:'column',md:'column',lg:'row'}} mt={20} mb={20}>
      
      <Box>
        <Image src="https://www.aesop.com/u1nb1km7t5q7/6m4yuIyUcyfXMyKT17ZYsr/9bc9ba78322632d97323d73f364113f0/Aesop_Home_2023_Post-Poo_Drops_Web_Homepage_Secondary_Mid_Desktop_2560x1540px.png" />
      </Box>
      <Flex
        direction={"column"}
        width={"60%"}
        height={"fit-content"}
        gap={5}
        m={50}
        
      >
       
        <Text
          textAlign={"justify"}
          fontSize={35}
          fontFamily={"Zapf Humanist,serif"}
        >
          Post-Poo Drops has returned
        </Text>
        <Text
          textAlign={"justify"}
          mt={4}
          fontSize={19}
          fontFamily={"Suisse,sans-serif"}
        >
         Here to make the malodorous melodious once again. Dispense this favoured formulation into the toilet bowl after flushing to effectively mask disagreeable odours.
        </Text>
        <Button
width={'100%'}
p={6}
borderRadius={'none'}
      border="1px solid #252525"
      color="black"
      background="none"
      _hover={{
        background: "#252525",
        color:'white',
        transition: "background 0.3s ease-in-out", 
      }}
      fontSize={{base:10}}
      textAlign={'justify'}
      
    >
      Discover Post-Poo Drops<span style={{marginLeft:'40px'}}> <FiArrowRight /></span>
    </Button>
    
      </Flex>
    </Flex>
  );
};
