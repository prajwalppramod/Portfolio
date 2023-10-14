'use client';
import React from 'react'
import Link from 'next/link';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/legacy/image'
type Props = {}

export default function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: ["Front-end dev", "UI/UX Designer", "Graphic Designer"], loop: true, delaySpeed: 2000
    })
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden    '>
            <BackgroundCircles />
            <img className='relative rounded-full h-32 w-32 mx-auto  ' src="\prajwal.png" alt="" />
            <div className='z-20'>
                <h2 className='text-xl font-semibold uppercase text-gray-300  pb-2 tracking-[10px]'>Prajwal Pramod</h2>
                <h1 className='text-5xl lg:text-5xl font-semibold px-10'>
                    <span>{text}</span>
                    <Cursor cursorColor="#F7AB0A" />
                </h1>
                <div className='pt-5'>
                    <Link href="#about">
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link href='#experience'>
                        <button className='heroButton'>Experience</button>
                    </Link>
                    <Link href='skills'>
                        <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href='#projects'>
                        <button className='heroButton'>Projects</button>
                    </Link>

                </div>
            </div>
        </div>
    )
}