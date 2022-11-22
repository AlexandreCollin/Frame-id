import React from "react";

import { Box } from "@chakra-ui/react";

export default function Section({ maxW, ...props }) {
  return (
    <Box px={{ base: 4, sm: 6, md: 8 }} py={{ base: 4, md: 8 }} {...props}>
      <Box maxW={maxW || "5xl"} mx="auto">
        {props.children}
      </Box>
    </Box>
  );
}
