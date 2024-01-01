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
            <header className='flex justify-between bg-gradient-to-r from-teal-600 to-emerald-600 p-4'> 
                <div onClick={toggleMenu} className="cursor-pointer text-slate-200 hover:text-white">
                    <GiHamburgerMenu size={44} />
                </div>
                <div>
                    <img src="/GardenGroveW.svg" className="w-48"></img>
                </div>

            </header>
            {isMenuOpen && <FullScreenMenu closeMenu={toggleMenu} />}
        </main>
    );
};

export default HeaderSection;