import React from "react";

// Components
import NextLink from "next/link";
import {
  Heading,
  Box,
  Image,
  Flex,
  Button,
  HStack,
  Text,
  SimpleGrid
} from "@chakra-ui/react";
import CustomCard from "../components/UI/CustomCard";
import Section from "../components/UI/Section";

export default function HomePage() {
  return (
    <>
      <Flex p={12} bg="#1F2125" justify="space-between">
          <Box>
            <Flex fontSize={{base: "4xl", md: "6xl"}}>
              <Text  color="#F6F5F6">
                Welcome back,
              </Text>
              <Text ml={2}  fontWeight="bold" color="primary.500">
                {" "}
                Alexandre
              </Text>
            </Flex>

            <Text fontSize="xl" color="#8C8E97" mt={2} ml={5}>
              Here you can manage your documents, your identity and your
              security !
            </Text>
          </Box>
          <Box>
            <Text fontSize="2xl" color="#F6F5F6" mt={10} mb={5}>
              Your last connection
            </Text>
            <Text fontSize="xl" color="#8C8E97" mb={5}>
              12/12/2021
            </Text>
          </Box>
      </Flex>
      <Box bg="#101010" p={5}>
        <SimpleGrid templateColumns={{base: "repeat(1, 1fr)", md: "repeat(3, 1fr)"}} gap={6}>
          {Array.apply(null, Array(6)).map((_, i) => (
          <CustomCard
            key={i}
            title="Documents"
            description="Manage your documents"
            icon="document"
            link="/documents"
            h={400}
            _hover={{
              transform: "scale(1.02)",
              transition: "0.3s",
              boxShadow: "md",
            }}
          />
          ))}
        </SimpleGrid>
        
      </Box>
    </>
  );
}
