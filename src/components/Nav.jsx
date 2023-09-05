import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Link,
  useMediaQuery,
  IconButton,
  HStack,
  VStack,
  Spacer,
  useDisclosure,
  Text,
  Image,
} from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { HiX } from "react-icons/hi";

import { RxHeart,RxRows } from "react-icons/rx";

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
export const Nav = () => {
  const [isMediumScreen] = useMediaQuery(
    "(min-width: 600px) and (max-width: 1300px)"
  );
  const [isSmallScreen] = useMediaQuery("(max-width: 600px)");
  const { isOpen, onToggle } = useDisclosure();
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const [size, setSize] = useState(0);
  const [obj, setObj] = useState({});
  const [display, setDisplay] = useState(false);

  const handleSkinCareClick = (abc) => {
    console.log(abc);
    setOpen(false);
    setDisplay(true);
    setObj(abc);
    const skinCareJSON = JSON.stringify(abc);
    console.log(skinCareJSON);
    navigate("/elem", { state: { skinCareJSON } });
  };

  const handleClick1 = () => {
    setDisplay(false);
    navigate("/");
  };

  if (isMediumScreen) {
    return <MediumNav />;
  }

  if (isSmallScreen) {
    return <SmallNav />;
  }

  return (
    <Flex
      boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;"
      justifyContent={"space-between"}
      width={"full"}
      height={"90px"}
      alignItems={"center"}
      backgroundColor={"FFFEF2"}
    >
      <Flex justifyContent={"space-evenly"} width={"70%"} alignItems={"center"}>
        <Link
          _hover={{ textDecoration: "none" }}
          fontWeight={"bold"}
          onClick={() => {
            handleSkinCareClick(SkinCare);
          }}
        >
          Skin Care
        </Link>
        <Link
          _hover={{ textDecoration: "none" }}
          fontWeight={"bold"}
          onClick={() => {
            handleSkinCareClick(BodyHand);
          }}
        >
          Body & Hand
        </Link>
        <Link
          _hover={{ textDecoration: "none" }}
          fontWeight={"bold"}
          onClick={() => {
            handleSkinCareClick(Hair);
          }}
        >
          Hair
        </Link>
        <Link
          _hover={{ textDecoration: "none" }}
          fontWeight={"bold"}
          onClick={() => {
            handleSkinCareClick(Fragrance);
          }}
        >
          Fragrance
        </Link>
        <Link
          _hover={{ textDecoration: "none" }}
          fontWeight={"bold"}
          onClick={() => {
            handleSkinCareClick(Home);
          }}
        >
          Home
        </Link>
        <Link
          _hover={{ textDecoration: "none" }}
          fontWeight={"bold"}
          onClick={() => {
            handleSkinCareClick(KitsTravel);
          }}
        >
          Kits & Travel
        </Link>
        <Link
          _hover={{ textDecoration: "none" }}
          fontWeight={"bold"}
          onClick={() => {
            handleSkinCareClick(Gift);
          }}
        >
          Gifts
        </Link>
        <Link _hover={{ textDecoration: "none" }} fontWeight={"bold"}>
          Read
        </Link>
        <Link _hover={{ textDecoration: "none" }} fontWeight={"bold"}>
          Stores
        </Link>
        <Link _hover={{ textDecoration: "none" }} fontWeight={"bold"}>
          Facial Appointments
        </Link>
        <Box display="flex" alignItems={"center"}>
          <CiSearch size={"25"} />
        </Box>
        <Box hidden={!display}>
          <Button
            background={"none"}
            _hover={{ textDecoration: "none" }}
            onClick={handleClick1}
          >
            Close <HiX />
          </Button>
        </Box>
      </Flex>

      <Flex justifyContent={"space-evenly"} width={"20%"}>
        <Link _hover={{ textDecoration: "none" }} fontWeight={"bold"}>
          Log in
        </Link>
        <Link _hover={{ textDecoration: "none" }} fontWeight={"bold"}>
          Cabinet
        </Link>
        <Link _hover={{ textDecoration: "none" }} fontWeight={"bold"}>
          Cart
        </Link>
      </Flex>
    </Flex>
  );
};

const MediumNav = () => {
  let data = [
    {
      text: "The next chapter in Aesop fragrance: Gloam Eau de Parfum",
      img: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F08%2Faesop-eidesis-perfume-release-info-000.jpg",
    },
    {
      text: "A guide to home fragrance",
      img: "https://www.aesop.com/u1nb1km7t5q7/7pyLR7SOii9dmP9seC4H5B/451e2c4e0c44e2a0cac36f7b7b0ecec3/Aesop_Scented_Home_Web_Secondary_Incense_2_Mid_Desktop_2560x1440px.jpg",
    },
    {
      text: "How to care for the delicate skin around the eyes",
      img: "https://images.ctfassets.net/u1nb1km7t5q7/hhL2cbxnO1yI3D9ZoWFhI/b3fb1aa5d3a3f61316295ebb16baafd4/Aesop_Delicate_Skin_Eye_Web_Open_Graph_1200x630px.jpg",
    },
    {
      text: "Radiomatique Future Fables",
      img: "https://m.media-amazon.com/images/I/513nvDpHucL.jpg",
    },
    {
      text: "Musing from The Rain Garden",
      img: "https://www.plnestbank.com/?_=%2Fu1nb1km7t5q7%2F5RY9Ki41XXCFt9LEYnKTpo%2F1a3597a82abe36986e4507503d871454%2FAesop_Rain_Garden_Seongsu_Web_Athenaeum_Thumbnail_Horizontal_Tablet_1536x864px.jpg%23nHyvkRqqjwwseaPputxlFZGi5Vw%2B",
    },
  ];
  const [open, setOpen] = useState(false);
  const [display,setDisplay] = useState(false)
  const [bgc, setbgc] = useState("");
  
  const [obj, setObj] = useState({});
  const handleClick = (abc) => {
    setOpen(true);
    setObj(abc);
    setbgc(obj.bgc);
    console.log(obj);
  };
  const handleClick1 = () => {
    setDisplay(false);
    navigate("/");
  };
  const navigate = useNavigate();
  const handleClick12 = () => {
setDisplay(true)
navigate('/elem',{state : 'hello'})

  };
  return (
    <>
      <Flex
        boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;"
        justifyContent={"space-between"}
        width={"full"}
        height={"90px"}
        alignItems={"center"}
        backgroundColor={"FFFEF2"}
      >
        <Flex
          justifyContent={"space-evenly"}
          width={"40%"}
          alignItems={"center"}
        >
          <Link
            onClick={() => {
              handleClick12();
            }}
          >
            Shop
          </Link>
          <Link>Read</Link>
          <Link>Stores</Link>

          <Box display="flex" alignItems={"center"}>
            <CiSearch size={"25"} />
          </Box>
          <Box hidden={!display}>
          <Button
            background={"none"}
            _hover={{ textDecoration: "none" }}
            onClick={handleClick1}
          >
            Close <HiX />
          </Button>
        </Box>
        </Flex>
        <Flex justifyContent={"space-evenly"} width={"30%"}>
          <Link _hover={{ textDecoration: "none" }} fontWeight={"bold"}>
            Log in
          </Link>
          <Link _hover={{ textDecoration: "none" }} fontWeight={"bold"}>
            Cabinet
          </Link>
          <Link _hover={{ textDecoration: "none" }} fontWeight={"bold"}>
            Cart
          </Link>
        </Flex>
      </Flex>
      
      
    </>
  );
  
};

const SmallNav = () => {
  return <Flex gap={230} background={'transparent'} position={'absolute'} width={'full'} m={2}>
    <Text color="white" ml={2}>
      Aesop
    </Text>
    <Box display="flex" alignItems={"center"} gap={5}>
          <CiSearch size={"25"} color="white" />
          <RxHeart size={"25"} color="white"/>
          <Text color="white">Cart</Text>
          <RxRows size={"25"} color="white"/>
        </Box>
       
  </Flex>;
 
};
