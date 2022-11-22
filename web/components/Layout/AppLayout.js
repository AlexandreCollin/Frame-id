import React from "react";

// Components
import { Flex, Box, ScaleFade } from "@chakra-ui/react";
import HeaderMenu from "./HeaderMenu";

export default function AppLayout(props) {
  return (
        <Box bgColor="gray.100">
          <HeaderMenu />
            <ScaleFade in="true">
              {props.children}
            </ScaleFade>
        </Box>
  );
}
