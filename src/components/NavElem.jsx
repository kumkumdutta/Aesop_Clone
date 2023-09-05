import { Box, Button, Flex, Image, Link, Text, useMediaQuery } from "@chakra-ui/react";
import React, { useState } from "react";
import { Nav } from "./Nav";
import { useLocation, useNavigate } from "react-router-dom";

export const NavElem = ( ) => {
  let data = [
    {text : 'The next chapter in Aesop fragrance: Gloam Eau de Parfum',
img:'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F08%2Faesop-eidesis-perfume-release-info-000.jpg'},
{text:'A guide to home fragrance',
img:'https://www.aesop.com/u1nb1km7t5q7/7pyLR7SOii9dmP9seC4H5B/451e2c4e0c44e2a0cac36f7b7b0ecec3/Aesop_Scented_Home_Web_Secondary_Incense_2_Mid_Desktop_2560x1440px.jpg'},
{text:'How to care for the delicate skin around the eyes',
img:'https://images.ctfassets.net/u1nb1km7t5q7/hhL2cbxnO1yI3D9ZoWFhI/b3fb1aa5d3a3f61316295ebb16baafd4/Aesop_Delicate_Skin_Eye_Web_Open_Graph_1200x630px.jpg'},
{text:'Radiomatique Future Fables',
img:'https://m.media-amazon.com/images/I/513nvDpHucL.jpg'},
{text:'Musing from The Rain Garden',
img:'https://www.plnestbank.com/?_=%2Fu1nb1km7t5q7%2F5RY9Ki41XXCFt9LEYnKTpo%2F1a3597a82abe36986e4507503d871454%2FAesop_Rain_Garden_Seongsu_Web_Athenaeum_Thumbnail_Horizontal_Tablet_1536x864px.jpg%23nHyvkRqqjwwseaPputxlFZGi5Vw%2B'}
]
    const location = useLocation();
    const navigate = useNavigate()
    const { state } = location ;
    const [isMediumScreen] = useMediaQuery(
      "(min-width: 600px) and (max-width: 1300px)"
    );
    if( state==="hello"){
      return <MidNav  data={data}/>
    }
    
    const { skinCareJSON } = location.state || {};
    const prop = JSON.parse(skinCareJSON);
    const prod = prop.products || []
    const bgc = prop.bgc || ''
    // console.log(location);
   
   
    if(isMediumScreen && state !== 'hello'){
      return <MidNav prop1={prop}/>
    }
  return (
<>

    <Flex flexDirection={"column"} width={"full"} height={"800px"}  backgroundColor={bgc}>
      <Flex justifyContent={"space-between"} m={4} height={'fit-content'} >
        <Box>
          <Box
            position="fixed"
            top="150px"
            left="20px"
            // zIndex="100"
            bg="white"
            p="2"
            backgroundColor={bgc}
          >
            AeSop
          </Box>
        </Box>
        <Flex></Flex>
        {prod.map(
          (
            el,
            index 
          ) => (
            <Box key={index}  height={"fit-content"} >
              <Box>
                <Text fontWeight={"bold"} fontSize={20} textAlign={'start'} ml={3} >{el.name}</Text>
              </Box>
              <Box>
                {el.elem.map(
                  (
                    i,
                    innerIndex 
                  ) => (
                    <Text
                    textAlign={'start'}
                    _hover={{
                      position: 'relative',
                      textDecoration: 'none', 
                    }}
                    p={3}
                  >
                    <Text
                      as="span"
                      fontSize={'18'}
                      position="relative"
                      _before={{
                        content: '""',
                        position: 'absolute',
                        width: '100%',
                        height: '2px', 
                        bottom: '-2px', 
                        background: 'currentColor', 
                        transformOrigin: 'bottom left',
                        transform: 'scaleX(0)', 
                        transition: 'transform 0.3s ease', 
                      }}
                      _hover={{
                        _before: {
                          transform: 'scaleX(1)', 
                        },
                      }}
                    >
                      {i}
                    </Text>
                  </Text>
                  )
                )}
              </Box>
            </Box>
          )
        )}

        <Box width={"30%"} >
          <Image src={prop.img1} width={"100%"} />
        </Box>
      </Flex>
      <Box width={"20%"} ml={700} mt={400}  position={'absolute'}>
          <Image src={prop.img2} width={"100%"} />
        </Box>
       
    </Flex>
    </>
  );
};

