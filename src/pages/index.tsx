import { useState } from 'react'
import Head from 'next/head'
import { Container } from '../styles/Home'
import {HeroSection} from '@/components/HeroSection'
import { InfoSection } from '@/components/InfoSection'
import { heroSection, homeObjOne, homeObjTwo, homeObjThree } from '@/assets/Data'
import { Services } from '@/components/Services'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Container>
      <Head>
        <title>Template Next Tipescript</title>
      </Head>
      <HeroSection {...heroSection}/>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <Services />
    </Container>
  )
}
