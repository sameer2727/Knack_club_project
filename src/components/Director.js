import React from 'react'

function Director() {
  return (
    <div>
    <div className='section-container bg-gradient-to-r from-[#FAFAFA] to=[#FCFCFC] to-100% '>
  <div className='py-28 flex flex-col md:flex-row-reverse justify-between items-center gap-10 ml-6'>
      {/* images_banner */}

  <div className='md:w-1/2' > <img src="https://theeducationpost.in/wp-content/uploads/2022/09/Dr.-Vikram-Bali-Director-IMS-Engineering-College-1.jpg" alt="" class="img1" /></div> 

         {/* text_banner */}
      <div className='md:w-1/2 px-4' >
          <h2 className='md:text-6xl text-4xl font-bold md:leading-snug'>About The  <span className="college">Director</span></h2>
         <p className='text-xl py-9 text-[#4A4A4A] font-bold'>
         Dr. Vikram Bali is having more than 22 years of teaching, research, and administrative experience.
         <br /><br /> He has worked in various capacities at Engineering colleges in the Delhi-NCR region. During his last assignment, he worked as Professor and Head-Computer Science and Engineering Department at JSS Academy of Technical Education, Noida. 
          </p>
        <button className="btn1">Explore</button>
           </div> 
     

      

  </div>
  
  </div>
 
  </div>
  )
}

export default Director