let SkinCare = {
  products: [
    {
      name: "Category",
      elem: [
        "See all Skin Care",
        "Cleanse",
        "Exfoliate",
        "Treat & Masque",
        "Tone",
        "Hydrate",
        "Eyes & Lips",
        "Shave",
        "Sun Care",
        "Kits",
        "Skin Care Bundles",
        "Skin Care Gifts",
      ],
    },
    {
      name: "Skin Type or Concern",
      elem: ["Normal", "Dry", "Oily", "Combination", "Sensitive", "mature"],
    },
    { name: "Range", elem: ["Parsley Seed", "Skin Care +"] },
    {
      name: "Daily Essential",
      elem: [
        "Parsley Seed Anti-Oxidant Intense Serum",
        "Exalted Eye Serum ",
        "Lucent Facial Concentrate",
      ],
    },
  ],
  img1: "https://www.aesop.com/u1nb1km7t5q7/6Va39pw5RZBeMeQ9fdy2Zi/cdc6a081e7c8a3c361226cc5f86bb2cb/Aesop_Homepage_Navigation_Category_Skin_Desktop_1700x2400px.jpg",
  img2: "https://www.aesop.com/u1nb1km7t5q7/1iiKSDIrkiig0T034BqQlI/bdb5109bd1f301407bdf53b9758800ab/Aesop-Generic-Images-Skin-Care-Workshop-1-Mid-Desktop-1690x950px.jpg",
  bgc: "#F0EFE0",
};
let BodyHand = {
  products: [
    {
      name: "Category",
      elem: [
        "See all body & hand",
        "Hand",
        "Body",
        "Personal Care",
        "Body and Hand Care Bundles",
        "Body and Hand Care Gifts",
      ],
    },
    {
      name: "Range",
      elem: ["Garanium Leaf"],
    },

    {
      name: "Daily Essential",
      elem: [
        "Resurrection Rinse-Free Hand Mist",
        "Resurrection Aromatique Hand Balm",
        "Déodorant Roll-On",
      ],
    },
  ],
  img1: "https://www.aesop.com/u1nb1km7t5q7/11tFhBHEqkvZwHOiZMqGXo/0e2830ab4f36be98df48da3c57da1d5d/Aesop_Homepage_Navigation_Category_Body_Hand_Desktop_1700x2400px.jpg",
  img2: "https://img1.exportersindia.com/product_images/bc-full/2019/11/6387622/saffron-cold-process-handmade-soap-bar-1574144162-4925318.jpeg",
  bgc: "#ECE3D3",
};
let Hair = {
  products: [
    {
      name: "Category",
      elem: ["See all Hair", "Cleanse", "Condition", "Treat", "Groom"],
    },
    {
      name: "Harmonious Unions",
      elem: ["Shampoo", "Conditioner"],
    },
  ],
  img1: "https://www.aesop.com/u1nb1km7t5q7/1fi7x3gxHOba7MFtIctntt/9e47c7b14c67f3ed28df74c416090251/Aesop_Homepage_Navigation_Category_Hair_Desktop_1700x2400px.jpg",
  img2: "",
  bgc: "#DED8D4",
};
let Fragrance = {
  products: [
    {
      name: "Fragrance",
      elem: [
        "See all Fragrance",
        "Gloam",
        "Eidess",
        "Miraceti",
        "Karst",
        "Eremia",
        "Rozu",
        "Hwyl",
        "Marra Kech",
        "Tacit",
      ],
    },
    {
      name: "Fragrance Family",
      elem: ["Floral", "Fresh", "Woody", "Opulent"],
    },
    { name: "Range", elem: ["Othertopias"] },
    {
      name: "Recent Addition",
      elem: ["Gloam Eau de Parfum"],
    },
  ],
  img1: "https://www.aesop.com/u1nb1km7t5q7/6hAuVvwJ8jj5GYOVhsCAqB/82bcf2e821b13258afad2c64406f8e29/Aesop_Homepage_Navigation_Category_Fragrance_Desktop_1700x2400px.jpg",
  img2: "https://images.ctfassets.net/u1nb1km7t5q7/498qH8ryVpzjoqjvwMtMNi/330e7376bf97614ef0e2597c415398cc/Aesop_A_Guide_to_Fragrance_Web_Open_Graph_1200x630px.jpg",
  bgc: "#F5ECE4",
};
let Home = {
  products: [
    {
      name: "Category",
      elem: ["See all Home", "Home", "Literature", "Home Gifts"],
    },
    {
      name: "Recent Additions",
      elem: [
        "Murasaki Aromatique Incense",
        "Kagerou Aromatique Incense",
        "Sarashina Aromatique Incense",
      ],
    },
  ],
  img1: "https://www.aesop.com/u1nb1km7t5q7/77aCUDuy6O9Ob1JCf5ha3O/129c870eaba681d351ed68d6328f6601/Aesop_Homepage_Navigation_Category_Home_Desktop_1700x2400px.jpg",
  img2: "",
  bgc: "#F7F1EC",
};
let KitsTravel = {
  products: [
    {
      name: "Category",
      elem: [
        "See all Kits & Travel",
        "Gift Kits",
        "Skin Care Kits",
        "Body & Hand Care Kits",
        "Travel",
      ],
    },
    {
      name: "Recent Additions",
      elem: ["Mimamori", "Precipitous", "Congruos"],
    },
  ],
  img1: "https://www.aesop.com/u1nb1km7t5q7/1p1s2CjhO0qsMzkz3BtKlM/765643980fd5d48b625e76596f4ee431/Aesop_Homepage_Navigation_Category_Travel_Desktop_1700x2400px.jpg",
  img2: "https://www.datocms-assets.com/42755/1668497079-gift-kits-2022-23-poetry-of-place-pr-campagin-store-imagery-store-imagery-los-angeles-2000-x-2001.jpg",
  bgc: "#E9F0E3",
};
let Gift = {
  products: [
    {
      name: "Gift Guide",
      elem: [
        "All Gifts",
        "Seasonal Gifts",
        "Favourite formulations",
        "Small gestures",
        "Generous Offerings",
        "Gift for Self Care",
        "Gift for Home",
        "Gift for Travel",
        "Gift for Bundles",
      ],
    },
    {
      name: "Elemently Suited to All",
      elem: ["Digital Gift Card"],
    },
  ],
  img1: "https://www.aesop.com/u1nb1km7t5q7/62ttkdTsftqoYNvP5mYtBA/66da35d44f176bd963d1e6d0d0b62a99/Aesop_Homepage_Navigation_Category_Gifts_Desktop_1700x2400px.jpg",
  img2: "https://www.aesop.com/u1nb1km7t5q7/a2WjJabGF92YvNn3BV06e/91c97d80a0a5cfef225b0d25d1bf17fb/Aesop_Gift_Kits_2022-23_Web_Homepage_Secondary_Gift_Finder_GL_Desktop_2560x1440px.jpg",
  bgc: "#EBEADF",
};
 const MidNav = ({prop1,data})=>{
  const [open, setOpen] = useState(false);
  
    const [obj, setObj] = useState({});
    const [data1,setData] = useState(data)
    const prop = prop1 || obj
   
 console.log(prop);
  
  const handleClick = (abc) => {
    setOpen(true);
    setObj(abc);
    setData(false)
    console.log(obj);
  };
  return (
  <>
  
  
 
    <Flex >
        <Flex flexDirection={"column"} textAlign={"start"} width={"50%"} m={3}>
          <Text mb={7}>Aesop</Text>
          <Flex
            flexDirection={"column"}
            justifyContent={"space-evenly"}
            gap={4}
          >
            <Link
              textAlign={"start"}
              _hover={{ textDecoration: "none" }}
              fontWeight={""}
              onClick={() => {
                handleClick(SkinCare);
              }}
            >
              Skin Care
            </Link>
            <Link
              textAlign={"start"}
              _hover={{ textDecoration: "none" }}
              fontWeight={""}
              onClick={() => {
                handleClick(BodyHand);
              }}
            >
              Body & Hand
            </Link>
            <Link
              _hover={{ textDecoration: "none" }}
              fontWeight={""}
              onClick={() => {
                handleClick(Hair);
              }}
            >
              Hair
            </Link>
            <Link
              _hover={{ textDecoration: "none" }}
              fontWeight={""}
              onClick={() => {
                handleClick(Fragrance);
              }}
            >
              Fragrance
            </Link>
            <Link
              _hover={{ textDecoration: "none" }}
              fontWeight={""}
              onClick={() => {
                handleClick(Home);
              }}
            >
              Home
            </Link>
            <Link
              _hover={{ textDecoration: "none" }}
              fontWeight={""}
              onClick={() => {
                handleClick(KitsTravel);
              }}
            >
              Kits & Travel
            </Link>
            <Link
              _hover={{ textDecoration: "none" }}
              fontWeight={""}
              onClick={() => {
                handleClick(Gift);
              }}
            >
              Gifts
            </Link>
            <Link _hover={{ textDecoration: "none" }} fontWeight={""}>
              Read
            </Link>
            <Link _hover={{ textDecoration: "none" }} fontWeight={""}>
              Stores
            </Link>
            <Link _hover={{ textDecoration: "none" }} fontWeight={""}>
              Facial Appointments
            </Link>
          </Flex>
        </Flex>
        
        {data1 ?
    <Flex width={'50%'} flexDirection={'column'} >
    <Text>The Athenaeum </Text>
     {data.map((el)=><Flex flexDirection={'column'}  >
        <Text fontSize={'1xl'} _hover={{ textDecoration: "none" }} fontWeight={"bold"}>{el.text}</Text>
        <Box width={'70%'} display={'flex'} m={'auto'} height={'100%'}>
        <Image src={el.img} width={'100%'}  display={'block'} height={'100%'}/>
        </Box>
        
     </Flex>)}
   </Flex> : 
          <Flex backgroundColor={prop.bgc} width={"50%"} flexDirection={"column"}>
            <Flex>
              <Image src={prop.img2} />
            </Flex>
            {prop.products.map(
              (
                el,
                index 
              ) => (
                <Box key={index} height={"fit-content"}>
                  <Box>
                    <Text
                      fontWeight={"bold"}
                      fontSize={20}
                      textAlign={"start"}
                      ml={3}
                    >
                      {el.name}
                    </Text>
                  </Box>
                  <Box>
                    {el.elem.map((i, innerIndex) => (
                      <Text
                        textAlign={"start"}
                        _hover={{
                          position: "relative",
                          textDecoration: "none",
                        }}
                        p={3}
                      >
                        <Text
                          as="span"
                          fontSize={"18"}
                          position="relative"
                          _before={{
                            content: '""',
                            position: "absolute",
                            width: "100%",
                            height: "2px",
                            bottom: "-2px",
                            background: "currentColor",
                            transformOrigin: "bottom left",
                            transform: "scaleX(0)",
                            transition: "transform 0.3s ease",
                          }}
                          _hover={{
                            _before: {
                              transform: "scaleX(1)",
                            },
                          }}
                        >
                          {i}
                        </Text>
                      </Text>
                    ))}
                  </Box>
                </Box>
              )
            )}
          </Flex>}
        
      </Flex>
      </>
  )}
