import { Badge, Box, Flex, Image, Link, Text } from "@chakra-ui/core";
import React from "react";
import { motion } from "framer-motion";
import { title } from "process";
import { Hover } from "../utils/hover";

interface projectCardProps {
  projectTitle: String;
  descr: String;
  tech: String;
  org: String;
  date: String;
  badgeColor: string;
}

export const ProjectCard: React.FC<projectCardProps> = ({
  projectTitle,
  descr,
  tech,
  org,
  date,
  badgeColor,
}) => {
  return (
    <Hover>
      <Box
        // ml={10}
        // mt={10}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        overflow="hidden"
      >
        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <Badge rounded="full" px="2" variantColor={badgeColor}>
              {org}
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              // textTransform="uppercase"
              ml="2"
            >
              {date}
            </Box>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {projectTitle}
          </Box>

          <Box>{descr}</Box>
          <br />
          <Box as="span" color="gray.600" fontSize="sm">
            Technologies used: {tech}
          </Box>
          <Box d="flex" mt="2" alignItems="center"></Box>
        </Box>
      </Box>
    </Hover>
  );
};

export default ProjectCard;
