import React, {useState} from 'react'

function AddFriendPage() {

    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
    }



  return (
    <div className='w-full'>
        <div className="flex justify-between py-8 px-4 shadow-lg shadow-gray-450">
            
            <div className='flex gap-4 '>
                <div className='text-white w-6 h-6'>
                    <svg aria-hidden="false" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path fill="currentColor" fill-rule="nonzero" d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z" transform="translate(2 4)"></path><path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"></path></g></svg>
                </div>
                <div className='hover:bg-gray-600 p-1 rounded cursor-pointer' onClick={ () => handleTabChange('tab1')}>Online</div>
                <div className='hover:bg-gray-600 p-1 rounded cursor-pointer' onClick={ () => handleTabChange('tab2')}>All</div>
                <div className='hover:bg-gray-600 p-1 rounded cursor-pointer' onClick={ () => handleTabChange('tab3')}>Pending</div>
                <div className='hover:bg-gray-600 p-1 rounded cursor-pointer' onClick={ () => handleTabChange('tab4')}>Blocked</div>
                <div className='bg-[#3ba55d] rounded p-1 cursor-pointer' onClick={ () => handleTabChange('tab4')}>Add Friend</div>

            </div>
            <div>asdf</div>
        </div>
        <div className="tab-content">
            {activeTab == 'tab1' && <h1>This is Tab1 Content</h1>}
            {activeTab == 'tab2' && <h1>Tab2 Content</h1>}
            {activeTab == 'tab3' && <h1>Tab3 Contentt</h1>}
        </div>

    </div>
  )
}

export default AddFriendPage