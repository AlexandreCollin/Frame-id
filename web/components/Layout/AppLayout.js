import React from "react";

// Components
import { Flex, Box, ScaleFade } from "@chakra-ui/react";

export default function AppLayout(props) {
  return (
        <Box bgColor="gray.100">
            <ScaleFade in="true">
              {props.children}
            </ScaleFade>
        </Box>
  );
}
