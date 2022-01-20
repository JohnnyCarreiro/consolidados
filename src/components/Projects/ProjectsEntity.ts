import { ProjectInfoProps } from "./ProjectInfo/ProjectInfoEntity";

export type ProjectsProps = {
  id: string
  lightBg: boolean
  lightText: boolean
  headLine: string
  description: string
  projects: ProjectInfoProps[]
}
