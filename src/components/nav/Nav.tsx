import React from "react";
import { Box, Button, Flex } from "@chakra-ui/core";

const Nav: React.FC<{}> = ({}) => {
  return (
    <>
      <Flex zIndex={1} position="sticky" top={0} bg="#1C3738" p={4}>
        <Box ml={"auto"} flex="space-between">
          <Button variantColor="teal" variant="link">
            Intro
          </Button>
          <Button variantColor="teal" variant="link">
            Experience
          </Button>
          <Button variantColor="teal" variant="link">
            Projects
          </Button>
          <Button variantColor="teal" variant="link">
            Contact
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default Nav;
