"use client";
import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

const experienceData = [
  {
    id: 1,
    image: 'data:image/jpeg;base64,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yKtEYs3ZqZg5oQsGLA5weJiCT2+IntZsJW481IeNgz5xlmXHCfdwr8JIYmfl7A/fX99jPnSEY027NVZ4koRTxcYIPY+GGe3lyZvjPZ9iBuLNSnidbG7OdicPC3tHCvwkhiJ4ewJm8113+exnzpCPVbDVODhqReBSteMDhU4yB8B8J5tu5WVVTRXwoOFBy8lTjl9w+EksR5ewL38df32M+rSEX1O7FVhJfT1sS3Ex5c24eHPL1cpktsYFBX1S9WOHhQYCjgIK4HdggTfxJPD2BNr118vfsZ9WkI+2xAck1LzdbG7OdicPC3tHCvwnlpd3K6lZEoRUYYdORVhjGMHu59kksR5ewLW8ddvnsZ86QjGm3aqqGEoRfKD92eJfNOSc8u6NVu1VacvQjHIOew5C8I7D4cpJ4l8v4N75lf32TPnSEXfdelnNh09ZcjBblz5cOfbjlntnuNhqMfmU5IaxyGOrOPJ9Y5CSGfYnh7AnrXX99lz6tIR3QbDFAK1VKgJycEczjHf28gJk/MrPR+8TcRMKuGtmqm81VTPz2PyKmn+ZWej94mfoqyq4PjMmJ1bFuXA2TEzMOZv05sa8WqqLS+xET7DUREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQP/Z',
    position: 'Graphic Design Intern ',
    companyname: 'TATOS Technologies',
    skills: [],
    startdate: 'June 2022',
    enddate: 'August 2022',
    summaryPoints: ['Used Figma to design websites and mobile applications.', 'Designed graphics for social media and digital promotions using Figma.', 'Worked within parameters of brand guidelines to achieve desired style.', 'Managed deadlines to deliver finalised designs on time.'],
  },
  {
    id: 2,
    image: 'data:image/png;base64,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',
    position: 'Product Intern ',
    companyname: 'andwemet',
    skills: [],
    startdate: 'September 2022',
    enddate: 'December 2022',
    summaryPoints: [
      'Designed website UI with user-centric focus.',
      'Conducted user testing for improvements.',
      'Collaborated on product strategy.',
      'Coordinated interviews with job candidates.'
    ],
  },
  {
    id: 3,
    image: '/redpositive.png',
    position: 'Graphic and UI/UX Intern',
    companyname: 'Red Positive',
    skills: [],
    startdate: 'February 2023',
    enddate: 'May 2023',
    summaryPoints: [
      'Created design strategies to promote the brand.',
      'Created posters for social media.',
      'Created customised design template for ID Cards and other materials.',
      'Developed User Interface for mobile view of website'
    ],
  },
  {
    id: 4,
    image: 'data:image/png;base64,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',
    position: 'Graphic Designer',
    companyname: 'GDSC WoW',
    skills: [],
    startdate: 'February 2023',
    enddate: 'May 2023',
    summaryPoints: [
      'Created design strategies to promote the brand.',
      'Created posters for social media.',
      'Created customised design template for ID Cards and other materials.',
      'Developed User Interface for mobile view of website'
    ],
  },
  {
    id: 5,
    image: 'data:image/png;base64,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',
    position: 'Digital Skill Facilitator',
    companyname: 'TinkerHub',
    skills: [],
    startdate: 'April 2022',
    enddate: 'September 2022',
    summaryPoints: [
      'Offered learning support and guidance to students to provide opportunities for improvement.',
      'Developed courses and resources for enhanced additional learning.',
      'Curated and delivered a course on Google Slides.',
    ],
  },
  {
    id: 6,
    image: '/iedc.png',
    position: 'Design Coordinator',
    companyname: 'Catalyst IEDC',
    skills: [],
    startdate: 'October 2022',
    enddate: 'Present',
    summaryPoints: [
      'Developed eye-catching social media graphics using graphic design software to promote events conducted by the community.',
      'Volunteered at community events, providing support in event planning and design to ensure successful and memorable experiences for attendees.',
    ],
  },
  {
    id: 7,
    image: '/csi.jpg',
    position: 'Design Lead',
    companyname: 'CSI MBCET',
    skills: [],
    startdate: 'March 2022',
    enddate: 'Present',
    summaryPoints: [
      'Designed social media materials such as banners, brochures, posters.',
      'Collaborated closely with core team members to develop posters.',
      'With the help of the Publicity Team, created designs that would reach a wide audience.',
      'Led and guided design team effectively.'
    ],
  },
  {
    id: 8,
    image: '/openlabs.jpg',
    position: 'Designer',
    companyname: 'openlabs.AI MBCET',
    skills: [],
    startdate: 'October 2022',
    enddate: 'Present',
    summaryPoints: [
      'Created social media content: banners, brochures, and posters.',
      'Worked in close partnership with key team members to create posters.',
      'Collaborated with the Publicity Team to craft audience-reaching designs.',
      'Fostered a collaborative design environment within the team.'
    ],
  },

];

function WorkExperience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-fullpx-10 justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl'>
        Experience
      </h3>

      <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 '>
        {experienceData.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}

export default WorkExperience;
