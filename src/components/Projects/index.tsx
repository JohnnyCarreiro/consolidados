import { ProjectInfo } from './ProjectInfo'

import { Heading, HeadingContainer, ProjectContainer, ProjectWrapper, Text } from './styles'
import { ProjectsProps } from './ProjectsEntity'

export const Projects: React.FC<ProjectsProps> = (projectsSection) => {
  const {
    id,
    lightBg,
    lightText,
    headLine,
    description,
    projects
   } = projectsSection

  return (
    <ProjectContainer id={id}  lightBg={lightBg}>
      <ProjectWrapper>
        <HeadingContainer>
          <Heading lightText={lightText} >{headLine}</Heading>
          <Text lightText={lightText} >{description}</Text>
        </HeadingContainer>
        {projects.map((project) => (
          <ProjectInfo {...project} />
        ))}
      </ProjectWrapper>
    </ProjectContainer>
  )
}
