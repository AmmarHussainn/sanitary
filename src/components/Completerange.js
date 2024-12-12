// import React from 'react';

// export const Completerange = () => {
//   return (
//     <div
//       // style={{ height: 'calc(100vh)' }}
//       className=' w-full flex justify-center bg-[#007b83]    pt-[50px] lg:pt-[10px] pb-9 '
//     >
//       <div className='w-[90%] md:w-[80%] flex flex-col items-center justify-center gap-5'>
//         <div className='font-poppins md:text-[44px] text-[31px] text-center font-bold text-white'>
//           Our Complete Range
//         </div>
//         <div className='font-poppins md:text-[20px] text-[16px]  font-semibold text-white text-center md:leading-9'>
//           Explore and find out the perfect fit for you according to your flow!
//         </div>
//         <h2 className='text-white text-3xl font-bold font-poppins'>Adult Pads</h2>
//         <div className=' gap-6 flex flex-wrap w-full mx-auto justify-center py-5'>
//           <img
//             src={process.env.PUBLIC_URL + '/images/greenadult.jpeg'}
//             className='md:w-[45%] lg:w-[47%] xl:w-[550px] 2xl:w-[600px]'
//             alt='Green Adult'
//           />
//           <img
//             src={process.env.PUBLIC_URL + '/images/blueadult.jpeg'}
//             className='md:w-[45%] lg:w-[47%] xl:w-[550px] 2xl:w-[600px]'
//             alt='Blue Adult'
//           />
//           <img
//             src={process.env.PUBLIC_URL + '/images/grayadult.jpeg'}
//             className='md:w-[45%] lg:w-[47%] xl:w-[550px] 2xl:w-[600px]'

//             alt='Gray Adult'
//           />
//           <img
//             src={process.env.PUBLIC_URL + '/images/brownadult.jpeg'}
//             className='md:w-[45%] lg:w-[47%] xl:w-[550px] 2xl:w-[600px]'

//             alt='Brown Adult'
//           />
//         </div>
//         <h2 className='text-white font-bold text-3xl font-poppins pt-10'>ladies Pads</h2>
//         <div className=' gap-6 w-full flex flex-wrap justify-center mx-auto py-10'>
//           <img
//             src={process.env.PUBLIC_URL + '/images/ninepads.jpeg'}
//              className='md:w-[45%] lg:w-[47%] xl:w-[450px] 2xl:w-[500px]'
//             alt='Nine Pads'
//           />
//            <img
//             src={process.env.PUBLIC_URL + '/images/eightpads.jpeg'}
//              className='md:w-[45%] lg:w-[47%] xl:w-[450px] 2xl:w-[500px]'
//             alt='Eight Pads'
//           />
         
//           <img
//             src={process.env.PUBLIC_URL + '/images/eighteenpads.jpeg'}
//              className='md:w-[45%] lg:w-[47%] xl:w-[450px] 2xl:w-[500px]'
//             alt='Eighteen Pads'
//           />
//           <img
//             src={process.env.PUBLIC_URL + '/images/sixteenpads.jpeg'}
//              className='md:w-[45%] lg:w-[47%] xl:w-[450px] 2xl:w-[500px]'
//             alt='Sixteen Pads'
//           />
//         </div>
//       </div>
//     </div>
//   );
// };




import React, { useState } from 'react';

