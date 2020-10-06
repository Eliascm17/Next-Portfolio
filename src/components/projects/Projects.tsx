import { Flex, Stack } from "@chakra-ui/core";
import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "./projectList";

export const Projects: React.FC<{}> = ({}) => {
  return (
    <Stack spacing={8}>
      <Flex justifyContent="space-between">
        <ProjectCard
          projectTitle={projects.gft.title}
          descr={projects.gft.desc}
          tech={projects.gft.tech}
          org={projects.gft.org}
          date={projects.gft.date}
          badgeColor={projects.gft.color}
        />
        <ProjectCard
          projectTitle={projects.capstone.title}
          descr={projects.capstone.desc}
          tech={projects.capstone.tech}
          org={projects.capstone.org}
          date={projects.capstone.date}
          badgeColor={projects.capstone.color}
          url={projects.capstone.url}
        />
      </Flex>
      <Flex justifyContent="space-between">
        <ProjectCard
          projectTitle={projects.covid.title}
          descr={projects.covid.desc}
          tech={projects.covid.tech}
          org={projects.covid.org}
          date={projects.covid.date}
          badgeColor={projects.covid.color}
          url={projects.covid.url}
        />
        <ProjectCard
          projectTitle={projects.parser.title}
          descr={projects.parser.desc}
          tech={projects.parser.tech}
          org={projects.parser.org}
          date={projects.parser.date}
          badgeColor={projects.parser.color}
          url={projects.parser.url}
        />
      </Flex>
      <Flex justifyContent="space-between">
        <ProjectCard
          projectTitle={projects.website.title}
          descr={projects.website.desc}
          tech={projects.website.tech}
          org={projects.website.org}
          date={projects.website.date}
          badgeColor={projects.website.color}
          url={projects.website.url}
        />
        <ProjectCard
          projectTitle={projects.pam.title}
          descr={projects.pam.desc}
          tech={projects.pam.tech}
          org={projects.pam.org}
          date={projects.pam.date}
          badgeColor={projects.pam.color}
        />
      </Flex>
    </Stack>
  );
};

export default Projects;
