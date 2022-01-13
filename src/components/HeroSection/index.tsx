import { ReactNode, useCallback, useState } from 'react'
import Link from 'next/link'

import { ArrowForward, ArrowRight, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from './styles'
import { Button } from '@/components/Button/ButtonElements'
import Video from '@/assets/hero_video.webm'

interface HeroSectionProps {
  children?: ReactNode
}

function HeroSection({ children }: HeroSectionProps) {
  const [hover, setHover] = useState(false)

  const onHover = useCallback(() => {
    setHover(!hover)
  },[hover])

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg
          autoPlay
          loop
          muted
          src={Video}
          playsInline
          // type="video/mp4"
        />
      </HeroBg>
      <HeroContent>
        <HeroH1>Sua empresa faz negócios on-line?</HeroH1>
        <HeroP>
          Hoje o mínimo que sua empresa precisa é de uma presença digital, mas cuido para não construir o seu império na casa dos outros.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to='about'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
          >
            De volta ao negócios {hover ? <ArrowForward/> : <ArrowRight/>}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
