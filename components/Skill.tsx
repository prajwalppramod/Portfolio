"use client";
import React from 'react';
import { motion } from 'framer-motion';

type SkillProps = {
  name: string;
  iconUrl: string;
};

function Skill({ name, iconUrl }: SkillProps) {
  return (
    <div className='relative flex'>
      <motion.img
        className='rounded-full border border-gray-500 object-cover w-16 h-16 md:w-20 md:h-20 xl:w-28 xl:h-28'
        initial={{ y: 200, opacity: 0 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        src={iconUrl}
        alt={name}
      />
      {/* <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-3xl font-bold text-black opacity-100'>100%</p>
        </div>
      </div> */}
    </div>
  );
}

export default Skill;
