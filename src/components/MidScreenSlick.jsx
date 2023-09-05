import React, { Component, useState } from "react";
import Slider from "react-slick";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
        borderRadius: "none",
        width: "70px",
        height: "75px",
        zIndex: 4,
        backgroundColor: "#333333",
        color: "black",
        cursor: "pointer",
        right: 0,
        top: "43%",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClick}
    >
      <HiOutlineChevronRight style={{ color: "white", fontSize: "1.8rem" }} />
    </div>
  );
}
function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
        borderRadius: "none",
        width: "70px",
        height: "70px",
        zIndex: 4,
        backgroundColor: "#333333",
        cursor: "pointer",
        left: 0,
        top: "43%",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClick}
    >
      <HiOutlineChevronLeft style={{ color: "white", fontSize: "1.5rem" }} />
    </div>
  );
}
export default class MidSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      linePosition: 0, 
    };
  }

  handleBeforeChange = (oldIndex, newIndex) => {
    
    this.setState({
      linePosition: (newIndex / 3) * 100, 
    });
  };
  render() {
    const { myProp } = this.props;
    const { linePosition } = this.state;
    console.log(myProp);
    const settings = {
      prevArrow: <SamplePrevArrow />,
      nextArrow: <SampleNextArrow />,
      infinite: false,
      speed: 500,
       responsive: [
          
          {
            breakpoint: 1300, 
            settings: {
              slidesToShow: 2, 
            },
          },
          {
            breakpoint: 600, 
            settings: {
              slidesToShow: 1, 
            },
          },
        ],
      beforeChange: this.handleBeforeChange,
      slidesToScroll: 1,
    };
    return (
      <Box height={"800px"} mb={60}>
        <Slider {...settings}>
         
          {myProp.Products.map((el) => (
            <Box
              display={"flex"}
              mt={200}
              height={"600px"}
              flexDirection={"column"}
              width={"30%"}
             
            >
              <Box
                width={"100%"}
                alignContent={"baseline"}
                height={"80%"}
                
              >
                <Image src={el.img} width={"100%"} height={"90%"} />
              </Box>
              <Link
                fontSize={18}
                fontWeight={"bold"}
                fontFamily={"Suisse,sans-serif"}
              >
                {el.name}
              </Link>
              <Text fontSize={18} fontFamily={"Suisse,sans-serif"}>
                {el.desc}
              </Text>
            </Box>
          ))}
        </Slider>
        <Box
          mt={20}
          ml={100}
          height={"3px"}
          width={"80%"}
          backgroundColor={"#CCCBC2"}
        >
          <Box
            style={{
              width: myProp.width,
              height: "3px",
              

              backgroundColor: "#52514E",
              transition: "transform 0.3s ease",
              transform: `translateX(${linePosition}%)`,
            }}
          ></Box>
        </Box>
      </Box>
    );
  }
}
