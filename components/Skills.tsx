"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';

function Skills() {
  const skillsData = [
    {
      name: 'Figma',
      iconUrl: 'https://s3-alpha.figma.com/hub/file/2714532645/a552ea5c-29b8-444a-b94b-f349d1e98ac8-cover.png',
    },
    {
      name: 'CSS',
      iconUrl: '/css.jpg',
    },
    {
      name: 'HTML',
      iconUrl: '/html.jpg',
    },
    {
      name: 'C',
      iconUrl: '/c.webp',
    },
    {
      name: 'Java',
      iconUrl: '/java.png',
    },
    {
      name: 'Javascript',
      iconUrl: '/js.jpg',
    },
    {
      name: 'Typescript',
      iconUrl: '/ts.jpg',
    },
    {
      name: 'Python',
      iconUrl: 'https://pnghq.com/wp-content/uploads/png-image-of-python-logo-no-text-included-7.png',
    },
    {
      name: 'Vercel',
      iconUrl: '/vercel.jpg',
    },
    {
      name: 'Bootstrap',
      iconUrl: 'https://www.appsdevpro.com/blog/wp-content/uploads/2022/10/portada-3.jpg',
    },
    {
      name: 'NextJS',
      iconUrl: 'https://netlify-eleventy-api-img.netlify.app/https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fo0o2tn5x%2Fproduction%2F9b987673d7d915b93dfcae8d5af5e0d6751d2ecb-1080x784.png/jpeg/540/',
    },
    {
      name: 'reactJS',
      iconUrl: 'https://nimishprabhu.com/wp-content/uploads/2021/07/react-logo.png'
    },
    {
      name: 'tailwind',
      iconUrl: 'https://res.cloudinary.com/practicaldev/image/fetch/s--6ebjy0LI--/c_imagga_scale,f_auto,fl_progressive,h_1080,q_auto,w_1080/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dxy1c2bvl6odeo52dodk.jpg'
    },
    {
      name: 'mysql',
      iconUrl: '/mysql.png'
    },
    {
      name: 'canva',
      iconUrl: 'https://cdn-images-1.medium.com/max/1200/1*A6kkoOVJVpXPWewg8axc5w.png'
    },
    {
      name: 'notion',
      iconUrl: '/notion.png'
    },

  ];

  return (
    <motion.div className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
      <div className='flex flex-col space-y-5'><h3 className='top-24 text-center uppercase mb-7 tracking-[15px] md:tracking-[20px] text-gray-400 text-2xl'>
        Skills
      </h3>
      {/* <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
        Hover over a skill for current proficiency
      </h3> */}
      <div className='grid grid-cols-3 gap-5 pr-6 md:grid-cols-4 md:gap-5'>
        {skillsData.map((skill, index) => (
          <Skill key={index} name={skill.name} iconUrl={skill.iconUrl} />
        ))}
      </div>
      </div>
    </motion.div>
  );
}

export default Skills;
