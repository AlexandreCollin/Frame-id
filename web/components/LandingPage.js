import React from "react";

// Components
import NextLink from "next/link";
import { Heading, Box, Image, Flex, Button, HStack, Text, Grid} from "@chakra-ui/react";
import CustomCard from "../components/UI/CustomCard";
import Section from "../components/UI/Section";

export default function HomePage() {
  return (
    <>
      <Flex p={12} bg="#1F2125" justify="space-between">
       <HStack spacing={350}>
        <Box>
        <Flex>
        <Text fontSize="4xl" color="#F6F5F6">
          Welcome back,
        </Text>
        <Text ml={2} fontSize="4xl" fontWeight="bold" color="primary.500">{" "}Alexandre</Text>
        </Flex>
        
        <Text fontSize="xl" color="#8C8E97" mt={2} ml={5}>
          Here you can manage your documents, your identity and your security !
        </Text>
        </Box>
        <Box>
          <Text fontSize="2xl" color="#F6F5F6" mt={10} mb={5}>
            Today's date
          </Text>
          <Text fontSize="xl" color="#8C8E97" mb={5}>
            12/12/2021
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
          </HStack>
      </Flex>
      <Box bg="primary.500" p={5}>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <CustomCard bgColor="#101010" maxW="4xl">
            <Text color="white">Passeport</Text>
          </CustomCard>
          <CustomCard bgColor="#101010" maxW="4xl">
            <Text color="white">CV</Text>
          </CustomCard>
          <CustomCard bgColor="#101010" maxW="4xl">
            <Text color="white">truc</Text>
          </CustomCard>
          <CustomCard bgColor="#101010" maxW="4xl">
            <Text color="white">OK DEDANS</Text>
          </CustomCard>
          <CustomCard bgColor="#101010" maxW="4xl">
            <Text color="white">OK DEDANS</Text>
          </CustomCard>
          <CustomCard bgColor="#101010" maxW="4xl">
            <Text color="white">OK DEDANS</Text>
          </CustomCard>
          <CustomCard bgColor="#101010" maxW="4xl">
            <Text color="white">OK DEDANS</Text>
          </CustomCard>
          <CustomCard bgColor="#101010" maxW="4xl">
            <Text color="white">OK DEDANS</Text>
          </CustomCard>
          <CustomCard bgColor="#101010" maxW="4xl">
            <Text color="white">OK DEDANS</Text>
          </CustomCard>
          <CustomCard bgColor="#101010" maxW="4xl">
            <Text color="white">OK DEDANS</Text>
          </CustomCard>
          <CustomCard bgColor="#101010" maxW="4xl">
            <Text color="white">OK DEDANS</Text>
          </CustomCard>
          <CustomCard bgColor="#101010" maxW="4xl">
            <Text color="white">OK DEDANS</Text>
          </CustomCard>
          <CustomCard bgColor="#101010" maxW="4xl">
            <Text color="white">OK DEDANS</Text>
          </CustomCard>
          <CustomCard bgColor="#101010" maxW="4xl">
            <Text color="white">OK DEDANS</Text>
          </CustomCard>
          <CustomCard bgColor="#101010" maxW="4xl">
            <Text color="white">OK DEDANS</Text>
          </CustomCard>
          </Grid>
      </Box>
      </>
  );
}
