"use client"

import React, { useEffect, useState } from 'react';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";

type Tutor = {
    name: string;
    subjects: string;
    about: string;
    email: string;
    phone: string;
    rate: string;
    imgurl: string;
    _id: string;
};

type TutorCardProps = {
    initialTutor: Tutor;
};

const TutorCard: React.FC<TutorCardProps> = ({ initialTutor }) => {
    const [tutors, setTutors] = useState<any>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const users: any = fetch('/api/allTutor')
            .then((response) => response.json())
            .then((data: Tutor[]) => {
                setTutors(data)
                console.log(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            })
    }, [])
    // const users: any = fetch('/api/allTutor')
    //     .then((response) => response.json())
    //     .then(data => {
    //         setTutor(data[0])
    //         console.log(data);
    //     })
    //     .catch(error => {
    //         console.error('Error fetching data:', error);
    //     })

    const fetchNextTutor = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % tutors.length);
    };

    const fetchPreviousTutor = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? tutors.length - 1 : prevIndex - 1));
    };
    const currentTutor = tutors[currentIndex] || initialTutor; // Fallback to initialTutor


    // const fetchNextTutor = async () => {
    //     setIsLoading(true);
    //     setError(null);
    //     try {
    //         const response = await fetch(`/api/nextTutor`);
    //         if (!response.ok) {
    //             throw new Error('Failed to fetch next tutor');
    //         }
    //         const nextTutor: Tutor = await response.json();
    //         console.log(nextTutor);
    //         setTutor(nextTutor);
    //     } catch (err) {
    //         if (err instanceof Error) {
    //             setError(err.message);
    //         } else {
    //             setError('An unexpected error occurred');
    //         }
    //     } finally {
    //         setIsLoading(false);
    //     }
    // };

    // const fetchPreviousTutor = async () => {
    //     setIsLoading(true);
    //     setError(null);
    //     try {
    //         const response = await fetch(`/api/previousTutor?tutorId=${tutor._id}`);
    //         if (!response.ok) {
    //             throw new Error('Failed to fetch previous tutor');
    //         }
    //         const prevTutor: Tutor = await response.json();
    //         setTutor(prevTutor);
    //     } catch (err) {
    //         if (err instanceof Error) {
    //             setError(err.message);
    //         } else {
    //             setError('An unexpected error occurred');
    //         }
    //     } finally {
    //         setIsLoading(false);
    //     }
    // };
    console.log("esen is sleeping", tutors)
    return (
        <div className="card-container bg-white rounded-lg shadow-lg brightness-90 hover:brightness-100 hover:skew-x-1 hover:-skew-y-1 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
            {/* <img src={tutor.imgurl} alt={`${tutor.name}`} className="card-image hover:brightness-110" /> */}
            <div className='card-content flex'>
                <button onClick={fetchPreviousTutor} className='bg-black/0 text-slate-600 hover:text-slate-400'>
                    <IoIosArrowDropleftCircle size={25} />
                </button>
                <div className="py-4 pl-4 bg-black/0">
                    <h3 className="text-lg text-slate-700 hover:text-slate-950 font-semibold">
                        {currentTutor.name}
                    </h3>
                    <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 hover:saturate-150">{currentTutor.subjects}</p>
                    <p className='text-sm text-gray-500 hover:text-gray-700 pt-2'>{currentTutor.about}</p>
                </div>
                <button onClick={fetchNextTutor} className='bg-black/0 text-slate-600 hover:text-slate-400'>
                    <IoIosArrowDroprightCircle size={25} />
                </button>
            </div>
            <div className='flex justify-between p-4 border-t border-dashed border-slate-500'>
                <p className='text-sm text-gray-500 hover:text-gray-700'>{currentTutor.email}</p>
                {/*<p className='text-sm text-gray-500 hover:text-gray-700'>{tutor.phone}</p> */}
                <p className='text-sm text-gray-500 hover:text-gray-700'>{`$${currentTutor.rate}/hr`}</p>
            </div>
        </div>
    );
};

export default TutorCard;