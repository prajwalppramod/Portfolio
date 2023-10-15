"use client";
import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from "react-hook-form"


type Inputs = {
    name: string
    email: string
    subject: string
    message: string
};

type Props = {}

function ContactMe({ }: Props) {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:prajwalppramod@gmail?subject{formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
    };

    return (
        <div className='h-screen relative items-center flex flex-col md:flex-row text-center md:text-left justify-evenly mx-auto max-w-7xl px-10'>
            <div className='flex flex-col text-center'>
                <h3 className='md:top-24 md:mb-7 mb-5 uppercase tracking-[13px] md:tracking-[20px] text-gray-400 text-xl md:text-2xl'>
                    Contact Me
                </h3>
                <div className='flex flex-col space-y-10'>
                    <h4 className='text-2xl md:text-4xl font-semibold md:w-auto text-center'>
                        I have got just what you need. {""}
                        <span className='decoration-[#f7ab0a]/50 underline'>Let&lsquo;s Talk</span>
                    </h4>
                    <div className='space-y-5 md:space-y-6'>
                        <div className='flex items-center space-x-1 md:space-x-3 justify-center'>
                            <PhoneIcon className='text-[#f7ab0a] h-6 w-6 md:h-7 md:w-7 animate-pulse' />
                            <p className='text-lg md:text-2xl'>+91 8714822608</p>
                        </div>
                        <div className='flex items-center space-x-1 md:space-x-3 justify-center'>
                            <MapPinIcon className='text-[#f7ab0a] h-6 w-6 md:h-7 md:w-7 animate-pulse' />
                            <p className='text-lg md:text-2xl'>Trivandrum, India</p>
                        </div>
                        <div className='flex items-center space-x-1 md:space-x-3 justify-center'>
                            <EnvelopeIcon className='text-[#f7ab0a] h-6 w-6 md:h-7 md:w-7 animate-pulse' />
                            <p className='text-lg md:text-2xl'>prajwalppramod@gmail.com</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-1 w-fit md:w-96 mx-auto'>
                        <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
                        <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
                        <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />
                        <textarea {...register('message')} placeholder='Message' className='contactInput' name="" />
                        <button className='bg-[#f7ab0a] py-4 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactMe