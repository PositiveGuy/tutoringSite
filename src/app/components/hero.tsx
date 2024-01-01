import React from 'react';
import TutorCard from './tutorcard'; // Adjust the path as per your file structure

const HeroSection = () => {
  // Example initial tutor data
  const initialTutor = {
    _id: "659266293a5ecd327a680ca0", // Replace with actual initial tutor _id
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
      <div className="grid md:grid-cols-2 lg:grid-cols-2 p-10 min-h-svh bg-gradient-to-r from-teal-400 to-emerald-400">
        <div id='Meet Our Tutors' className=' pb-4 md:pr-4'>
            <h1 className="text-white text-left md:text-right text-4xl font-bold ">Meet</h1>
            <h1 className="text-white text-left md:text-right text-4xl font-bold ">Our</h1>
            <h1 className="text-white text-left md:text-right text-4xl font-bold ">Tutors</h1>
        </div>
        <div id='TutorCard' className="flex gap-4 md:pt-0 bg-black/0">
            <div className='flex bg-black/0 place-content-start pt-4 border-dashed border-t md:border-t-0 md:border-l md:pt-0 md:pl-4'>
                <TutorCard initialTutor={initialTutor} />
            </div>
            {/* Removed arrow button as TutorCard now handles next tutor internally */}
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