export const Completerange = () => {
  const [showMoreAdult, setShowMoreAdult] = useState(false);
  const [showMoreLadies, setShowMoreLadies] = useState(false);

  const adultImages = [
    { src: '/images/greenadult.jpeg', alt: 'Green Adult' },
    { src: '/images/blueadult.jpeg', alt: 'Blue Adult' },
    { src: '/images/grayadult.jpeg', alt: 'Gray Adult' },
    { src: '/images/brownadult.jpeg', alt: 'Brown Adult' },
    { src: '/images/adultbluelarge.jpeg', alt: ' Adult' },
    { src: '/images/adultbluel.jpeg', alt: ' Adult' },
    { src: '/images/adultbrownextralarge.jpeg', alt: ' Adult' },
    { src: '/images/adultbrownextralarge2.jpeg', alt: ' Adult' },
    { src: '/images/adultgreenmedium.jpeg', alt: ' Adult' },
    { src: '/images/adultgreenmedium2.jpeg', alt: ' Adult' },
    { src: '/images/adultgrayxlarge.jpeg', alt: ' Adult' },
    { src: '/images/adultgrayxlarge2.jpeg', alt: ' Adult' },



    { src: '/images/adultbluemulti.jpeg', alt: ' Adult' },
    { src: '/images/adultgreenmulti.jpeg', alt: ' Adult' },
    { src: '/images/adultgraymulti.jpeg', alt: ' Adult' },
    { src: '/images/adultbrownmulti.jpeg', alt: ' Adult' },
  ];

  const ladiesImages = [
    { src: '/images/ninepads.jpeg', alt: 'Nine Pads' },
    { src: '/images/eightpads.jpeg', alt: 'Eight Pads' },
    { src: '/images/eighteenpads.jpeg', alt: 'Eighteen Pads' },
    { src: '/images/sixteenpads.jpeg', alt: 'Sixteen Pads' },
    { src: '/images/ladiesblueeight.jpeg' , alt: 'Ladies Eight'},
    { src: '/images/ladiesblueeight2.jpeg' , alt: 'Ladies Eight'},
    { src: '/images/ladiespinknine.jpeg' , alt: 'Ladies Pink Nine'},
    { src: '/images/ladiespinknine2.jpeg' , alt: 'Ladies Pink Nine'},
    { src: '/images/ladiesbluemulti.jpeg' , alt: 'Ladies Blue Nine'},
    { src: '/images/ladiespinkmulti.jpeg' , alt: 'Ladies Blue Nine'},
     

  ];

  const renderImages = (images, visibleCount) => {
    return images.slice(0, visibleCount).map((img, index) => (
      <img
        key={index}
        src={process.env.PUBLIC_URL + img.src}
        className="md:w-[45%] lg:w-[47%] xl:w-[450px] 2xl:w-[500px]"
        alt={img.alt}
      />
    ));
  };

  return (
    <div className="w-full flex justify-center bg-[#007b83] pt-[50px] lg:pt-[10px] pb-9">
      <div className="w-[90%] md:w-[80%] flex flex-col items-center justify-center gap-5">
        <div className="font-poppins md:text-[44px] text-[31px] text-center font-bold text-white">
          Our Complete Range
        </div>
        <div className="font-poppins md:text-[20px] text-[16px] font-semibold text-white text-center md:leading-9">
          Explore and find out the perfect fit for you according to your flow!
        </div>

        {/* Adult Pads Section */}
        <h2 className="text-white text-3xl font-bold font-poppins">Adult Pads</h2>
        <div className="gap-6 flex flex-wrap w-full mx-auto justify-center py-5">
          {renderImages(adultImages, showMoreAdult ? adultImages.length : 2)}
        </div>
        {adultImages.length > 2 && (
          <button
            onClick={() => setShowMoreAdult(!showMoreAdult)}
            className="bg-white text-[#007b83] font-semibold py-2 px-6 rounded"
          >
            {showMoreAdult ? 'Show Less' : 'Show More'}
          </button>
        )}

        {/* Ladies Pads Section */}
        <h2 className="text-white font-bold text-3xl font-poppins pt-10">Ladies Pads</h2>
        <div className="gap-6 w-full flex flex-wrap justify-center mx-auto py-10">
          {renderImages(ladiesImages, showMoreLadies ? ladiesImages.length : 2)}
        </div>
        {ladiesImages.length > 2 && (
          <button
            onClick={() => setShowMoreLadies(!showMoreLadies)}
            className="bg-white text-[#007b83] font-semibold py-2 px-6 rounded"
          >
            {showMoreLadies ? 'Show Less' : 'Show More'}
          </button>
        )}
      </div>
    </div>
  );
};
