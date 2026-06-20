import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { GiFullMotorcycleHelmet } from "react-icons/gi";
import { GiWinterGloves } from "react-icons/gi";
import { GiFlatTire } from "react-icons/gi";
import { PiHeadlightsDuotone } from "react-icons/pi";
import { BsSignStopLights } from "react-icons/bs";
import { CgArrowsH } from "react-icons/cg";
import { TbBikeFilled } from "react-icons/tb";
import { PiSpeedometerDuotone } from "react-icons/pi";
import { FaBox } from "react-icons/fa6";
import { GiMirrorMirror } from "react-icons/gi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { BiSolidMobileVibration } from "react-icons/bi";
import { FaHeadSideMask } from "react-icons/fa";



const Categories = () => {
  return (
    <div className="w-1/5 lg:block hidden">
        <ul>
            <li className="bg-blue-400 flex gap-2.5 text-white p-2.5 font-medium border-b-2 pt-3 border-gray-300"><GiHamburgerMenu size={21} /> BROWSE CATEGORIES <IoIosArrowDown size={21} /></li>
            <li className="flex gap-2 font-medium border-b-2 border-gray-300 p-2.5"><GiFullMotorcycleHelmet size={23} /> Helmets</li>
            <li className="flex gap-2 font-medium border-b-2 border-gray-300 p-2.5"><GiWinterGloves size={23} />Riding Gloves</li>
            <li className="flex gap-2 font-medium border-b-2 border-gray-300 p-2.5"><GiFlatTire size={23}/> Tires</li>
            <li className="flex gap-2 font-medium border-b-2 border-gray-300 p-2"><PiHeadlightsDuotone size={23} />Headlights</li>
            <li className="flex gap-2 font-medium border-b-2 border-gray-300 p-2"><BsSignStopLights size={23}/>Brake Lights</li>
            <li className="flex gap-2 font-medium border-b-2 border-gray-300 p-2"><CgArrowsH size={23} />Indicators</li>
            <li className="flex gap-2 font-medium border-b-2 border-gray-300 p-2"><TbBikeFilled size={23} />Handles</li>
            <li className="flex gap-2 font-medium border-b-2 border-gray-300 p-2"><PiSpeedometerDuotone size={23}  />Meter</li>
            <li className="flex gap-2 font-medium border-b-2 border-gray-300 p-2"><FaBox size={23}  />Bags & Boxes</li>
            <li className="flex gap-2 font-medium border-b-2 border-gray-300 p-2"><GiMirrorMirror size={23}  />Side Mirrors</li>
            <li className="flex gap-2 font-medium border-b-2 border-gray-300 p-2"><HiOutlineLightBulb size={23}  />External LED</li>
            <li className="flex gap-2 font-medium border-b-2 border-gray-300 p-2"><BiSolidMobileVibration size={23}  />Mobile Holders & Chargers</li>
            <li className="flex gap-2 font-medium border-b-2 border-gray-300 p-2"><FaHeadSideMask size={23}  />Face Mask</li>
        </ul>
    </div>
  )
}

export default Categories