import React from "react";
import { Box, Button, Flex } from "@chakra-ui/core";

const Header: React.FC<{}> = ({}) => {
  return (
    <>
      <Flex zIndex={1} position="sticky" top={0} bg="tomato" p={4}>
        <Box ml={"auto"}></Box>
      </Flex>
    </>
  );
};

export default Header;
