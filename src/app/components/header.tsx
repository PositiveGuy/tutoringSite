"use client"

import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState } from 'react';
import FullScreenMenu from "./menu";

const HeaderSection = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <main>
            <header className='flex justify-between bg-gradient-to-r from-teal-400 to-emerald-400 p-4'> 
                <div>
                    <img src="/GardenGroveW.svg" className="w-36"></img>
                </div>
                <div onClick={toggleMenu} className="cursor-pointer text-slate-200 hover:text-white">
                    <GiHamburgerMenu size={24} />
                </div>
            </header>
            {isMenuOpen && <FullScreenMenu closeMenu={toggleMenu} />}
        </main>
    );
};

export default HeaderSection;