import React from 'react';
import TutorCard from './tutorcard'; // Adjust the path as per your file structure
import { IoMdArrowDroprightCircle } from "react-icons/io";


const HeroSection = () => {
  return (
    <main>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 p-10 min-h-svh bg-gradient-to-r from-teal-400 to-emerald-400">
        <div id='Meet Our Tutors' className=' pb-4 md:pr-4'>
            <h1 className="text-white text-left md:text-right text-4xl font-bold ">Meet</h1>
            <h1 className="text-white text-left md:text-right text-4xl font-bold ">Our</h1>
            <h1 className="text-white text-left md:text-right text-4xl font-bold ">Tutors</h1>
        </div>
        <div id='TutorCard' className="flex gap-4 md:pt-0 bg-black/0">
            <div className='flex bg-black/0 place-content-start pt-4 border-dashed border-t md:border-t-0 md:border-l md:pt-0 md:pl-4'>
                <TutorCard 
                    name="Jane Doe PGY-1 IM"
                    subject="Mathematics, Statistics" 
                    image="/zarina-iskarova-VkHTJgC3eW4-unsplash.jpg" 
                    about="I am an enthusiastic teacher with over 10 years of experience!"
                    email="janedoe@mail.com"
                />
            </div>
            <div id='rArrow' className='flex text-slate-200 hover:text-white items-center'>
                <IoMdArrowDroprightCircle size={30}/>
            </div>

        </div>
      </div>
    </main>
  );
};

export default HeroSection;