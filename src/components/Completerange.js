import React from 'react'

export const Completerange = () => {
  return (
    <div
    style={{ height: 'calc(100vh)' }}
    className=' w-full flex justify-center bg-[#007b83]   pt-[50px] lg:pt-[10px] pb-9 '
  >
    <div className='w-[90%] md:w-[70%] flex flex-col items-center justify-center gap-5'>
      <div className='font-poppins md:text-[44px] text-[31px] text-center font-bold text-white'>
        Our Complete Range
      </div>
      <div className='font-poppins md:text-[20px] text-[16px]  font-semibold text-white text-center md:leading-9'>
        Explore and find out the perfect fit for you according to your flow!
      </div>

      <div className='flex  w-full md:justify-between items-center mx-auto justify-center md:flex-nowrap md:gap-0 gap-6  flex-wrap'>
        <img
          src={process.env.PUBLIC_URL + '/images/adult.png'}
          className='md:w-[300px] w-[70%] '
          alt='image'
        />

        <img
          src={process.env.PUBLIC_URL + '/images/ladies.png'}
          className='md:w-[309px] w-[70%]'
          alt='image'
        />
      </div>
    </div>
  </div>
  )
}
