"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { NextPage } from "next";
import ru from "../assets/pu.svg";
import check from "../assets/check.svg";
import cross from "../assets/cross.svg";
import Link from "next/link";

const PP: NextPage = () => {
  return (
    <div className="max-w-[500px] bg-inherit flex justify-center pt-32">
      <div className="w-full min-h-[580px] static z-20 hover:shadow-md rounded-2xl bg-stone-900 overflow-visible ">
        <div className=" relative z-30 left-[-4rem] top-[1rem] rounded-tl-lg rounded-tr-lg rotate-[315deg] transform-gpu text-center max-w-[200px]  bg-emerald-400 py-1">
          <label className=" relative text-white z-40 rotate-[315deg] font-dangrek px-4 text-4xl">
            12 HOURS
          </label>
        </div>
        <div  className=" relative w-full flex justify-center pt-10">
          <div className=" relative items-center z-20 w-[132px] h-[132px] bg-emerald-400 rounded-full flex flex-row justify-center space-x-1">
            <div>
              <Image className="z-30" src={ru} alt="" />
            </div>
            <div className="z-30">
              <label className="z-30 font-dangrek text-5xl text-stone-900">
                600
              </label>
            </div>
          </div>
        </div>
        <div className="w-full h-full relative top-[7rem] flex flex-col mt-[-4.4rem] space-y-3 px-5">
          <div className=" w-full flex flex-row space-x-3">
            <Image className="z-30  object-cover max-w-5 max-h-5 mt-1" src={check} alt="" />
            <label className=" font-dangrek text-xl/2 text-emerald-400 mt-1">Neque porro quisquam est qui dolorem</label>
          </div>
          <div className="flex flex-row space-x-3">
            <Image className="z-30 object-cover max-w-5 max-h-5 mt-1" src={cross} alt="" />
            <label className=" font-dangrek text-xl/2 text-stone-500 mt-1">Neque porro quisquam est qui dolorem</label>
          </div>
          <div className="flex flex-row space-x-3">
            <Image className="z-30 object-cover max-w-5 max-h-5 mt-1" src={cross} alt="" />
            <label className=" font-dangrek text-xl/2 text-stone-500 mt-1">Neque porro quisquam est qui dolorem</label>
          </div>
          <div className="flex flex-row space-x-3">
            <Image className="z-30 object-cover max-w-5 max-h-5 mt-1" src={check} alt="" />
            <label className=" font-dangrek text-xl/2 text-emerald-400 mt-1">Neque porro quisquam est qui dolorem</label>
          </div>
          <div className="flex flex-row space-x-3">
            <Image className="z-30 object-cover max-w-5 max-h-5 mt-1" src={check} alt="" />
            <label className=" font-dangrek text-xl/2 text-emerald-400 mt-1">Neque porro quisquam est qui dolorem</label>
          </div>
          <div className="flex flex-row space-x-3">
            <Image className="z-30 object-cover max-w-5 max-h-5 mt-1" src={cross} alt="" />
            <label className=" font-dangrek text-xl/2 text-stone-500 mt-1">Neque porro quisquam est qui dolorem</label>
          </div>
          <div className=" relative ">
            <button className=" relative py-2 px-3 rounded-lg text-xl font-dangrek bg-emerald-400">BOOK NOW</button>
          </div>
        </div>
      </div>
      <div className=" relative z-10 ">
        <div className="relative w-[70px] h-[40px]  rounded-bl-lg mt-[5.32rem] left-[-23.1rem] rotate-[-45deg] transform-gpu bg-emerald-500 "></div>
        <div className="relative w-[70px] h-[40px] rotate-[313deg] rounded-br-lg ml-[-18rem] mt-[-9rem] transform-gpu bg-emerald-500 z-10 "></div>
      </div>
    </div>
  );
};

export default PP;