import SkeletonCard from '@/components/SkeletonCard'
import React from 'react'

function loading() {
  return (
    <div className="grid grid-cols-3 gap-8 p-12">
        {
            "123456789".split('').map((num)=>{
             return  <SkeletonCard key={num} />
            })
        }
      
    </div>
  )
}

export default loading
