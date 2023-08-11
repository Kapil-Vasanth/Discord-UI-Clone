import React from 'react'
import { Link } from 'react-router-dom';
import discordLogo from "../../assets/discord_main_logo.svg";
function Footer() {
    return (
        <div className='bg-[#23272a] lg:px-[150px] md:px-[0px] xlg:px-[200px]'>
            <div className=' flex justify-between lg:px-20 py-[80px] md:px-10 text-white'>
                <div>
                    <h2 className=' text-[#5865f2]'>Imagine a place</h2>
                    <p>English, USA</p>
                </div>
                <div className='list-none'>
                    <h3 className='text-[#5865f2] pb-4'>Product</h3>
                    <li>Download</li>
                    <li>Nitro</li>
                    <li>Status</li>
                </div>
                <div className='list-none'>
                    <h3 className='text-[#5865f2] pb-4'>Product</h3>
                    <li>About</li>
                    <li>Jobs</li>
                    <li>Branding</li>
                    <li>NewsRoom</li>
                </div>
                <div className="list-none">
                    <h3 className='text-[#5865f2] pb-4'>Resources</h3>
                    <li>Collage</li>
                    <li>Support</li>
                    <li>Safety</li>
                    <li>Blog</li>
                    <li>Feedback</li>
                    <li>Developers</li>
                    <li>StreamKit</li>
                </div>
                <div className="list-none">
                    <h3 className='text-[#5865f2] pb-4'>Policies</h3>
                    <li>Terms</li>
                    <li>Privacy</li>
                    <li>Guidelines</li>
                    <li>Acknowlegements</li>
                    <li>Licenses</li>
                    <li>Moderation</li>
                </div>
            </div>
            <div className=" flex justify-between md:mx-10  lg:mx-20 py-10 border-t-2 border-solid border-white ">
                <img src={discordLogo} alt="" />
                <button className="text-[#5865f2] bg-white text-sm px-4 py-1 rounded-full border border-[#5865f2] hover:shadow shadow-white">Sign Up</button>
            </div>
        </div>
    )
}

export default Footer