import React from "react";

// Components
import NextLink from "next/link";
import { Heading, Box, Image, Flex, Button, Text } from "@chakra-ui/react";
import CustomCard from "../components/UI/CustomCard";
import Section from "../components/UI/Section";

export default function HomePage() {
  return (
    <Section>
      <CustomCard bgColor="#101010" maxW="4xl">
        <Box align="center">
        <Heading as="h1" size="4xl" color="#F6F5F6" align="center" cursor="pointer">
          Now have fun !
        </Heading>
        </Box>
      </CustomCard>
    </Section>
  );
}
