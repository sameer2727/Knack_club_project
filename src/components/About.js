import React from 'react'
import Header from './Header'

function About() {
  return (
    <div>
      <Header />
      <div className='section-container bg-gradient-to-r from-[#FAFAFA] to=[#FCFCFC] to-100% '>
        <div className='py-28 flex flex-col md:flex-row-reverse justify-between items-center gap-10 ml-6'>
            {/* images_banner */}

        <div className='md:w-1/2' > <img src="https://lh3.googleusercontent.com/proxy/n8AcnWYOGvFWHpExjN50QtYgy5iYMKa_vvIXxmaXBK0jQ_Uudj24e-W9LO5V2C6o4y4EWAqE7E0rNa84iVjcBbpiL4b0412Bdw4" alt="" class="img1" /></div> 

               {/* text_banner */}
            <div className='md:w-1/2 px-4' >
                <h2 className='md:text-6xl text-4xl font-bold md:leading-snug'>Ims Engineering <br /> <span className="college">College</span></h2>
               <p className='text-xl py-9 text-[#4A4A4A] font-bold'>
               IMSEC secures impressive positions, ranking 4th in the Northern Region, 13th among the Top 70 Private Institutes for Placement.<br /> more Intresting for you.
                </p>
              <button className="btn1">Explore</button>
                 </div> 
           

            

        </div>
        
        </div>
        <div className='md:w-1/2 px-4' >
    <h2 className='faculty1'>About The College</h2>

    <h2></h2>
  
     </div> 
     <h3 className='abbout'>
     Located in the industrial city of Ghaziabad, IMS Engineering College is known for quality technical and management education, centres of excellence, innovative teaching pedagogy, discipline, and other creative efforts.

IMSEC Ghaziabad stands as a premier institution among Engineering colleges in North India, distinguished for its commitment to delivering high-quality technical and management education and ensuring 100% employability for its students. <br /><br />The Institution's stellar achievements underscore its dedication to academic and research excellence. According to the Times Engineering Institute Ranking Survey 2023, IMSEC secures impressive positions, ranking 4th in the Northern Region, 13th among the Top 70 Private Institutes for Placement, 16th among the Top 125 Private Engineering Institutes, 18th among the Top 170 Engineering Institutes and 19th among the Top 30 Institutes for Research Capability. <br /><br />
Recognized for its innovation, the institution has been awarded a 4-star rating by the Institution’s Innovation Council (IIC), Ministry of Education, Govt. of India, and positioned within the band of 151-300 in the Innovation category by the National Institutional Ranking Framework (NIRF), India Ranking 2023. Additionally, IMSEC secured a AAA+ rating in India’s Best Engineering Colleges, North Zone, as per the Careers 360 Engineering College Survey 2023. Further solidifying its standing, the institution has been ranked 4th among Top Engineering Colleges in Uttar Pradesh and 10th among Top Emerging Colleges of Super Excellence by CSR-GHRDC Engineering College Survey 2023. In the realm of MCA education, IMSEC shines bright, having been ranked 1st as a Promising MCA College in India and 3rd among the Top MCA Colleges in Utta
     </h3>
       </div>
  )
}

export default About