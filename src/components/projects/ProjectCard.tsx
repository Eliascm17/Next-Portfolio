import { Badge, Box, Flex, Link } from "@chakra-ui/core";
import React from "react";
import { Hover } from "../utils/Hover";
import NextLink from "next/link";

interface projectCardProps {
  projectTitle: string;
  descr: string;
  tech: string;
  org: string;
  date: string;
  badgeColor: string;
  url?: string;
}

export const ProjectCard: React.FC<projectCardProps> = ({
  projectTitle,
  descr,
  tech,
  org,
  date,
  badgeColor,
  url
}) => {
  return (
    <Hover>
      <Flex
        // ml={10}
        // mt={10}
        w="50"
        maxW="sm"
        maxH="sm"
        borderWidth="1px"
        rounded="lg"
        overflow="hidden"
      >
        <NextLink href={url ? url! : ""}>
          <Box p="6">
            <Box d="flex" alignItems="baseline">
              <Flex justify="space-between">
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
              </Flex>
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
        </NextLink>
      </Flex>
    </Hover>
  );
};

export default ProjectCard;
