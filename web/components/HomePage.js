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
          Welcome to
        </Heading>
        <Heading as="h1" size="4xl" color="primary.500" align="center" cursor="pointer">
          Smart-ID
        </Heading>
        <Text color="#8C8E97">Create your account or login now !</Text>
        </Box>
        <Box align="center" mt={{ base: 6, md: 9 }}>
          <Image
            src="/images/security.svg"
            alt="Image"
            justify="center"
            boxSize="50%"
            borderRadius="md"
            objectFit="cover"
          />
          <Flex mt={9} mb={2} justify="center" gap={10}>
            <NextLink href="/login">
            <Button size="lg" colorScheme="primary">
                Sign In
            </Button>
            </NextLink>
            <NextLink href="/register">
            <Button size="lg" colorScheme="primary">
                Sign up
            </Button>
            </NextLink>
          </Flex>
        </Box>
      </CustomCard>
    </Section>
  );
}
