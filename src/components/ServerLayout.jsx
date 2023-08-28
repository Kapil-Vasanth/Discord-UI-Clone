import React from 'react'
import { Outlet,NavLink,Link } from 'react-router-dom'
function ServerLayout() {
  return (
    <div className="bg-[#2f3136] flex h-screen w-full text-slate-100 text-sm">
            <div className='bg-[#2f3136] p-3 min-w-[250px]' >
                <div className="flex justify-between items-center">
                    <h2 className='font-bold text-sm'>newLine</h2>
                    <span>X</span>
                </div>
                <div className='p-3'>
                    <h2 className='text-slate-300 text-[16px]'><span className='text-[16px]'>#</span> rules</h2>
                </div>
                <div>    
                    <a href="" className="text-white flex gap-2 mt-2 w-full"><span className='w-2 h-2 mt-1  border-b-2 border-r-2 border-l-white rotate-45'></span><span>TEXT CHANNELS</span></a> 
                    <a aria-current="page" class="flex p-[6px] bg-[#36393f] text-[16px] mt-2 cursor-pointer" href='/dashboard/server/channels'># Friends</a>
                    <a aria-current="page" class="flex p-[6px] hover:bg-[#36393f] text-[16px] mt-2 cursor-pointer" href='/dashboard/server/channels'># algorithms</a>
                    <a aria-current="page" class="flex p-[6px] hover:bg-[#36393f] text-[16px] mt-2 cursor-pointer" href='/dashboard/server/channels'># announcements</a>
                    <a aria-current="page" class="flex p-[6px] hover:bg-[#36393f] text-[16px] mt-2 cursor-pointer" href='/dashboard/server/channels'># blogging</a>
                    <a aria-current="page" class="flex p-[6px] hover:bg-[#36393f] text-[16px] mt-2 cursor-pointer" href='/dashboard/server/channels'># collaborators</a>
                    <a aria-current="page" class="flex p-[6px] hover:bg-[#36393f] text-[16px] mt-2 cursor-pointer" href='/dashboard/server/channels'># course-ideas</a>
                    <a aria-current="page" class="flex p-[6px] hover:bg-[#36393f] text-[16px] mt-2 cursor-pointer" href='/dashboard/server/channels'># machine-learning</a>
                </div>
            </div>
            <Outlet />
        </div>
  )
}

export default ServerLayout