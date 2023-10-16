import About from '@/components/About'
import ContactMe from '@/components/ContactMe'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import WorkExperience from '@/components/WorkExperience'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='container'>
      <div className='bg-[rgb(36,36,36)] text-white h-screen overflow-y-scroll overflow-x-hidden z-0 md:scrollbar xl:scrollbar-none md:scrollbar-track-gray-400/20 md:scrollbar-thumb-[#f7ab0a]/80'>

      <Header />

      <section id='hero'>
        <Hero />
      </section>

      <section id='about' >
        <About />
      </section>

      <section id='experience' >
        <WorkExperience />
      </section>


      <section id='skills' >
        <Skills />
      </section>

      <section id='projects' >
        <Projects />
      </section>

      <section id='contact' >
        <ContactMe />
      </section>

    </div>
    </div>
  )
}

