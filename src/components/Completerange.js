import React from 'react';

export const Completerange = () => {
  return (
    <div
      // style={{ height: 'calc(100vh)' }}
      className=' w-full flex justify-center bg-[#007b83]    pt-[50px] lg:pt-[10px] pb-9 '
    >
      <div className='w-[90%] md:w-[80%] flex flex-col items-center justify-center gap-5'>
        <div className='font-poppins md:text-[44px] text-[31px] text-center font-bold text-white'>
          Our Complete Range
        </div>
        <div className='font-poppins md:text-[20px] text-[16px]  font-semibold text-white text-center md:leading-9'>
          Explore and find out the perfect fit for you according to your flow!
        </div>
        <h2 className='text-white text-3xl font-bold font-poppins'>Adult Pads</h2>
        <div className=' gap-6 flex flex-wrap w-full mx-auto justify-center py-5'>
          <img
            src={process.env.PUBLIC_URL + '/images/greenadult.jpeg'}
            className='md:w-[45%] lg:w-[47%] xl:w-[550px] 2xl:w-[600px]'
            alt='Green Adult'
          />
          <img
            src={process.env.PUBLIC_URL + '/images/blueadult.jpeg'}
            className='md:w-[45%] lg:w-[47%] xl:w-[550px] 2xl:w-[600px]'
            alt='Blue Adult'
          />
          <img
            src={process.env.PUBLIC_URL + '/images/grayadult.jpeg'}
            className='md:w-[45%] lg:w-[47%] xl:w-[550px] 2xl:w-[600px]'

            alt='Gray Adult'
          />
          <img
            src={process.env.PUBLIC_URL + '/images/brownadult.jpeg'}
            className='md:w-[45%] lg:w-[47%] xl:w-[550px] 2xl:w-[600px]'

            alt='Brown Adult'
          />
        </div>
        <h2 className='text-white font-bold text-3xl font-poppins pt-10'>ladies Pads</h2>
        <div className=' gap-6 w-full flex flex-wrap justify-center mx-auto py-10'>
          <img
            src={process.env.PUBLIC_URL + '/images/ninepads.jpeg'}
             className='md:w-[45%] lg:w-[47%] xl:w-[450px] 2xl:w-[500px]'
            alt='Nine Pads'
          />
           <img
            src={process.env.PUBLIC_URL + '/images/eightpads.jpeg'}
             className='md:w-[45%] lg:w-[47%] xl:w-[450px] 2xl:w-[500px]'
            alt='Eight Pads'
          />
         
          <img
            src={process.env.PUBLIC_URL + '/images/eighteenpads.jpeg'}
             className='md:w-[45%] lg:w-[47%] xl:w-[450px] 2xl:w-[500px]'
            alt='Eighteen Pads'
          />
          <img
            src={process.env.PUBLIC_URL + '/images/sixteenpads.jpeg'}
             className='md:w-[45%] lg:w-[47%] xl:w-[450px] 2xl:w-[500px]'
            alt='Sixteen Pads'
          />
        </div>
      </div>
    </div>
  );
};
