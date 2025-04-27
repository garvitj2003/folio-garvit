"use client";

import { Dribbble, Twitter, Instagram, Mail } from "lucide-react";

export default function Profilecard() {
  return (
    <div className="w-full h-full bg-white rounded-2xl flex flex-col items-center justify-between p-6 relative overflow-hidden shadow-lg">
      {/* Top Orange Dotted Line */}
      <div className="absolute top-0 left-0 w-24 h-24 border-t-8 border-l-8 border-dotted border-orange-400 rounded-tl-full"></div>

      {/* Profile Image */}
      <div className="relative z-10 mt-4">
        <div className="w-40 h-60 rounded-2xl overflow-hidden">
          <img
            src="/profile.png" // <-- Replace with your image path
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Name */}
      <h1 className="text-2xl font-bold text-center mt-4">Aabid Ahmed</h1>

      {/* Fire Icon and Orange Dotted Line */}
      <div className="relative flex flex-col items-center mt-2">
        <div className="absolute w-24 h-24 border-b-4 border-r-4 border-dotted border-orange-400 rounded-br-full -bottom-10"></div>
      </div>

      {/* Description */}
      <p className="text-center text-gray-500 mt-8">
        A Software Engineer who has developed countless innovative solutions.
      </p>

      {/* Social Icons */}
      <div className="flex gap-6 mt-6 mb-2">
        <Dribbble className="text-orange-400 w-6 h-6 hover:scale-110 transition-transform cursor-pointer" />
        <Twitter className="text-orange-400 w-6 h-6 hover:scale-110 transition-transform cursor-pointer" />
        <Instagram className="text-orange-400 w-6 h-6 hover:scale-110 transition-transform cursor-pointer" />
        <Mail className="text-orange-400 w-6 h-6 hover:scale-110 transition-transform cursor-pointer" />
      </div>
    </div>
  );
}
