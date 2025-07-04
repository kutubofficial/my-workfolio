import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import {
  BoltIcon,
  BranchIcon,
  BugIcon,
  FolderIcon,
  LaptopIcon,
  NodeIcon,
} from "./utils/randomIcons";

const Education = ({ lightMode }) => {
  const hoverCardStyle = {
    transition: "all 0.3s ease-in-out",
    _hover: {
      transform: "translateY(-8px) scale(1.02)",
      boxShadow: lightMode
        ? "4px 4px 15px rgba(0, 0, 0, 0.1)"
        : "4px 4px 15px rgba(255, 255, 255, 0.1)",
    },
  };

  return (
    <Box
      id="education"
      w={{ base: "100vw", md: "100vw", lg: "100vw" }}
      minH={"110vh"}
      bgColor={lightMode ? "#f5f5f5" : "#2c2c2c"}
      pl={["1.5rem", "3rem", "5rem"]}
      pr={["1.5rem", "3rem", "5rem"]}
      pt={"4rem"}
      fontFamily={"Rubik"}
      position={"relative"}
    >
      <Box
        w={"100%"}
        display={"flex"}
        justifyContent={"left"}
        position={"relative"}
        _before={{
          content: `""`,
          position: "absolute",
          bottom: 0,
          left: [-4, -7, -10],
          height: "7%",
          width: "35%",
          bgColor: "#5580E9",
          borderRadius: "1rem",
        }}
      >
        <Text
          fontSize={"2.5rem"}
          fontWeight={"700"}
          color={lightMode ? "#000" : "#f1f1f1"}
        >
          QUALIFICATIONS
        </Text>
      </Box>

      <Tabs variant="unstyled" mt={"3rem"}>
        <TabList display={"flex"} justifyContent={"center"} gap={"1rem"}>
          <Tab
            _selected={{
              color: "#f5f5f5",
              bg: "#5580E9",
              boxShadow: lightMode ? "2px 2px 5px #b8b8b8" : "2px 2px 5px #444",
            }}
            color={lightMode ? "#333" : "#f1f1f1"}
            border={"1px solid"}
            borderColor={lightMode ? "#e1e1e1" : "#444"}
            borderRadius={"0.5rem"}
            fontWeight={"500"}
          >
            Education
          </Tab>
          <Tab
            _selected={{
              color: "#f5f5f5",
              bg: "#5580E9",
              boxShadow: lightMode ? "2px 2px 5px #b8b8b8" : "2px 2px 5px #444",
            }}
            color={lightMode ? "#333" : "#f1f1f1"}
            border={"1px solid"}
            borderColor={lightMode ? "#e1e1e1" : "#444"}
            borderRadius={"0.5rem"}
            fontWeight={"500"}
          >
            Certifications
          </Tab>
        </TabList>

        <TabPanels mt={"2rem"}>
          <TabPanel>
            <VStack spacing={8} align="stretch">
              <Box
                {...hoverCardStyle}
                bg={lightMode ? "#EDF1F7" : "#333"}
                p={6}
                borderRadius="lg"
                boxShadow={
                  lightMode ? "2px 2px 5px #d5d5d5" : "2px 2px 5px #222"
                }
              >
                <HStack justifyContent="space-between">
                  <Text
                    fontWeight="600"
                    fontSize="1.2rem"
                    color={lightMode ? "#333" : "#f1f1f1"}
                  >
                    Master of Computer Science (MCA)
                  </Text>
                  <Text color="#5580E9" fontWeight="500">
                    2024 - Present
                  </Text>
                </HStack>
                <Text
                  mt={2}
                  color={lightMode ? "#555" : "#ccc"}
                  fontStyle="italic"
                >
                  Arunachal University of Studies, Arunachal Pradesh
                </Text>
                <Text mt={4} color={lightMode ? "#333" : "#f1f1f1"}>
                  Relevant coursework: Data Structures & Algorithms,
                  Object-Oriented Programming, Operating Systems, Computer
                  Networks, Database Management Systems, Software Engineering,
                  Data Science Fundamentals.
                </Text>
              </Box>
              <Box
                {...hoverCardStyle}
                bg={lightMode ? "#EDF1F7" : "#333"}
                p={6}
                borderRadius="lg"
                boxShadow={
                  lightMode ? "2px 2px 5px #d5d5d5" : "2px 2px 5px #222"
                }
              >
                <HStack justifyContent="space-between">
                  <Text
                    fontWeight="600"
                    fontSize="1.2rem"
                    color={lightMode ? "#333" : "#f1f1f1"}
                  >
                    Diploma in Information Technology
                  </Text>
                  <Text color="#5580E9" fontWeight="500">
                    2022 - 2023
                  </Text>
                </HStack>
                <Text
                  mt={2}
                  color={lightMode ? "#555" : "#ccc"}
                  fontStyle="italic"
                >
                  Lal Bahadur Shastri Training Institute, Noida
                </Text>
                <Text mt={4} color={lightMode ? "#333" : "#f1f1f1"}>
                  Relevant coursework: C, C++, Java, DHTML, Visual Basic and
                  MS-Office <br />
                  CGPA: 6.5
                </Text>
              </Box>
              <Box
                {...hoverCardStyle}
                bg={lightMode ? "#EDF1F7" : "#333"}
                p={6}
                borderRadius="lg"
                boxShadow={
                  lightMode ? "2px 2px 5px #d5d5d5" : "2px 2px 5px #222"
                }
              >
                <HStack justifyContent="space-between">
                  <Text
                    fontWeight="600"
                    fontSize="1.2rem"
                    color={lightMode ? "#333" : "#f1f1f1"}
                  >
                    Bachelor of Arts
                  </Text>
                  <Text color="#5580E9" fontWeight="500">
                    2019 - 2022
                  </Text>
                </HStack>
                <Text
                  mt={2}
                  color={lightMode ? "#555" : "#ccc"}
                  fontStyle="italic"
                >
                  Deen Dayal Upadhyaya Gorakhpur University, Gorakhpur U.P.
                </Text>
                <Text mt={4} color={lightMode ? "#333" : "#f1f1f1"}>
                  Relevant coursework: Sociology, Political Science and
                  Education <br />
                  CGPA: 7.2
                </Text>
              </Box>

              {/* Education Item 2 */}
              <Box
                {...hoverCardStyle}
                bg={lightMode ? "#EDF1F7" : "#333"}
                p={6}
                borderRadius="lg"
                boxShadow={
                  lightMode ? "2px 2px 5px #d5d5d5" : "2px 2px 5px #222"
                }
              >
                <HStack justifyContent="space-between">
                  <Text
                    fontWeight="600"
                    fontSize="1.2rem"
                    color={lightMode ? "#333" : "#f1f1f1"}
                  >
                    Higher Secondary Education (12th Grade)
                  </Text>
                  <Text color="#5580E9" fontWeight="500">
                    2017 - 2018
                  </Text>
                </HStack>
                <Text
                  mt={2}
                  color={lightMode ? "#555" : "#ccc"}
                  fontStyle="italic"
                >
                  Lal Bahadur Shastri Inter College, Pipra Madam Gopal, Deoria
                  U.P.
                </Text>
                <Text mt={4} color={lightMode ? "#333" : "#f1f1f1"}>
                  Percentage: 70%
                </Text>
              </Box>
              <Box
                {...hoverCardStyle}
                bg={lightMode ? "#EDF1F7" : "#333"}
                p={6}
                borderRadius="lg"
                boxShadow={
                  lightMode ? "2px 2px 5px #d5d5d5" : "2px 2px 5px #222"
                }
              >
                <HStack justifyContent="space-between">
                  <Text
                    fontWeight="600"
                    fontSize="1.2rem"
                    color={lightMode ? "#333" : "#f1f1f1"}
                  >
                    Senior Secondary Education (10th Grade)
                  </Text>
                  <Text color="#5580E9" fontWeight="500">
                    2015 - 2016
                  </Text>
                </HStack>
                <Text
                  mt={2}
                  color={lightMode ? "#555" : "#ccc"}
                  fontStyle="italic"
                >
                  Shree Hari Narayan Inter College, Pipra Madam Gopal, Deoria
                  U.P.
                </Text>
                <Text mt={4} color={lightMode ? "#333" : "#f1f1f1"}>
                  Percentage: 80%
                </Text>
              </Box>
            </VStack>
          </TabPanel>

          <TabPanel>
            <VStack spacing={8} align="stretch">
              {/* Certification 1 */}
              <Box
                {...hoverCardStyle}
                bg={lightMode ? "#EDF1F7" : "#333"}
                p={6}
                borderRadius="lg"
                boxShadow={
                  lightMode ? "2px 2px 5px #d5d5d5" : "2px 2px 5px #222"
                }
              >
                <HStack justifyContent="space-between">
                  <Text
                    fontWeight="600"
                    fontSize="1.2rem"
                    color={lightMode ? "#333" : "#f1f1f1"}
                  >
                    Full Stack Web Development Certification
                  </Text>
                  <Text color="#5580E9" fontWeight="500">
                    2024
                  </Text>
                </HStack>
                <Text
                  mt={2}
                  color={lightMode ? "#555" : "#ccc"}
                  fontStyle="italic"
                >
                  Q Spiders Training Institute, Noida U.P.
                </Text>
                <Text mt={4} color={lightMode ? "#333" : "#f1f1f1"}>
                  Gained hands-on experience in the MERN stack. Built and
                  deployed full-stack projects including Twitter Clone, Crypto
                  Tracker, and Task Manager.
                </Text>
              </Box>

              <Box
                {...hoverCardStyle}
                bg={lightMode ? "#EDF1F7" : "#333"}
                p={6}
                borderRadius="lg"
                boxShadow={
                  lightMode ? "2px 2px 5px #d5d5d5" : "2px 2px 5px #222"
                }
              >
                <HStack justifyContent="space-between">
                  <Text
                    fontWeight="600"
                    fontSize="1.2rem"
                    color={lightMode ? "#333" : "#f1f1f1"}
                  >
                    Web Development Training
                  </Text>
                  <Text color="#5580E9" fontWeight="500">
                    2025
                  </Text>
                </HStack>
                <Text
                  mt={2}
                  color={lightMode ? "#555" : "#ccc"}
                  fontStyle="italic"
                >
                  Nullclass
                </Text>
                <Text mt={4} color={lightMode ? "#333" : "#f1f1f1"}>
                  Focused on advanced frontend development with React.js, Hooks,
                  Context API, Redux, and performance optimization techniques.
                </Text>
              </Box>
            </VStack>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Box display={["none", "none", "block"]}>
        <BoltIcon top={200} right={150} />
        <LaptopIcon top={180} left={200} pos={"absolute"} />
        <BranchIcon top={280} left={370} />
        <NodeIcon right={360} bottom={130} />
        <BugIcon bottom={2} left={450} />
      </Box>
    </Box>
  );
};

export default Education;
