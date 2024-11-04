import React from 'react'

export const Herosection = () => {
  return (
    <div
    // className=' w-full bg-[#72A9B0] pt-9'
    // style={{ height: 'calc(100vh - 64px)' }}
    // id='Whoweare'
    className='w-full bg-[#72A9B0] pt-9 pb-4 md:pb-0'
    style={{ height: '100vh' }}
    id='Whoweare'
  >
    <div className='w-[90%] ml-auto mr-auto flex flex-col md:flex-row gap-5'>
      <div className='w-[100%] md:w-[50%] md:py-20 flex flex-col justify-center gap-5'>
        <h1 className='text-[34px] text-white md:text-[50px] font-bold font-poppins'>
          Empower Your Day with Comfort and Confidence
        </h1>
        <p className='font-poppins text-white text-[16px] md:text-[24px]'>
          Experience the perfect blend of safety, softness, and reliability
          for your peace of mind every day.
        </p>
      </div>
      <div className='w-[90%] md:w-[50%] flex justify-center items-center'>
        <img
          src={process.env.PUBLIC_URL + '/images/firstImage-removebg.png'}
          className='h-full '
          alt='image'
        />
      </div>
    </div>
  </div>
  )
}
