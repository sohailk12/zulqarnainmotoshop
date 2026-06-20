import { GiHamburgerMenu } from "react-icons/gi";


const NavigationBar = () => {
  return (
    <div className=" lg:w-5/6 lg:pt-2.5">
        <div className="flex gap-4 items-center">
            <GiHamburgerMenu className="block lg:hidden ml-3 text-sm md:text-2xl" />
        <ul className=" flex gap-4 w-fit h-fit ml-auto px-6 lg:pr-60 py-1.5">
            <li className="font-medium hover:text-blue-500 hover:cursor-pointer md:text-lg text-xs">HOME</li>
            <li className="font-medium hover:text-blue-500 hover:cursor-pointer md:text-lg text-xs">SHOP</li>
            <li className="font-medium hover:text-blue-500 hover:cursor-pointer md:text-lg text-xs">CONTACT</li>
            <li className="font-medium hover:text-blue-500 hover:cursor-pointer md:text-lg text-xs">RETURN AND RETURN POLICY</li>
        </ul>
        </div>
        <h1 className="absolute top-1/4 left-1/4 lg:left-2/6 text-blue-400 lg:text-6xl md:text-4xl font-bold">ZULQARNAIN MOTOSHOP</h1>
        <h1 className="absolute top-4/12 left-6/12 lg:left-8/12 lg:text-5xl md:text-3xl font-bold text-white">ONE STOP SHOP</h1>
        <img className="" src="https://wallup.net/wp-content/uploads/2019/09/632199-bike-motorcycles-race-road-three-landscap-3-mountains-nature-motors-speed.jpg" />
    </div>
  )
}

export default NavigationBar