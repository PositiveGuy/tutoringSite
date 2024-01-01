"use client"

import React from 'react';
import { IoIosCloseCircle } from "react-icons/io";

type MenuProp = {
    closeMenu: () => void;
};

const FullScreenMenu: React.FC<MenuProp> = ({ closeMenu }) => {
    return (
        <div className="fixed bg-black/40 top-0 left-0 w-full h-full z-50 p-10 flex justify-start items-center" 
             style={{ 
                 backdropFilter: 'blur(5px)', 
                 WebkitBackdropFilter: 'blur(5px)', // for Safari
             }}>
            {/* Menu content here */}
            <ul className=" text-slate-300">
                <li className=" hover:text-white ">Home</li>
                <li className=" hover:text-white ">About</li>
                <li className=" hover:text-white ">Services</li>
                <li className=" hover:text-white ">Contact</li>
                {/* Add more menu items as needed */}
            </ul>
            <button onClick={closeMenu} className="text-slate-300 hover:text-white absolute top-4 right-4">
                    <IoIosCloseCircle size={30} />
            </button>
        </div>
    );
};

export default FullScreenMenu;