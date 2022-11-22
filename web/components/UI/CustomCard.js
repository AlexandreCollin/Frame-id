import React from "react";

// Components
import { Box } from "@chakra-ui/react";

export default function CustomCard(props) {
  return (
    <Box
      bgColor="white"
      borderRadius="xl"
      boxShadow="sm"
      mx="auto"
      w="full"
      maxW="2xl"
      px={{ base: 6, md: 8 }}
      py={{ base: 6, md: 8 }}
      {...props}
    >
      {props.children}
    </Box>
  );
}
