import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import ImageSlider, { CaptionCarousel } from "./ThirdSlick";
export const Sixthelement = () => {
  return (
    <Flex ml={20} direction={{base:'column',md:'column',lg:'row'}}  mb={20} justifyContent={'center'} >
      <Flex
        direction={"column"}
        width={"60%"}
        height={"fit-content"}
        gap={5}
        m={50}
        mt={150}
        
      >
        <Text textAlign={"justify"} fontWeight={"bold"}>
          The Athenseum
        </Text>
        <Text
          textAlign={"justify"}
          fontSize={35}
          fontFamily={"Zapf Humanist,serif"}
        >
          The warmup
        </Text>
        <Text
          textAlign={"justify"}
          mt={4}
          fontSize={19}
          fontFamily={"Suisse,sans-serif"}
        >
          In The Athenaeum, our digital reading room: a guide to ensuring a
          healthy complexion through the warmer months.
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
      
    >
       Read More<span style={{marginLeft:'40px'}}> <FiArrowRight /></span>
    </Button>
      </Flex>
      <ImageSlider/>
    </Flex>
  );
};
