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

export default function SignInPage({ onSuccess, ...props }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  const onSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("http://127.0.0.1:8080/auth/login", {
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
      <Heading as="h1" size="4xl" color="primary.500" align="center" cursor="pointer">
        Sign In
      </Heading>
    </Section>
    <Section>
    <CustomCard >
        <Text fontSize="sm" color="gray.500" flexShrink="0">
          Connect with your email
        </Text>

      <form onSubmit={onSignIn}>
        <Stack spacing={4}>
          <FormControl isRequired>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              type="email"
              value={email}
              placeholder="Enter email"
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor="password">Password</FormLabel>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type="password"
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
            isLoading={loading}
            onClick={onSignIn}
          >
            Sign in
          </Button>
        </Flex>

        {/* <Text fontSize="sm" color="gray.500" textAlign="center">
          Not registered yet ?{" "}
          <NextLink href={`/register`} passHref>
            <Link color="primary.500" fontWeight="medium">
              Register
            </Link>
          </NextLink>
        </Text> */}
      </form>
      </CustomCard>
      </Section>
      </>
  );
}
