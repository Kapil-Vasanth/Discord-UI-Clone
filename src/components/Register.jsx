import React from 'react'
import discordLogo from "../../assets/discord_main_logo.svg";
import qrCodeImg from "../../assets/qr_code.png";
import loginBg from "../../assets/login_bg.svg";
function Register() {
  return (
    <div className="wrapper">
        <div className="h-screen grid place-content-center">
            <img src={discordLogo} alt="discord" className='absolute top-5 left-5'/>
            <img src={loginBg} alt="discord" className='absolute -z-10 w-full h-full object-cover'/>
            <div className='min-w-[600px]'>
                <div className="bg-[#36393f] card rounded-lg p-6 text-white">
                    <h2 className='text-2xl font-bold text-center mb-4'>Create an account</h2>
                    
                    <label htmlFor="" className="block mb-4">
                        <span className="block text-sm font-normal text-slate-300 mb-2 opacity-70">EMAIL</span>
                        <input type="text" className="bg-[#2f3136] border-slate-950 placeholder-black w-full px-2 py-2 focus:outline-none"/>
                    </label>
                    <label htmlFor="" className="block mb-4">
                        <span className="block text-sm font-normal text-slate-300 mb-2 opacity-70">USERNAME</span>
                        <input type="text" className="bg-[#2f3136] border-slate-950 placeholder-black w-full px-2 py-2 focus:outline-none"/>
                    </label>
                    <label htmlFor="" className="block mb-4">
                        <span className="block text-sm font-normal text-slate-300 mb-2 opacity-70">PASSWORD</span>
                        <input type="text" className="bg-[#2f3136] border-slate-950 placeholder-black w-full px-2 py-2 focus:outline-none"/>
                    </label>

                    <button className='bg-[#5865f2] w-full text-center py-2 mt-6 text-lg font-bold'>Continue</button>

                    <p className="text-blue-400 mb-2 mt-6"><a href="/login">Already have an account?</a></p>

                </div>
                
            </div>
        </div>
        
    </div>
  )
}

export default Register