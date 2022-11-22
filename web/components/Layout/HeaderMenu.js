import React from "react";

// Components
import { Flex, Box, Image, Heading } from "@chakra-ui/react";

export default function HeaderMenu(props) {
  return (
    <Box w="full" h={125} bgColor="#1F2125" borderBottom="1px solid" borderColor="#34363C">
        <Heading size="2xl" color="#F6F5F6" p={8}>
          Frame - ID
        </Heading>
    </Box>
  );
}
