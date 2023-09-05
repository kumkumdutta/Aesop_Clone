import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
export const Secondelement = () => {
  return (
    <Flex ml={20} direction={{base:'column',md:'column',lg:'row'}} mt={20} mb={20}>
      <Flex
        direction={"column"}
        width={"60%"}
        height={"fit-content"}
        gap={5}
        m={50}
        
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
      <Box>
        <Image src="https://www.aesop.com/u1nb1km7t5q7/3GSzEbfK3uJnoXUkae2D9G/37d1916a82b754c70870cab8f85f34b0/Aesop_Article_Summer_Skin_Care_2020_Mid_1_Desktop_2560x1440px.jpg" />
      </Box>
    </Flex>
  );
};
