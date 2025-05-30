"use client";

import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Typed from "typed.js";
import { ArrowForwardIcon, DownloadIcon } from "@chakra-ui/icons";
import Image from "next/image";
import Socials from "./miscellaneous/Socials";
import { BoltIcon, BulbIcon, CodeIcon, LaptopIcon } from "./utils/randomIcons";
import Link from "next/link";
// #5E3BE3

const Home = ({ lightMode, setLightMode }) => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Developer", "Frontend Developer", "MERN Stack Developer"],
      typeSpeed: 100,
      smartBackspace: true,
      loop: true,
      backSpeed: 100,
      cursorChar: "",
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, [el]);

  return (
    <Box
      w={{ base: "100vw", md: "100vw", lg: "100vw" }}
      h={{ base: "80vh", md: "100vh", lg: "100vh" }}
      bgColor={"#f5f5f5"}
      _before={{
        content: `""`,
        w: lightMode ? "0%" : "180%",
        h: lightMode ? "0%" : "180%",
        bgColor: "#2c2c2c",
        position: "absolute",
        left: 0,
        zIndex: -999,
        transition: "width 1s, height 1s",
        borderBottomRightRadius: "100%",
      }}
      position={"relative"}
      userSelect={"none "}
      draggable={false}
      zIndex={1}
      overflow={"hidden"}
    >
      <Box w={"100%"}>
        <Navbar lightMode={lightMode} setLightMode={setLightMode} />
      </Box>
      <Box pl={["1.5rem", "3rem", "5rem"]} pr={["1.5rem", "3rem", "5rem"]}>
        <HStack w={"100%"} h={"100%"} alignItems={"flex-start"}>
          <Box w={"55%"} fontFamily={"Rubik"} pt={"5rem"} h={"100%"}>
            <Box>
              <Box
                display={["block", "flex", "flex"]}
                flexWrap={["nowrap", "nowrap", "nowrap"]}
              >
                <Text
                  fontSize={["2.7rem", "2.7rem", "2.7rem"]}
                  fontWeight={"500"}
                  color={lightMode ? "#333" : "#f1f1f1"}
                  display={"flex"}
                >
                  Hi, I&apos;m&nbsp;
                </Text>
                <Text
                  color={"#5580E9"}
                  textShadow={lightMode ? "2px 2px 4px #c9c9c9" : null}
                  fontSize={["2.7rem", "2.3rem", "2.8rem"]}
                  w={["300%", "125%", "auto"]}
                >
                  Kutubuddin Ansari
                </Text>
                <Box
                  position={"absolute"}
                  zIndex={-1}
                  left={"2.1rem"}
                  top={"35rem"}
                  bottom={["21.5rem", "22.5rem", "10.5rem"]}
                >
                  <Text
                    fontWeight={"400"}
                    fontSize={["1.7rem", "4.5rem", "4.5rem"]}
                    color={lightMode ? "#e2dcdc" : "#3f3e3e"}
                    transition={"0.7s all"}
                    textShadow={lightMode ? null : "0px 0px #5b5b5b"}
                  >
                    MERN STACK DEVELOPER
                  </Text>
                </Box>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                w={"170%"}
                pt={["0.5rem", 0, 0]}
              >
                <Text
                  fontSize={["1.7rem", "1.7rem", "1.9rem"]}
                  color={lightMode ? "#333" : "#f1f1f1"}
                >
                  A&nbsp;
                </Text>
                <Text
                  fontSize={["1.7rem", "1.7rem", "1.9rem"]}
                  color={"#5580E9"}
                  ref={el}
                  display={"inline-block"}
                ></Text>
              </Box>
            </Box>
            {/* buttons */}
            <Box
              display={"flex"}
              alignItems={"center"}
              marginTop={"4rem"}
              gap={["0.5rem", "1rem", "2rem"]}
              ml={["-0.5rem", 0, 0]}
            >
              <Link href="#contact">
                <Box>
                  <Button
                    colorScheme={"blue"}
                    px={"2rem"}
                    py={"1.3rem"}
                    position={"relative"}
                    transition={"0.7s all"}
                    bgColor={lightMode ? "#f5f5f5" : "#333"}
                    transform={["scale(0.95)", "scale(0.95)", "scale(1)"]}
                    color={lightMode ? "#333" : "#f1f1f1"}
                    border={"1.5px solid #5580E9"}
                    zIndex={1}
                    boxShadow={
                      lightMode ? "2px 2px 3px #d5d5d5" : "2px 2px 3px #444"
                    }
                    overflow={"hidden"}
                    _before={{
                      content: `""`,
                      position: "absolute",
                      w: "100%",
                      height: "100%",
                      bgColor: "#5580E9",
                      right: "100%",
                      transition: "0.7s all",
                    }}
                    _hover={{
                      _before: { right: "0%", zIndex: -1 },
                      color: "#f5f5f5",
                      border: "1.5px solid #5580E9",
                    }}
                  >
                    Hire Me
                  </Button>
                </Box>
              </Link>
              <Box>
                <a href="/Resume.pdf" download="kutubuddin_Ansari.pdf">
                  <Button
                    bgColor={"#5580E9"}
                    transform={["scale(0.95)", "scale(0.95)", "scale(1)"]}
                    color={"#f5f5f5"}
                    px={"1rem"}
                    py={"1.4rem"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    role="group"
                    boxShadow={
                      lightMode ? "1px 1px 7px #749bfc" : "1px 1px 7px #555"
                    }
                    _hover={{ bgColor: "#5a85f2" }}
                  >
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      position={"relative"}
                      w={"90%"}
                      overflow={"hidden"}
                    >
                      <Box
                        display={"flex"}
                        position={"relative"}
                        left={"-12%"}
                        transition={"0.5s all"}
                        _groupHover={{ left: "0%" }}
                        justifyContent={"center"}
                      >
                        <DownloadIcon fontSize={"1.1rem"} />
                        &nbsp;&nbsp;&nbsp;
                        <Text>Download CV&nbsp;&nbsp;&nbsp;</Text>
                        <ArrowForwardIcon fontSize={"1.1rem"} />
                      </Box>
                    </Box>
                  </Button>
                </a>
              </Box>
            </Box>
            <Box mt={"3rem"}>
              <Socials lightMode={lightMode} setLightMode={setLightMode} />
            </Box>
          </Box>

          <Box w={"45%"} margin={"85px"} display={["none", "block", "block"]}>
            <Box>
              <Image
                className="homeImg"
                src={lightMode ? "/images/img1.png" : "/images/img1.png"}
                width={400}
                height={400}
                alt="Home Image"
              />
            </Box>
          </Box>
        </HStack>
      </Box>
      <Box display={["none", "none", "block"]}>
        <BoltIcon top={100} right={200} />
        <BulbIcon bottom={2} left={500} />
        <CodeIcon top={160} right={30} />
        <LaptopIcon top={440} left={680} />
      </Box>
    </Box>
  );
};

export default Home;
