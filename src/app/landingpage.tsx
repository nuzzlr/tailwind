import React from "react";
import Image from "next/image";
import equal from "./assets/equal.svg";
import eev from "./assets/ev bike.svg"
import bike2 from "./assets/bike2.svg"
import ather from "./assets/ather.svg"
import slap from "./assets/slap.svg"
import newev from "./assets/newev.svg"
const Landing: React.FC = () => {
    return (
        <div className="w-[1920px] h-[1080px]  bg-transparent flex flex-row justify-start items-start">
            <div className=" drop-shadow-lg static w-[975px] h-[1080px] z-10 bg-stone-950 flex flex-col space-y-10 overflow-hidden">
                <div >
                    <Image className="relative w-56px top-[70px] left-[943px] z-20 object-cover" src={equal} alt="" />
                    <Image className="relative w-[60px] h-[64px] top-[86px] left-[70px] z-20 object-cover " src={eev} alt="" />
                </div>
                <div >
                    <h1 className=" relative font-dangrek top-[120px] left-[163px] text-[70px]">Take the </h1>
                    <h1 className="relative font-dangrek top-[120px] left-[163px] text-[70px]">Streets.</h1>
                    <h1 className="relative font-dangrek text-emerald-400 top-[40px] left-[406px] text-[50px]">Allyna 1.0</h1>
                </div>
                <div>
                    <p className="relative top-[10px] left-[163px] w-[614px] font-normal font-dangrek text-[20px]  text-stone-600"><span className="text-white">Shift your journey, not gears.</span> Navigate the city with ease on our rental vehicles, freeing your mind as the bike intuitively adapts to power the speed you desire. Embrace the fastest way to move through the urban landscape and experience the freedom of a seamless ride. </p>
                </div>
                <div className="relative left-[163px]">
                    <button className="w-[169px] bg-emerald-400 hover:bg-emerald-600 text-white font-normal text-xl font-dangrek py-3 px-4 rounded">
                        Book Ride
                    </button>
                </div>
                <div>
                    <Image className="relative w-56px top-[-90px] left-[-30px] z-20 object-cover " src={bike2} alt="" />
                    <Image className="relative w-[264px] h-[95px] top-[-270px] left-[550px] z-20 object-cover " src={ather} alt="" />
                    <Image className="relative w-[953px] h-[953px] top-[-1000px] left-[-200px]  z-10 object-cover " src={slap} alt="" />
                </div>
            </div>
            <div className=" static w-[960px] h-[1080px] z-0 bg-stone-900 overflow-visible">
                <Image className=" relative w-56px top-[70px] left-[-30px] z-20 object-cover" src={equal} alt="" />
                <div className="flex flex-col">
                    <div >
                        <ul className="flex flex-row justify-end font-normal font-dangrek text-emerald-400 gap-20 text-[30px] pt-8 pr-20">
                            <li ><a href="#experties">Book</a></li>
                            <li><a href="#work">About Us</a></li>
                            <li><a href="#work">Service and Support</a></li>
                        </ul>
                    </div>
                    <div>
                        <Image className=" relative w-[1280px] h-[720px] top-[10px] left-[-420px] z-20 object-cover" src={newev} alt="" />
                    </div>
                    <div className="flex flex-row  justify-around pt-20">
                        <div>
                            <h2 className="font-normal font-dangrek text-[35px] text-white">35 km/h</h2>
                            <h3 className="font-normal font-dangrek text-[15px] text-emerald-400">Mileage</h3>
                        </div>
                        <div>
                            <h2 className="font-normal font-dangrek text-[35px] text-white">Fuel</h2>
                            <h3 className="font-normal font-dangrek text-[15px] text-emerald-400">Extra emergency</h3>
                        </div>
                        <div>
                            <h2 className="font-normal font-dangrek text-[35px] text-white">59/H</h2>
                            <h3 className="font-normal font-dangrek text-[15px] text-emerald-400">Hourly</h3>
                        </div>
                        <div>
                            <h2 className="font-normal font-dangrek text-[35px] text-white">Helmet</h2>
                            <h3 className="font-normal font-dangrek text-[15px] text-emerald-400">Two in boot space</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;