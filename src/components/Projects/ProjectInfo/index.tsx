import { Button } from '@/components/Button/ButtonElements'
import { ProjectInfoProps } from './ProjectInfoEntity'

import { BtnWrapper, Column1, Column2, Heading, Img, ImgWrapper, InfoRow, Subtitle, TextWrapper, TopLine } from './styles'

export const ProjectInfo:React.FC<ProjectInfoProps> = (projectInfoProps) => {
  const {
    lightText,
    topLine,
    headLine,
    description,
    buttonLabel,
    scrollToId,
    imgStart,
    img,
    alt,
    dark,
    primary,
  } = projectInfoProps
  return (
    <InfoRow imgStart={imgStart} >
      <Column1>
        <TextWrapper>
          <TopLine>{topLine}</TopLine>
          <Heading lightText={lightText} >{headLine}</Heading>
          <Subtitle lightText={lightText} dangerouslySetInnerHTML={{__html: description}} />
          <BtnWrapper>
            <Button
              primary={primary}
              dark={dark}
              to={scrollToId}
              smooth={true}
              duration={500}
              spy={true}
              // exact="true"
              offset={-80}
            >
              {buttonLabel}
            </Button>
          </BtnWrapper>
        </TextWrapper>
      </Column1>
      <Column2>
        <ImgWrapper>
          <Img src={img.src} alt={alt} />
        </ImgWrapper>
      </Column2>
    </InfoRow>
  )
}

