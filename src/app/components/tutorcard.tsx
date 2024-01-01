"use client"

import React, { useState } from 'react';
import { MdArrowForwardIos } from "react-icons/md";

type Tutor = {
    _id: string;
    name: string;
    subjects: string;
    about: string;
    email: string;
    phone: string;
    rate: string;
    imgurl: string;
};

type TutorCardProps = {
    initialTutor: Tutor;
};

const TutorCard: React.FC<TutorCardProps> = ({ initialTutor }) => {
    const [tutor, setTutor] = useState<Tutor>(initialTutor);

    const fetchNextTutor = async () => {
        const response = await fetch(`/api/nextTutor?tutorId=${tutor._id}`);
        const nextTutor: Tutor = await response.json();
        setTutor(nextTutor);
    };

    return (
        <div className="card-container bg-white rounded-lg shadow-lg brightness-90 hover:brightness-100 hover:shadow-2xl transition-all duration-300 ease-in-out">
            <img src={tutor.imgurl} alt={`${tutor.name}`} className="card-image" />
            <div className="h-2/5 p-4 bg-black/0 border-t border-dashed border-slate-500">
                <h3 className="text-lg text-slate-700 hover:text-slate-950 font-semibold">{tutor.name}</h3>
                <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 hover:saturate-150">{tutor.subjects}</p>
                <p className='text-sm text-gray-500 hover:text-gray-700 pt-2'>{tutor.about}</p>
            </div>
            <div className='flex justify-between p-4 border-t border-dashed border-slate-500'>
                    <p className='text-sm text-gray-500 hover:text-gray-700'>{tutor.email}</p>
                    <p className='text-sm text-gray-500 hover:text-gray-700'>{tutor.phone}</p>
                    <p className='text-sm text-gray-500 hover:text-gray-700'>{`$${tutor.rate}/hr`}</p>
                </div>
            <button onClick={fetchNextTutor}> <MdArrowForwardIos size={30} /> </button>
        </div>
    );
};

export default TutorCard;