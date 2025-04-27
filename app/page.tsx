import Navbar from "@/components/Navbar";
import Profilecard from "@/components/Profilecard";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <div className="w-4/5 flex flex-col items-center">
        <Navbar />
        <div className="w-full grid grid-cols-3 gap-24 mt-14">
          <div className="col-span-1">
          <div className="w-full h-[620px] sticky top-14"><Profilecard/></div>
          </div>
          <div className="col-span-2 flex">
          </div>
        </div>
      </div>
    </div>
  );
}

