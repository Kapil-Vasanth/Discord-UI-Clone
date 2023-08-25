import React, {useState} from 'react'

function AddFriendPage() {

    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
    }

  return (
    <div className='w-full h-screen bg-[#3e4147]'>
        <div className="flex justify-between py-4 px-4 shadow-lg shadow-gray-450">
            <div className='flex gap-4 '>
                <div className='text-white w-6 h-6'>
                    <svg aria-hidden="false" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path fill="currentColor" fill-rule="nonzero" d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z" transform="translate(2 4)"></path><path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"></path></g></svg>
                </div>
                <div className='hover:bg-gray-600 p-1 rounded cursor-pointer' onClick={ () => handleTabChange('tab1')}>Friends</div>
                <div className='hover:bg-gray-600 p-1 rounded cursor-pointer' onClick={ () => handleTabChange('tab2')}>Online</div>
                <div className='hover:bg-gray-600 p-1 rounded cursor-pointer' onClick={ () => handleTabChange('tab3')}>All</div>
                <div className='hover:bg-gray-600 p-1 rounded cursor-pointer' onClick={ () => handleTabChange('tab4')}>Pending</div>
                <div className='hover:bg-gray-600 p-1 rounded cursor-pointer' onClick={ () => handleTabChange('tab5')}>Blocked</div>
                <div className='bg-[#3ba55d] rounded p-1 cursor-pointer' onClick={ () => handleTabChange('tab6')}>Add Friend</div>

            </div>
            
        </div>
        <div className="tab-content h-[850px]">
            {activeTab == 'tab1' && 
                <div className=' flex flex-col items-center justify-center h-full'>
                        <div className='w-80'><img src="../../assets/no_online_friends.svg" alt="" /></div>
                        <p className='mt-6 text-slate-300'>Wumpus is waiting on friends. You don't have to thought</p>
                </div>
            }
            {activeTab == 'tab2' && 
                <div className=' flex flex-col items-center justify-center h-full'>
                        <div className='w-80'><img src="../../assets/no_online_friends.svg" alt="" /></div>
                        <p className='mt-6 text-slate-300'>No one's around to play with Wumpus.</p>
                </div>
            }
            {activeTab == 'tab3' && 
                <div className=' flex flex-col items-center justify-center h-full'>
                        <div className='w-80'><img src="../../assets/add_friend_icon.svg" alt="" /></div>
                        <p className='mt-6 text-slate-300'>Wumpus is waiting on friends. You don't have to though</p>
                </div>
            }
            {activeTab == 'tab4' && 
                <div className=' flex flex-col items-center justify-center h-full'>
                        <div className='w-80'><img src="../../assets/pending_users_icon.svg" alt="" /></div>
                        <p className='mt-6 text-slate-300'>There are no pending friend requests. Here's Wumpus for now</p>
                </div>
            }
            {activeTab == 'tab5' && 
                <div className=' flex flex-col items-center justify-center h-full'>
                        <div className='w-80'><img src="../../assets/blocked_users_icon.svg" alt="" /></div>
                        <p className='mt-6 text-slate-300'>You can't unblock the Wumpus</p>
                </div>
            }
            {activeTab == 'tab6' && 
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

            }
        </div>

    </div>
  )
}

export default AddFriendPage