import React, { useCallback, useState } from 'react'
import Link from 'next/link'

import { ArrowForward, ArrowRight, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from './styles'
import { Button } from '@/components/Button/ButtonElements'
import Video from '@/assets/hero_video.webm'

interface HeroSectionProps {
  heading: string,
  description: string,
  cta: string,
  scrollToId: string
}

export const HeroSection:React.FC<HeroSectionProps> = (heroSection) => {
  const [hover, setHover] = useState(false)

  const { heading, description, cta, scrollToId } = heroSection

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
        <HeroH1>{heading}</HeroH1>
        <HeroP>
          {description}
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to={scrollToId}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
          >
            {cta} {hover ? <ArrowForward/> : <ArrowRight/>}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}
