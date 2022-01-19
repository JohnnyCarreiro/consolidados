import { useState } from 'react'
import Head from 'next/head'
import { Container } from '../styles/Home'
import {HeroSection} from '@/components/HeroSection'
import { InfoSection } from '@/components/InfoSection'
import { heroSection, aboutSection, freedomSection, homeObjThree } from '@/data/Data'
import { Services } from '@/components/Services'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Template Next Tipescript</title>
      </Head>
      <HeroSection {...heroSection}/>
      <InfoSection {...aboutSection} />
      <InfoSection {...freedomSection} />
      <InfoSection {...homeObjThree} />
      <Services />
    </Container>
  )
}
