import React from 'react'

export const Contactus = () => {
  return (
    <div
    style={{ height: '100vh' }}
    className='flex justify-center  bg-[#72A9B0] pt-[50px] lg:pt-[10px] pb-12 md:pb-9 '
    id='contactus'
  >
    <div className='w-[90%] md:w-[90%] flex flex-col items-center justify-center gap-5'>
      <div className='font-poppins md:text-[44px] text-[34px] text-center font-bold text-white'>
        Contact Details
      </div>
      {/* <div className='font-poppins md:text-[20px] text-[18px]  font-semibold text-[#72A9B0] text-center md:leading-9'>
        Explore and find out the perfect fit for you according to your flow!
      </div> */}

      <div className='flex w-full md:flex-row flex-col justify-center items-center  gap-5 pt-5 md:gap-[50px]'>
        <div className='flex justify-center'>
          <div className='w-[100%] md:w-[400px] md:h-[400px] h-[200px]'>
            {' '}
            <div class='overflow-hidden bg-none w-full h-full'>
              <iframe
                class='w-full h-full'
                frameborder='0'
                scrolling='no'
                marginheight='0'
                marginwidth='0'
                src='https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=iqra university&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
              ></iframe>
            </div>
          </div>
        </div>
        <div className='flex justify-center  '>
          <div class='h-full pr-6'>
            <ul class=' md:mb-0'>
              <li class='flex'>
                <div class='flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    class='h-6 w-6'
                  >
                    <path d='M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0'></path>
                    <path d='M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z'></path>
                  </svg>
                </div>
                <div class='ml-4 mb-4'>
                  <h3 class='mb-2 text-lg font-poppins font-medium leading-6 text-gray-900 dark:text-white'>
                    Our Address
                  </h3>
                  <p class='text-white dark:text-white'>
                    1230 392/1-2 Sector 7-A 
                  </p>
                  <p class='text-white dark:text-white'>Korangi Industrial Area karachi</p>
                </div>
              </li>
              <li class='flex'>
                <div class='flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    class='h-6 w-6'
                  >
                    <path d='M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2'></path>
                    <path d='M15 7a2 2 0 0 1 2 2'></path>
                    <path d='M15 3a6 6 0 0 1 6 6'></path>
                  </svg>
                </div>
                <div class='ml-4 mb-4'>
                  <h3 class='mb-2 text-lg  font-poppins font-medium leading-6 text-gray-900 dark:text-white'>
                    Contact
                  </h3>
                  <p class='text-white dark:text-white'>
                    Mobile: +92-301-2969104
                  </p>
                  <p class='text-white dark:text-white'>
                    Mail: reliable1enterprises@gmail.com

                  </p>
                </div>
              </li>
              <li class='flex'>
                <div class='flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    class='h-6 w-6'
                  >
                    <path d='M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0'></path>
                    <path d='M12 7v5l3 3'></path>
                  </svg>
                </div>
                <div class='ml-4 mb-4'>
                  <h3 class='mb-2 text-lg font-poppins font-medium leading-6 text-gray-900 dark:text-white'>
                    Working hours
                  </h3>
                  <p class='text-white dark:text-white'>
                    Monday - Friday: 06:00 am - 5:00 pm
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
