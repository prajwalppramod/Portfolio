"use client";
import React from 'react'
import { motion } from "framer-motion"
type Props = {}

export default function About({ }: Props) {
    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>

            <motion.img initial={{ x: -200, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1.2 }} className='-mb-10 mt-3 md:mb-0 flex-shrink-0 w-32  h-32 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]' src='\prajwal.png' />
            <div className='flex flex-col'>
                <h3 className=' uppercase text-center mb-3 md:mb-10 tracking-[15px] md:tracking-[20px] text-gray-400 text-xl md:text-2xl'>About</h3>
                <div className='md:space-y-10 space-y-3 px-0 md:px-10'>
                    <h4 className='text-3xl md:text-4xl font-semibold'>Here is a little background</h4>
                    <p className=' text-sm md:text-base'>I am a passionate Computer Science and Engineering student, driven by the convergence of technology and design. With a penchant for crafting intuitive, visually appealing user interfaces, I have honed my skills through project-based learning. I work with Java, C and JavaScript and enjoy diving into Web Development and UI/UX. My creativity finds expression through Figma, where I have completed impactful UI/UX projects. Additionally, my journey has included working as an intern in various companies and actively participating in communities, which have significantly contributed to my experience. I have been immersed in front-end web development for the past six months, during which I have undertaken projects, and I remain committed to furthering my learning in this area. My goal is to create solutions to problems through design and technology. I am enthusiastic about collaboration and always open to new opportunities.</p>
                </div>
            </div>
        </motion.div>
    )
}