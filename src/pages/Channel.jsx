import React,{useState} from 'react'

function Channel() {
 

  return (
    <div className='w-full h-screen bg-[#3e4147]'>
        <div className="flex justify-between py-4 px-4 shadow-lg shadow-gray-450">
            <div className='flex space-between '>
                <div className='hover:bg-gray-600 p-1 rounded cursor-pointer' >#  Javascript</div>
                <div>
                    {/* fix this images */}
                    <img className='w-[200px] h-[200px]' src="../../assets/user_plus_icon.svg" alt="" />
                </div>
            </div>
        </div>
        <div className="tab-content h-[850px]">
                 <div className='flex h-full'>
                 <div className='flex-grow px-6 py-4'>
                     <div>
                     <h2 className='font-bold text-xl'>ADD FRIEND</h2>
                     <p className='text-slate-200 mt-2 mb-3'>You can add a friend with their Discord tag. it's CAsE sEnsitiVe!</p>
                     </div>
                     <div className='flex bg-[#23272a] '>
                         <input type="text" class="bg-[#23272a] p-2 flex-1" placeholder="Enter a Username#0000" />
                         <button className='px-4 py-2 m-3 bg-[#5865f2] rounded'>Send Friend Request</button>
                     </div>
                     <div className='flex flex-col items-center justify-center flex-grow-0 h-[500px]'>
                        <img className='w-80' src="../../assets/add_friend_icon.svg" alt="" />
                        <p className='mt-6 text-slate-300'>Wumpus is waiting on friends. You don't have to though</p>
                     </div>
                 </div>
                 <div className='border-solid border-gray-500 border-l-2 h-full p-5 w-[500px]'>
                     <h2 className='font-bold text-xl'>Active Now</h2>
                     <h4 className='text-center font-bold text-[18px] mt-5'>It's quiet for now...</h4>
                     <p className='text-center mt-3'>When a friend starts an activity--- like playing a game or hanging out on voice---we'll show it here!</p>
                 </div>
             </div> 
        </div>
    </div>
  )
}

export default Channel