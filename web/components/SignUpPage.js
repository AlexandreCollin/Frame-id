import React from "react";

import { useRouter } from "next/router";
import axios from "axios";
// Components
import NextLink from "next/link";
import CustomCard from "./UI/CustomCard";
import Section from "./UI/Section";
import {
  Flex,
  Heading,
  Stack,
  Text,
  Link,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  useToast,
} from "@chakra-ui/react";

export default function SignUpForm({ onSuccess, ...props }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const onSignUp = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://127.0.0.1:8080/auth/register", {
        email,
        password,
      });
      router.push("/landing");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Section>
        <Heading
          as="h1"
          size="4xl"
          color="primary.500"
          align="center"
          cursor="pointer"
        >
          Sign Up
        </Heading>
      </Section>
      <Section>
        <CustomCard bgColor="#02020E">
          <Text fontSize="sm" color="gray.500" flexShrink="0">
            Register with your email
          </Text>

          <form onSubmit={onSignUp}>
            <Stack spacing={4}>
              <FormControl isRequired>
                <FormLabel htmlFor="email" color="primary.500">Email</FormLabel>
                <Input
                  type="email"
                  value={email}
                  color="white"
                  border="none"
                  placeholder="Enter email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel htmlFor="password" color="primary.500">Password</FormLabel>
                <InputGroup size="md">
                  <Input
                    pr="4.5rem"
                    type="password"
                    color="white"
                    border="none"
                    placeholder="Enter password"
                    autoComplete="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </InputGroup>
              </FormControl>
            </Stack>

            <Flex mt={6} mb={4}>
              <Button
                colorScheme="secondary"
                w="full"
                type="submit"
                onClick={onSignUp}
              >
                Sign up
              </Button>
            </Flex>

            <Text fontSize="sm" color="gray.500" textAlign="center">
              Already have an account ?{" "}
              <NextLink href={`/login`} passHref>
                Login
              </NextLink>
            </Text>
          </form>
        </CustomCard>
      </Section>
    </>
  );
}
