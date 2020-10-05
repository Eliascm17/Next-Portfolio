import { Box, Flex } from '@chakra-ui/core';
import React from 'react'
import ProjectCard from './ProjectCard';
import { projects } from './projectList';

export const Projects: React.FC<{}> = ({}) => {
        return (
          <Flex alignItems="center">
            <Box>
              <ProjectCard
                projectTitle={projects.gft.title}
                descr={projects.gft.desc}
                tech={projects.gft.tech}
                org={projects.gft.org}
                date={projects.gft.date}
                badgeColor={projects.gft.color}
              />
              <ProjectCard
                projectTitle={projects.pam.title}
                descr={projects.pam.desc}
                tech={projects.pam.tech}
                org={projects.pam.org}
                date={projects.pam.date}
                badgeColor={projects.pam.color}
              />
            </Box>
            <Box>
            <ProjectCard
              projectTitle={projects.covid.title}
              descr={projects.covid.desc}
              tech={projects.covid.tech}
              org={projects.covid.org}
              date={projects.covid.date}
              badgeColor={projects.covid.color}
            />
            <ProjectCard
              projectTitle={projects.parser.title}
              descr={projects.parser.desc}
              tech={projects.parser.tech}
              org={projects.parser.org}
              date={projects.parser.date}
              badgeColor={projects.parser.color}
            />
            </Box>
            <Box>
            <ProjectCard
              projectTitle={projects.website.title}
              descr={projects.website.desc}
              tech={projects.website.tech}
              org={projects.website.org}
              date={projects.website.date}
              badgeColor={projects.website.color}
            />
            </Box>
          </Flex>
        );
}

export default Projects;