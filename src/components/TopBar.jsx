import { FaFacebookF,FaInstagram,FaWhatsapp} from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";
const TopBar = () => {
  return (
    <div className="flex justify-between items-center p-1.5 px-4 bg-blue-500 text-white w-full">
        <p className="md:font-bold font-medium md:text-base text-xs">Need Any Help Whatsapp us &nbsp; 03431501300</p>
        <div className="flex gap-4 text-lg">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 md:text-lg text-xs">
                <FaFacebookF />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300  md:text-lg text-xs">
                <FaInstagram />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 md:text-lg text-xs">
                <TfiYoutube />
            </a>
            <a href="https://wa.me/03431501300" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 md:text-lg text-xs">
                <FaWhatsapp />
            </a>
        </div>
    </div>
  )
}

export default TopBar