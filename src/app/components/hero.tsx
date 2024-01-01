import React from 'react';
import TutorCard from './tutorcard'; // Adjust the path as per your file structure

const HeroSection = () => {
  // Example initial tutor data
  const initialTutor = {
    _id: "659266293a5ecd327a680ca0",
    name: "Jane Doe PGY-1 IM",
    subjects: "Mathematics, Statistics",
    image: "/zarina-iskarova-VkHTJgC3eW4-unsplash.jpg",
    about: "I am an enthusiastic teacher with over 10 years of experience!",
    email: "janedoe@mail.com",
    phone: "123-456-7890",
    rate: "50",
    imgurl: "https://images.unsplash.com/photo-1660906864974-8d72a542d617?q=80&w=3165&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pt-10 min-h-svh bg-gradient-to-r from-teal-600 to-emerald-600">
        <div className='grid grid-cols-1 border-dashed border-t border-b md:border-b-0 md:border-r'>
          <div id='Meet Our Tutors' className='grid p-10 content-end md:content-normal hover:bg-gradient-to-r from-teal-600 to-emerald-700'>
            <h1 className="md:translate-x-0 text-white text-left md:text-right text-4xl font-bold ">Meet Our Tutors</h1>
          </div>
        </div>
        <div className='md:border-t border-dashed'>
          <div id='TutorCard' className="gap-4 md:pt-0 bg-black/0">
            <div className='p-10'>
                <TutorCard initialTutor={initialTutor} />
            </div>
          </div>
        </div>
        


      </div>
    </main>
  );
};

export default HeroSection;
