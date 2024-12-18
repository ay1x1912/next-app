import React from 'react'
import { Button } from './ui/button'
function NavBar() {
  return (
    <div className=' w-full flex justify-center items-cente ' >
        <div className='border-4 bg-primary dark:bg-dark-primary h-16 px-2  mt-6 top-0 z-50 fixed w-3/4 flex justify-between items-center  rounded-xl '>
           <div>Logo</div>
           <div className='flex justify-center  gap-2 items-center '>
            <Button  variant='ghost' className='w-20 rounded-none' >Docs</Button>
            <Button  variant='ghost' className='w-20   rounded-none' >Pricing</Button>
            <Button  variant='ghost' className='w-20  rounded-none' >Contact us</Button>
            
           </div>
        </div>

    </div>
  )
}

export default NavBar
