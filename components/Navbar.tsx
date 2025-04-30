"use client"
import { useState } from 'react';
import { Home, FolderOpen, Wrench, BookOpen } from 'lucide-react';

export default function Navbar() {
  const [activeTooltip, setActiveTooltip] = useState(null);
  
  const navItems = [
    { 
      name: 'Home', 
      icon: <Home size={20} />,
      tooltip: 'Home'
    },
    { 
      name: 'Projects', 
      icon: <FolderOpen size={20} />,
      tooltip: 'Projects'
    },
    { 
      name: 'Tools', 
      icon: <Wrench size={20} />,
      tooltip: 'Tools'
    },
    { 
      name: 'Blog', 
      icon: <BookOpen size={20} />,
      tooltip: 'Blog'
    }
  ];

  const handleMouseEnter = (index: any) => {
    setActiveTooltip(index);
  };

  const handleMouseLeave = () => {
    setActiveTooltip(null);
  };

  return (
    <div className="flex justify-center w-full">
      <nav className="md:w-1/4 w-[75%] shadow-md rounded-2xl m-6 bg-[#221f1e]">
        <div className="flex justify-evenly items-center p-1 font-white">
          {navItems.map((item, index) => (
            <div 
              key={item.name}
              className="relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex flex-col cursor-pointer items-center justify-center p-2 hover:bg-[#151312] rounded-lg transition-colors duration-200 w-full">
                <div className="text-white">{item.icon}</div>
              </button>
              
              {activeTooltip === index && (
                <div 
                  className="absolute -bottom-10 transform -translate-x-1/2 bg-[#221f1e] rounded-2xl py-1 px-2 text-white text-xs  rounded opacity-0 animate-tooltip whitespace-nowrap"
                  style={{
                    animation: 'tooltipFade 0.3s ease-in-out forwards'
                  }}
                >
                  {item.tooltip}
                  
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>

      <style jsx>{`
        @keyframes tooltipFade {
          from {
            opacity: 0.5;
            transform: translate(40%, -20px);
          }
          to {
            opacity: 1;
            transform: translate(40%, 0);
          }
        }
      `}</style>
    </div>
  );
}