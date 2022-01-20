import { useState } from 'react'
import Head from 'next/head'
import { Container } from '../styles/Home'
import {HeroSection} from '@/components/HeroSection'
import { InfoSection } from '@/components/InfoSection'
import { heroSection, aboutSection, freedomSection, projectsSection } from '@/data/Data'
import { Services } from '@/components/Services'
import { Projects } from '@/components/Projects'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Template Next Tipescript</title>
      </Head>
      <HeroSection {...heroSection}/>
      <InfoSection {...aboutSection} />
      <InfoSection {...freedomSection} />
      <Projects {...projectsSection}/>
      {/* <InfoSection {...homeObjThree} /> */}
      <Services />
    </Container>
  )
}
