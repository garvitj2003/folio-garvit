import Navbar from "@/components/Navbar";
import Profilecard from "@/components/Profilecard";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <div className="w-[95%] md:w-4/5 flex flex-col items-center">
        <Navbar />

        <div className="w-full grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-24 mt-10 md:mt-14">
          {/* ProfileCard */}
          <div className="col-span-1 md:block flex justify-center">
            <div className="w-full max-w-[370px] h-auto md:h-[620px] md:sticky md:top-14">
              <Profilecard />
            </div>
          </div>

          {/* Main content */}
          <div className="col-span-2">
            {/* Add your main content here */}
            <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima quam alias voluptates, iste praesentium nihil sed fuga facilis dignissimos necessitatibus adipisci! Numquam possimus dignissimos, ad quasi perferendis ipsam ut autem.</h1>
            <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima quam alias voluptates, iste praesentium nihil sed fuga facilis dignissimos necessitatibus adipisci! Numquam possimus dignissimos, ad quasi perferendis ipsam ut autem.</h1>
            <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima quam alias voluptates, iste praesentium nihil sed fuga facilis dignissimos necessitatibus adipisci! Numquam possimus dignissimos, ad quasi perferendis ipsam ut autem.</h1>
            <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima quam alias voluptates, iste praesentium nihil sed fuga facilis dignissimos necessitatibus adipisci! Numquam possimus dignissimos, ad quasi perferendis ipsam ut autem.</h1>
            <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima quam alias voluptates, iste praesentium nihil sed fuga facilis dignissimos necessitatibus adipisci! Numquam possimus dignissimos, ad quasi perferendis ipsam ut autem.</h1>
            <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima quam alias voluptates, iste praesentium nihil sed fuga facilis dignissimos necessitatibus adipisci! Numquam possimus dignissimos, ad quasi perferendis ipsam ut autem.</h1>
            <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima quam alias voluptates, iste praesentium nihil sed fuga facilis dignissimos necessitatibus adipisci! Numquam possimus dignissimos, ad quasi perferendis ipsam ut autem.</h1>
            <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima quam alias voluptates, iste praesentium nihil sed fuga facilis dignissimos necessitatibus adipisci! Numquam possimus dignissimos, ad quasi perferendis ipsam ut autem.</h1>
            <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima quam alias voluptates, iste praesentium nihil sed fuga facilis dignissimos necessitatibus adipisci! Numquam possimus dignissimos, ad quasi perferendis ipsam ut autem.</h1>
            <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima quam alias voluptates, iste praesentium nihil sed fuga facilis dignissimos necessitatibus adipisci! Numquam possimus dignissimos, ad quasi perferendis ipsam ut autem.</h1>
            <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima quam alias voluptates, iste praesentium nihil sed fuga facilis dignissimos necessitatibus adipisci! Numquam possimus dignissimos, ad quasi perferendis ipsam ut autem.</h1>
            <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima quam alias voluptates, iste praesentium nihil sed fuga facilis dignissimos necessitatibus adipisci! Numquam possimus dignissimos, ad quasi perferendis ipsam ut autem.</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
