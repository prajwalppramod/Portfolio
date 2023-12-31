'use client';
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
type Props = {}

export default function Header({ }: Props) {
    return (
        <header className=' relative md:sticky p-5 top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
            <motion.div initial={{ x: -500, opacity: 0, scale: 0.5 }} animate={{ x: 0, opacity: 1, scale: 1 }} transition={{ duration: 1.5 }} className='flex flex-row items-center'>
                {/*Social icons*/}
                <SocialIcon url="https://twitter.com/prajwalppramod" fgColor='gray' bgColor='transparent' />
                <SocialIcon url="https://www.linkedin.com/in/prajwalppramod/" fgColor='gray' bgColor='transparent' />
                <SocialIcon url="https://github.com/prajwalppramod" fgColor='gray' bgColor='transparent' />
                <SocialIcon url="https://instagram.com/prajwalp.pramod" fgColor='gray' bgColor='transparent' />
            </motion.div>

            <motion.div initial={{ x: 500, opacity: 0, scale: 0.5 }} animate={{ x: 0, opacity: 1, scale: 1 }} transition={{ duration: 1.5 }} className='flex flex-row items-center text-gray-300 cursor-pointer'>
                {/*Contact*/}
                <SocialIcon className='cursor-pointer' href='#contact' network='email' fgColor='gray' bgColor='transparent' />
                <a href='#contact'><p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in touch</p></a>
            </motion.div>

        </header>
    )
}