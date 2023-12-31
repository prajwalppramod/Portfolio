"use client";
"use client";
import React from 'react'
import { motion } from 'framer-motion'

type Project = {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
};

type Props = {}

function Projects({ }: Props) {
  const projects: Project[] = [
    {
      id: 1,
      image: '/orbit.png',
      title: 'Project Orbit',
      description: 'An online integrated knowledge-sharing platform for Indian universities and colleges, focusing on student projects. This web app aims to create a centralized hub for educational institutions to showcase and share their students academic projects while providing plagiarism detection.',
      link: 'https://github.com/prajwalppramod/Project-Orbit',
    },
    {
      id: 2,
      image: '/whatsappchat.png',
      title: 'Number to Whatsapp Chat',
      description: 'Say goodbye to saving numbers just to send a WhatsApp message with this website. Connect seamlessly on WhatsApp without cluttering your contacts. Try it out and experience hassle-free messaging today!',
      link: 'https://num-to-whatsapp-chat-prajwalppramod.vercel.app/',
    },
    {
      id: 3,
      image: '/weather.png',
      title: 'Weather App',
      description: 'Stay Informed and Delight Your Senses: Check the Weather App for Real-Time Temperature, Climate Updates, and Dynamic Backgrounds.',
      link: 'https://weather-app-prajwalppramod.vercel.app/',
    },
    {
      id: 4,
      image: '/todo.png',
      title: 'ToDo App',
      description: 'Effortlessly Manage Your Tasks with Our Feature-Rich Todo App: Add, Delete, and Mark Tasks as Done with Ease. Streamline your daily tasks and achieve more',
      link: 'https://to-do-react-type-script-git-main-prajwalppramod.vercel.app/',
    },
    {
      id: 5,
      image: '/bmw.png',
      title: 'BMW Website',
      description: 'Experience the Ultimate BMW Destination: Explore the Interactive Landing Page with CTA, Embedded Maps, Models, and More!',
      link: 'https://bmw-website-prajwalppramod.vercel.app/',
    },

    // Add more project objects as needed
  ];

  return (
    <div className='flex flex-col pt-16'>
      <h3 className='  mt-5 xl:mt-5 uppercase text-center md:pt-24 xl:pt-0 tracking-[15px] md:tracking-[20px] text-gray-400 text-lg md:text-2xl'>
        Projects
      </h3>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} className='h-max relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>

        <div className='relative w-full h-max flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>
          {projects.map((project) => (
            <div key={project.id} className='w-screen md:w-fit h-max flex-shrink-0 snap-center flex flex-col md:space-y-5 items-center justify-center p-20'>
              <motion.img initial={{ y: -100, opacity: 0 }} transition={{ duration: 1.2 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className='h-auto mb-3 mt-3 md:h-80' src={project.image} alt="" />
              <div className='space-y-3 md:space-y-10 text-center px-0 md:px-10 md:max-w-6xl'>
                <h4 className='text-2xl md:text-4xl font-semibold text-center'>{project.title}</h4>
                <p className='md:text-lg text-sm text-center pb-6 md:text-left'>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className='text-[#f7ab0a] text-lg border border-[#f7ab0a] rounded-md px-4 py-2 hover:bg-[#f7ab0a]/40'>Go to Project</a>
              </div>
            </div>
          ))}
        </div>


      </motion.div>
    </div>
  )
}

export default Projects;
