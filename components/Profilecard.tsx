"use client";
import { FaLinkedinIn,FaGithub   } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"

const socialButton = (icon: React.ReactNode) => {
  return (<button className="flex flex-col cursor-pointer items-center justify-center p-2 hover:bg-neutral-200 rounded-lg transition-colors duration-500 ease-out ">
  <div className="text-orange-400/75">{icon}</div>
</button>);
}


export default function Profilecard() {
  return (
    <div className="relative w-full h-full rounded-2xl bg-white overflow-hidden">
      <svg 
        className="absolute -top-28 z-1 -left-8 h-[200px] w-[250px] rotate-[-85deg]"
        viewBox="0 0 250 200" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="125" 
          cy="100" 
          r="98"
          fill="none"
          stroke="orange"
          strokeWidth="4"
          strokeDasharray="9, 8" 
        />
      </svg>
      <div className="relative w-full h-full flex flex-col items-center p-8 justify-between">
        <div className="w-full flex flex-col items-center ">
        <div className="relative w-[240px] h-[284px] rounded-2xl bg-[radial-gradient(circle_at_90%_0%,_#7a2504,_#f05d0a)] shadow-xl overflow-hidden">
          <img 
            src="/profile.png" 
            className="absolute left-0 w-full object-contain -translate-y-5 filter  contrast-120 saturate-20 brightness-90" 
          />
        </div>
          <h1 className="text-4xl font-bold mt-4 text-[#151312] font-poppins">Garvit Jain</h1>
        </div>
        <div className="w-full flex items-center flex-col" >
          <h3 className="text-lg text-center text-[#6a6b6e] font-poppins font-medium">Lorem ipsum dolor sit amet  elit. Dolor voluptatem  at laborum </h3>
          <div className="w-[80%] flex items-center justify-evenly mt-2">
            {socialButton(<FaXTwitter size={22} />)}
            {socialButton(<FaGithub size={22} />)}
            {socialButton(<FaLinkedinIn size={22} />)}
          </div>
        </div>        
      </div>
    </div>
  );
}
