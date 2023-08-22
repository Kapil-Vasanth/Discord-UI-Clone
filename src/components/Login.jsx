import React,{ useState } from 'react'
import { Navigate } from 'react-router-dom';
import discordLogo from "../../assets/discord_main_logo.svg";
import qrCodeImg from "../../assets/qr_code.png";
import loginBg from "../../assets/login_bg.svg";
function Login() {
    
    
    const handleLogin =() => {
        console.log("Navigatting to dashboard")
        return <Navigate to="/"/>
        
    }

  return (
    <div className="wrapper">
        <div className="h-screen grid place-content-center">
            <img src={discordLogo} alt="discord" className='absolute top-5 left-5'/>
            <img src={loginBg} alt="discord" className='absolute -z-10 w-full h-full object-cover'/>
            <div className='flex'>
                <div className="bg-[#36393f] card rounded-l-lg p-6 text-white">
                    <h2 className='text-2xl font-bold'>Welcome Back</h2>
                    <p className="font-light mb-4 text-slate-300">We are so excited to see you again!</p>
                    <label htmlFor="" className="block mb-4">
                        <span className="block text-sm font-normal text-slate-300 mb-2 opacity-70">EMAIL</span>
                        <input type="text" className="bg-[#2f3136] border-slate-950 placeholder-black w-full px-2 py-2"/>
                    </label>
                    <label htmlFor="" className="block mb-4">
                        <span className="block text-sm font-normal text-slate-300 mb-2 opacity-70">PASSWORD</span>
                        <input type="text" className="bg-[#2f3136] border-slate-950 placeholder-black w-full px-2 py-2"/>
                    </label>

                    
                    <a href="" className="text-blue-400 mb-6 block">Forgot your password?</a>

                    <button className='bg-[#5865f2] w-full text-center py-2 text-lg font-bold' onClick={handleLogin}>Login</button>

                    <p className="text-blue-400 mb-2 mt-6"><span className='text-slate-500'>Need an account?</span>  <a href="/register">Register</a></p>

                </div>
                <div className='bg-[#36393f] h-full pl-4 pr-9 grid content-center max-w-xs'>
                    <img src={qrCodeImg} alt="" className='rounded p-2 bg-white place-self-center'/>
                    <h2 className="text-white text-center mt-4 text-2xl">Log in with QR Code</h2>
                    <p className="mt-2 text-slate-200 text-center opacity-70">Scan this with the <span className='font-bold text-slate-300'>Discord mobile app </span> to log in instantly.</p>
                </div>
            </div>
        </div>
        
    </div>

  )
}

export default Login