import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
export const Footer = () => {
  return (
    <Flex backgroundColor={"#252525"} height={'fit-content'} flexDirection={'column'} mt={120}>
      <Flex gap={50} m={5} flexDirection={{base:'column',md:'row',lg:'row'}}>
        <Box width={"50%"} height={"400x"} display={'flex'} flexDirection={'column'} gap={10}>
          <Box borderBottom={"2px white solid"}>
            <Text
              color={"white"}
              fontFamily={"Suisse,sans-serif"}
              fontSize={20}
            >
              Subscribe to Aesop communications
            </Text>
          </Box>
          <Box display={"flex"} flexDirection={"column"}>
            <Button
              borderRadius={"2%"}
              backgroundColor={"#252525"}
              textDecoration={"none"}
              _hover={"none"}
              border={"1px solid white "}
              color={"white"}
            >
              Email Adress{" "}
              <span style={{ marginLeft: "40px" }}>
                {" "}
                <FiArrowRight />
              </span>
            </Button>
            <Box>
              <input
                type="checkbox"
                border={"1px solid white"}
                backgroundColor="transparent"
              />{" "}
              <span
                style={{
                  color: "white",
                  fontFamily: "Suisse,sans-serif",
                  fontSize: 18,
                  textAlign: "start",
                }}
              >
                Subscribe to receive communications from Aesop. By subscribing,
                you confirm you have read and understood our privacy policy.
              </span>
            </Box>
          </Box>
        </Box>
        <Box display={'flex'} flexDirection={{base:'column',md:'row',lg:'row'}} gap={20}width={'50%'}>
          <Box display={'flex'} flexDirection={'column'} gap={5}>
            <Box borderBottom={'1px solid white'}>
              <Text  color={'white'}>Orders & Support</Text>
             </Box>
              <Text  fontSize={20} color={'white'}>Contact us</Text>
              <Text fontSize={20} color={'white'}>FAQs</Text>
              <Text fontSize={20} color={'white'}>Shipping</Text>
              <Text fontSize={20} color={'white'}>Returns</Text>
              <Text fontSize={20} color={'white'}>Order History</Text>
              <Text fontSize={20} color={'white'}>Terms & Conditions</Text>
          </Box>
          <Box>
            <Box display={'flex'} flexDirection={'column'} gap={5}>
              <Box borderBottom={'1px solid white'}>
                <Text color={'white'}>Services</Text>
              </Box>
                <Text fontSize={20} color={'white'}>Live Assistance</Text>
                <Text fontSize={20} color={'white'}>Corporate Gifts</Text>
                <Text fontSize={20} color={'white'}>Facial Appointments</Text>
                <Text fontSize={20} color={'white'}>Click & Collect</Text>
                <Text fontSize={20} color={'white'}>Video Consultation</Text>
           </Box>
          </Box>
          <Box>
          <Box display={'flex'} flexDirection={'column'} gap={5}>
            <Box borderBottom={'1px solid white'}>
              <Text color={'white'}>Location Preference</Text>
            </Box>
              <Text fontSize={20} color={'white'}>Shipping :</Text>
              <Text fontSize={20} color={'white'}>Hongkong, SAR, China</Text>
              <Text fontSize={20} color={'white'}>Language:</Text>
              <Text fontSize={20} color={'white'}>English</Text>
              <Text fontSize={20} color={'white'}></Text>
              <Text fontSize={20} color={'white'}>繁體中文</Text>
         </Box>
          </Box>
        </Box>
      </Flex>
      <Flex>
      <Box display={'flex'} flexDirection={{base:'column',md:'row',lg:'row'}} gap={20}width={'60%'} ml={20}>
          <Box display={'flex'} flexDirection={'column'} gap={5}>
            <Box borderBottom={'1px solid white'}>
              <Text fontSize={20} color={'white'}>Subtainability</Text>
             </Box>
              <Text fontSize={20} color={'white'}>All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. Learn more</Text> 
              
          </Box>
          <Box>
            <Box display={'flex'} flexDirection={'column'} gap={5}>
              <Box borderBottom={'1px solid white'}>
                <Text fontSize={20} color={'white'}>About</Text>
              </Box>
                <Text fontSize={20}color={'white'}>Our Story</Text>
                <Text fontSize={20} color={'white'}> Foundation</Text>
                <Text fontSize={20} color={'white'}> careers</Text>
                <Text fontSize={20} color={'white'}>Privacy Policy</Text>
                <Text fontSize={20} color={'white'}>Acessibility</Text>
                <Text fontSize={20} color={'white'}>Cookie Policy</Text>
             </Box>
          </Box>
          <Box>
          <Box display={'flex'} flexDirection={'column'} gap={5}>
            <Box borderBottom={'1px solid white'}>
              <Text fontSize={20} color={'white'}>Social Media</Text>
            </Box>
              <Text fontSize={20}color={'white'}>Instagram</Text>
              <Text fontSize={20} color={'white'}>Twitter</Text>
              <Text fontSize={20} color={'white'}>WeChat</Text>
              <Text fontSize={20} color={'white'}>Weibo</Text >
             
          </Box>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};
