import Navbar from "@/components/nav";
import Image from "next/image";
import Background from "../public/bg.png";

export default function Home() {
  // Use the CSS class we defined
  return (
    <div className="flex flex-col min-h-screen py-2" >
      <Navbar />
      <div className="relative">
        {/* Sticky Image Section */}
        <div className="fixed top-0 w-full h-screen -z-10">
          <Image
            src={Background}
            alt="Travel"
            fill
            className="object-cover"
          />
        </div>

        {/* Scrolling Text Section */}
        <div className="relative z-10 min-h-screen flex items-center pl-20 font-sans">
          <div className="animate-fade-up">
        <h1 className="text-7xl font-bold text-zinc-800 dark:text-zinc-200 font-Oswald">
          TRAVEL MORE, SPEND LESS
        </h1>
        <h2 className="text-4xl font-semibold text-zinc-600 dark:text-zinc-300 mt-4">
          Discover Amazing Flight Deals with NepaTickets
        </h2>
        <button className="mt-6 px-6 py-3 font-semibold bg-white text-blue-800 rounded-lg hover:bg-blue-700 hover:text-white transition">
          Book Now
        </button>
          </div>
        </div>

        {/* Blank Section for Future Content */}
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-zinc-400 text-xl">More content coming soon...</div>
        </div>
      </div>
    </div>
  );
}
