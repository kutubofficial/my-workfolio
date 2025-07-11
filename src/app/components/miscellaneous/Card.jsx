import { Box, Button, Image, Link, Text } from "@chakra-ui/react";
import React from "react";

const Card = ({
  tag,
  title,
  description,
  image,
  link,
  view,
  techStack,
  lightMode,
}) => {
  return (
    <Box
      // w={"19rem"}
      w={{ base: "100%", sm: "22rem", md: "22rem", lg: "24rem" }}
      // h={"22rem"}
      h={"26rem"}
      textAlign={"left"}
      bgColor={lightMode ? "#fff" : "#2c2c2c"}
      p={"0.8rem"}
      borderRadius={"0.5rem"}
      boxShadow={lightMode ? "0 0 4px #ededed" : "0 0 4px #454545"}
      pb={"1.3rem"}
      role="group"
    >
      <Box
        w={"100%"}
        h={"60%"}
        bgImage={`url('${image}')`}
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
        bgPos={"center"}
        borderRadius={"0.5rem"}
        position={"relative"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"flex-end"}
        boxShadow={"0 0 3px #e8e8e8"}
        overflow={"hidden"}
      >
        <Box
          _groupHover={{
            bottom: "0%",
          }}
          transition={"0.7s all"}
          position={"absolute"}
          w={"100%"}
          h={"100%"}
          bgColor={"rgba(109, 108, 109, 0.5)"}
          bottom={"-100%"}
        >
          <Box
            display={"flex"}
            gap={"2.5rem"}
            alignItems={"center"}
            w={"100%"}
            h={"100%"}
            justifyContent={"center"}
          >
            <Button
              p={0}
              borderRadius={"full"}
              bgColor={"transparent"}
              _hover={{ bgColor: "transparent" }}
            >
              <Text
                color={"#f1f1f1"}
                fontSize={"1.1rem"}
                bgColor={"rgba(0,0,0,0.4)"}
                transition={"0.3s all"}
                _hover={{ bgColor: "rgba(0,0,0,0.6)" }}
                p={"0.4rem 0.5rem 0.4rem 0.5rem"}
                borderRadius={"full"}
              >
                <Link href={view} isExternal>
                  <i className="fa-solid fa-eye"></i>
                </Link>
              </Text>
            </Button>
            <Button
              p={0}
              borderRadius={"full"}
              bgColor={"transparent"}
              _hover={{ bgColor: "transparent" }}
            >
              <Text
                color={"#f5f5f5"}
                fontSize={"1.4rem"}
                bgColor={"rgba(0,0,0,0.4)"}
                transition={"0.3s all"}
                _hover={{ bgColor: "rgba(0,0,0,0.6)" }}
                p={"0.15rem 0.5rem 0.15rem 0.5rem"}
                borderRadius={"full"}
              >
                <Link href={link} isExternal>
                  <i className="fa-brands fa-github"></i>
                </Link>
              </Text>
            </Button>
          </Box>
          <Text></Text>
        </Box>
        <Box position={"absolute"}>
          <Text
            bgColor={lightMode ? "#fff" : "#2c2c2c"}
            pl={"0.8rem"}
            pr={"0.8rem"}
            pt={"0.4rem"}
            color={lightMode ? "#777" : "#f1f1f1"}
            borderTopLeftRadius={"0.5rem"}
            borderTopRightRadius={"0.5rem"}
            fontSize={"0.8rem"}
          >
            {tag}
          </Text>
        </Box>
      </Box>
      <Box
        mt={"1rem"}
        w={"100%"}
        textAlign={"center"}
        fontWeight={"500"}
        color={lightMode ? "#222" : "#e1e1e1"}
      >
        <Text>{title}</Text>
      </Box>
      <Box
        mt={"0.6rem"}
        w={"100%"}
        textAlign={"justify"}
        fontSize={"0.9rem"}
        color={lightMode ? "#777" : "#c1c1c1"}
      >
        <Text>{description}</Text>
      </Box>
      <Box
        mt={"0.6rem"}
        display={"flex"}
        flexWrap={"wrap"}
        gap={"0.5rem"}
        fontSize={"0.75rem"}
        color={lightMode ? "#444" : "#ccc"}
      >
        {techStack?.map((tech, index) => (
          <Text
            key={index}
            bgColor={lightMode ? "#e8e8e8" : "#444"}
            p={"0.2rem 0.5rem"}
            borderRadius={"0.3rem"}
          >
            {tech}
          </Text>
        ))}
      </Box>
    </Box>
  );
};

export default Card;
