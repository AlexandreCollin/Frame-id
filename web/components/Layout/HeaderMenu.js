import React from "react";

// Components
import { Flex, Image, Avatar, Text, VStack, Button, Hide } from "@chakra-ui/react";

//Icons
import UploadIcon from "../Icon/UploadIcon";

export default function HeaderMenu(props) {
  return (
    <Flex
      w="full"
      h={100}
      bgColor="#1F2125"
      borderBottom="1px solid"
      borderColor="#34363C"
      p={8}
      align="center"
      justify="space-between"
    >
      <Image
        src="/images/frame-id.png"
        alt="FrameID"
        w={155}
        h={59}
        justify="center"
      />
      <Flex align="center">
        <Button
          mr={5}
          colorScheme="primary"
          leftIcon={
            <UploadIcon
              w="auto"
              h={35}
              color="#1F2125"
              />
          }
        >
          New document
        </Button>
        <Avatar name="Antoine" mr={5} />
        <Hide below="md">
        <VStack display="block">
          <Text fontWeight="medium" color="white">
            Alexandre
          </Text>
          <Text fontSize="sm" color="gray.500">
            Member since 5 days
          </Text>
        </VStack>
        </Hide>
      </Flex>
    </Flex>
  );
}
