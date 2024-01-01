"use client"

import React from 'react';

type TutorCardProps = {
    name: string;
    subject: string;
    image: string;
    about: string;
    email: string;
  };
  
  const TutorCard: React.FC<TutorCardProps> = ({ name, subject, image, about, email }) => {
      return (  
      <div className="card-container bg-white rounded-lg shadow-lg brightness-90 hover:brightness-100 hover:shadow-2xl transition-all duration-300 ease-in-out">
        <img src={image} alt={`${name}`} className="card-image hover:saturate-150 rounded-t-lg w-full" />
        <div className="h-2/5 p-4">
          <h3 className="text-lg text-slate-700 hover:text-slate-950 font-semibold">{name}</h3>
          <p className="text-sm bg-clip-text hover:saturate-150 text-transparent bg-gradient-to-r from-pink-500 to-violet-500">{subject}</p>
          <p className='text-sm text-gray-500 hover:text-gray-700 pt-2'>{about}</p>
        </div>
        <div className='flex border-dashed border-t border-slate-500 justify-between'>
            <p className=' text-sm text-slate-400 hover:text-slate-600 p-4'>{email}</p>
            <p className=' text-slate-300 text-sm p-4'> 01 </p>
        </div>
      </div>
    );
  };

export default TutorCard;