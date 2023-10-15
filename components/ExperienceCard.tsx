"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface Experience {
  id: number; // A unique identifier for each experience
  image: string; // Image URL
  position: string;
  companyname: string;
  skills: string[]; // Array of skill icons (URLs)
  startdate: string;
  enddate: string;
  summaryPoints: string[];
}

interface ExperienceCardProps {
  experience: Experience;
}

function ExperienceCard({ experience }: ExperienceCardProps) {
  const { image, position, companyname, skills, startdate, enddate, summaryPoints } = experience;

  return (
    <div>
      <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[350px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-80 cursor-pointer transition-opacity duration-200 overflow-hidden">
        <motion.img
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
          src={image}
          alt=""
        />
        <div className="px-0 md:px-10">
          <h4 className="text-2xl md:text-4xl font-light">{position}</h4>
          <p className="font-bold text-xl md:text-2xl mt-2">{companyname}</p>
          
          <p className="uppercase py-5 text-gray-300">
            {`${startdate} - ${enddate}`}
          </p>
          <ul>
            {summaryPoints.map((point, index) => (
              <li key={index}>•  {point}</li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  );
}

export default ExperienceCard;
