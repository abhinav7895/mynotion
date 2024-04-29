import * as React from 'react'
export const Loading: React.FC = () => {
  return (
    <div className={`w-screen h-screen`}>
      <div className='container mx-auto px-6 '>
        <div className=' w-full h-10 pt-2 flex justify-between'>
          <div className='h-full w-40 rounded-xl border border-gray-200 bg-gray-200 animate-pulse'></div>
          <div className='h-full w-[100px] rounded-xl bg-gray-300 border border-gray-200 animate-pulse'></div>
        </div>
        <div className='w-full relative h-[220px] rounded-xl md:rounded-3xl mt-10 border animate-pulse border-gray-200 bg-gray-200 shadow-md'>
          <div className='absolute bottom-[-60px] left-0 right-0 mx-auto size-28 rounded-full bg-gray-200 border border-gray-300 animate-pulse'></div>
          <div className='absolute bottom-[-130px] left-0 right-0 mx-auto w-[200px] h-12 bg-gray-200 border border-gray-300 animate-pulse rounded-lg'></div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>

  )
}
