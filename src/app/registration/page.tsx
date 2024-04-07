"use client"
import React, { useState } from "react";
import Cam from "../cam";
import eev from "../assets/ev bike.svg";
import hel from "../assets/hell.svg";
import Image from "next/image";
import { NextPage } from "next";

const Registration: NextPage = () => {
  // State hooks for form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [photo, setPhoto] = useState(null);

  // Function to handle registration
  const handleRegister = async () => {
    try {
      // Create form data
      const formData = {
        firstName: firstName,
        lastName: lastName,
        work: company,
        mobile: phone,
        email: email,
        password: password
      };
      
      // Convert data object to JSON string
      const jsonData = JSON.stringify(formData);
      // formData.append("photo", photo);
     console.log(jsonData)
     console.log(formData)
      // Send registration request
      const response = await fetch("http://localhost:8080/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json" // Specify content type
      },
        body: jsonData,
      });

      if (response.ok) {
        console.log("Registration successful");
        // Optionally, redirect to a success page
      } else {
        console.error("Registration failed:", response.statusText);
        alert("Registration failed!");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  // Function to handle file input change
  const handleFileChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  return (
    <div className="w-lvh h-lvh bg-transparent flex flex-row justify-start items-start">
      <div className="w-[650px] h-lvh bg-stone-900">
        <div className="static flex flex-col space-y-10">
          <div className="relative w-[60px] h-[64px] left-[70px] top-[86px]">
            <Image className=" object-cover " src={eev} alt="" />
          </div>
          <div className="relative w-[600px] pt-32">
            <Image className=" object-cover " src={hel} alt="" />
          </div>
          <div className=" pl-32 relative font-normal font-dangrek text-[50px] ">
            <h1>Book on demand </h1>
            <h1 className=" relative top-[-10px]">Right in your hand </h1>
          </div>
          <div className=" pl-32 w-[500px] top-[-50px] relative font-normal font-dangrek text-[30px]  text-stone-600">
            <p>Welcome to the future of reading with our Rental Book App.</p>
          </div>
        </div>
      </div>
      <div className="static w-lvh h-lvh bg-stone-950">
        <form className="w-[1244px] h-[1080px] px-10 py-10" >
          <div className="relative z-0 w-full h-20 mb-5 group">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="h-20 block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-400 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={(e) => setEmail(e.target.value)} 
              value={email}
              required
            />
            <label
              form="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-emerald-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div className="relative z-0 w-full h-20 mb-5 group">
            <input
              type="password"
              name="floating_password"
              id="floating_password"
              className="h-20 block py-2.5 px-0 w-full  text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-400 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={(e) => setPassword(e.target.value)} 
              value={password}
              required
            />
            <label
              form="floating_password"
              className="peer-focus:font-meduim absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-emerald-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>
          <div className="relative z-0 w-full h-20 mb-5 group">
            <input
              type="password"
              name="repeat_password"
              id="floating_repeat_password"
              className="block h-20 py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-400 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              form="floating_repeat_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-emerald-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Confirm password
            </label>
          </div>
          <div className="grid xl:gap-10 md:grid-cols-2 h-20 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                className=" h-20 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-400 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={(e) => setFirstName(e.target.value)} 
              value={firstName}
                required
              />
              <label
                form="floating_first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-emerald-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                First name
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group h-20">
              <input
                type="text"
                name="floating_last_name"
                id="floating_last_name"
                className="h-20 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-400 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={(e) => setLastName(e.target.value)} 
              value={lastName}
                required
              />
              <label
                form="floating_last_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-emerald-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Last name
              </label>
            </div>
          </div>
          <div className="pt-10 grid  md:grid-cols-2 md:gap-6 h-20">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="tel"
                pattern="[0-9]{10}"
                name="floating_phone"
                id="floating_phone"
                className="h-20 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-400 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={(e) => setPhone(e.target.value)} 
              value={phone}
                required
              />
              <label
                form="floating_phone"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-emerald-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone number (+91-1234567890)
              </label>
            </div>
            <div className="relative z-0 w-full h-20 mb-5 group">
              <input
                type="text"
                name="floating_company"
                id="floating_company"
                className="h-20 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-400 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={(e) => setCompany(e.target.value)} 
              value={company}
                required
              />
              <label
                form="floating_company"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-emerald-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Company (Ex. Google)
              </label>
            </div>
          </div>
          <div className="relative pt-3 z-0 w-full h-[200px] ">
            <Cam />
          </div>
          <div className=" relative pt-24">
            <button className=" relative top-[100px] w-full h-[60px] bg-emerald-400 hover:bg-emerald-600 text-white font-normal text-[30px] font-dangrek py-2 px-4 rounded" onClick={handleRegister}>
              next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
