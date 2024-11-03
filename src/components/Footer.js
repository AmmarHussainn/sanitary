import React from 'react'

export const Footer = () => {
  return (
  <>
  <footer className="bg-gray-100">
  <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="flex justify-center text-teal-600">
   
    <img
              src={process.env.PUBLIC_URL + '/images/ladies.png'}
             className='h-[70px]'
              alt='image'
            />
    </div>

    <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
 Experience the perfect blend of safety, softness, and reliability for your peace of mind every day.
    </p>

    {/* <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
      <li>
        <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> About </a>
      </li>

      <li>
        <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Careers </a>
      </li>

      <li>
        <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> History </a>
      </li>

      <li>
        <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Services </a>
      </li>

      <li>
        <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Projects </a>
      </li>

      <li>
        <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Blog </a>
      </li>
    </ul> */}

    
  </div>
</footer>
  </>
  )
}
