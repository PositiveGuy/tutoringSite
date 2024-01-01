import GardenGroveB from "./public/GardenGroveB.svg";
import { FaBeer } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const FooterSection = () => {
    return (
        <main>
            <footer className=" bg-gradient-to-r hover:to-emerald-500 from-teal-400 to-emerald-400 border-t border-dashed" >
                <div className='text-sm flex justify-between p-4'>
                    <div className=" gap-y-4">
                        <div className=""><img src="/GardenGroveW.svg" className=" pb-2 w-24"></img></div>
                        <div className="text-slate-200 hover:text-white">Privacy</div>
                        <div className="text-slate-200 hover:text-white">Trademark</div>
                    </div>
                    <div className="flex justify-between gap-x-4">
                        <div className="hover:text-white text-slate-200"> <FaInstagram size={25}/> </div>
                        <div className="hover:text-white text-slate-200"> <FaYoutube size={25}/> </div>
                        <div className="hover:text-white text-slate-200"> <FaLinkedin size={25}/> </div>
                    </div>
                </div>
                <div className="flex justify-center items-center text-sm text-slate-200 gap-2 p-4">
                Designed with love and care by <img src="/GardenGroveW.svg" className=" w-20"></img> ©2023
                </div>
            </footer>
        </main>
    );
  };
  
  export default FooterSection;