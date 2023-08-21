import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import NitroIcon from '../../assets/nitro_icon.svg'
import discordLogo from "../../assets/discord_logo.svg";
import serverImg from "../../assets/new_line.png";


const activeStyle = {
  fontWeight: "bold",
  textDecoration: "underline",
  color: "#161616"
}
function Dashboard() {
  return (
    <div className="bg-[#2f3136] flex h-screen w-full text-white">
        <div className='bg-[#23272a] p-2 min-[300px]:' >
        <NavLink to="/dashboard/friend/me" className={({isActive}) => isActive ? "bg-[#72767d]" : 'bg-red'}>
          <img src={discordLogo} alt="" className='w-[50px] h-[50px] rounded-[12px] bg-[#72767d]'/>
        </NavLink>
        <NavLink to="/dashboard/server" className={({isActive}) => isActive ? "bg-[#72767d]" : 'bg-red'}>
           <img src={serverImg} alt="" className='w-[50px] h-[50px] rounded-[12px] mt-2 '/>
        </NavLink>
        </div>
        <Outlet/>
    </div>
  )
}



export default Dashboard