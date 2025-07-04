"use client";

import { useState } from "react";
import { Box, Button, Input, Text, Textarea, useToast } from "@chakra-ui/react";
import { Tilt } from "react-tilt";
import {
  BoltIcon,
  BranchIcon,
  BugIcon,
  BulbIcon,
  LaptopIcon,
  NodeIcon,
} from "./utils/randomIcons";

const Contact = ({ lightMode }) => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const defaultOptions = {
    reverse: false,
    max: 25,
    perspective: 1000,
    scale: 1,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!name || !mail || !message) {
      toast({
        title: "Please fill all the fields",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(mail)) {
      toast({
        title: "Please enter a valid email address",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email: mail, message }),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "I'll get back to you soon.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        setName("");
        setMail("");
        setMessage("");
      } else {
        throw new Error(data.message || "Failed to send message.");
      }
    } catch (error) {
      console.error("Send error:", error);
      toast({
        title: "Failed to send message",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      id="contact"
      w={"100vw"}
      h={["85vh", "100vh", "110vh"]}
      bgColor={lightMode ? "#f5f5f5" : "#2c2c2c"}
      px={["1rem", "3rem", "5rem"]}
      pt={"3rem"}
      fontFamily={"Rubik"}
      position={"relative"}
    >
      <Tilt options={defaultOptions}>
        <Box
          bgGradient="linear-gradient(90deg, rgba(85,128,233,0.2) 20%, rgba(85,128,233,0.4) 45%, rgba(85,128,233,0.2) 100%)"
          pt={"1rem"}
          pb={"2rem"}
          borderRadius={"1rem"}
          boxShadow={lightMode ? "0 0 4px #dfdfdf" : "0 0 7px #343c51"}
        >
          <Box w={"100%"} display={"flex"} justifyContent={"center"}>
            <Text
              fontSize={"2.5rem"}
              fontWeight={"700"}
              position={"relative"}
              color={lightMode ? "#333" : "#f1f1f1"}
              _before={{
                content: '""',
                position: "absolute",
                bottom: 0,
                left: 10,
                height: "7%",
                width: "70%",
                bgColor: "#5580E9",
                borderRadius: "1rem",
              }}
            >
              Get In Touch
            </Text>
          </Box>

          <Box
            as="form"
            onSubmit={sendEmail}
            display={"flex"}
            pt={"3rem"}
            flexDir={"column"}
            justifyContent={"center"}
            w={["75%", "90%", "50%"]}
            alignItems={"center"}
            gap={"2rem"}
            margin={"auto"}
          >
            <Input
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              bgColor={lightMode ? "#EDF1F7" : "#333"}
              color={lightMode ? "#333" : "#d1d1d1"}
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              bgColor={lightMode ? "#EDF1F7" : "#333"}
              color={lightMode ? "#333" : "#d1d1d1"}
            />
            <Textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              resize={"none"}
              bgColor={lightMode ? "#EDF1F7" : "#333"}
              color={lightMode ? "#333" : "#d1d1d1"}
            />

            <Button
              type="submit"
              px={"2.5rem"}
              py={"1.3rem"}
              isLoading={loading}
              bgColor={"rgba(85,128,233, 0.6)"}
              color={"#f5f5f5"}
              _hover={{ bgColor: "rgba(85,128,233, 0.8)" }}
            >
              Send Message
            </Button>
          </Box>
        </Box>

        <Box display={["none", "none", "block"]}>
          <BulbIcon bottom={400} left={150} />
          <BranchIcon top={430} left={300} />
          <NodeIcon right={150} bottom={230} />
          <BugIcon bottom={5} left={750} />
          <LaptopIcon top={50} left={750} />
        </Box>
      </Tilt>
    </Box>
  );
};

export default Contact;
