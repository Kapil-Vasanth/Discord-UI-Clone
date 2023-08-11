import React from 'react'
import discordLogo from "../../assets/discord_main_logo.svg";
import leftBgLandingHeader from "../../assets/left_bg_landing_header.svg";
import centerBgLanding from "../../assets/center_bg_landing_header.svg";
import rightBgLandingHeader from "../../assets/right_bg_landing_header.svg";
import Footer from './Footer';


function Hero() {
  return (
    <div>
      <div className="bg-[#404eed] py-5 flex justify-between xlg:px-80 md:px-20">
        <img src={discordLogo} alt="discord" />
        <nav className="text-white list-none flex gap-5">
          <li className="font-bold hover:underline cursor-pointer">Download</li>
          <li className="font-bold hover:underline cursor-pointer">Nitro</li>
          <li className="font-bold hover:underline cursor-pointer">Safety</li>
          <li className="font-bold hover:underline cursor-pointer">Support</li>
          <li className="font-bold hover:underline cursor-pointer">Blog</li>
          <li className="font-bold hover:underline cursor-pointer">Careers</li>
        </nav>
        <a href='/login' className="text-[#5865f2] bg-white text-sm px-4 py-1 rounded-full border border-white">Open Discord</a>
      </div>
      <div className="py-[120px] bg-[#404eed] text-white text-center relative px-20">
        <div className="">
          <img src={centerBgLanding} alt="" className="w-200 absolute bottom-0"/>
          <img src={leftBgLandingHeader} alt="" className="w-[400px] absolute bottom-0 left-[-100px] lg-left-[100px]" />
          <img src={rightBgLandingHeader} alt="" className="w-[400px] absolute bottom-0 right-[-100px]" />
        </div>
        <div className="relative">
          <h2 className="text-center text-[4rem] font-bold">IMAGINE A PLACE...</h2>
          <p className="m-auto w-[700px] mb-[40px]">...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
          <div className="flex justify-center gap-8 mt-5 max-w-[600px] m-auto">
            <button className="text-black bg-white text-lg px-8 py-2 rounded-full w-full">Download for Windows</button>
            <button className="text-white bg-[#23272a] text-m px-8 py-2 rounded-full w-full">Open Discord in your browser</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Hero