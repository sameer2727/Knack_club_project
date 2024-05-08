import React from 'react'
import Header from './Header'

function Contact() {
  return (
    <div>
      <Header />

      <div className='md:w-1/2 px-4' >
    <h2 className='faculty1'>Contact us</h2>
    <img src="http://imsec.ac.in/assets/images/banners/society.jpg" alt="" className='img11' />





    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Location</th>
        <th>MObile No</th>
      </tr>
    </thead>
    <tbody>
   
      {/* row 3 */}
      <tr>
        <th>1</th>
        <td>Ims Engineering College</td>
        <td>Dasana Ghaziabad</td>
        <td>+91 7362637889</td>
      </tr>
    </tbody>
  </table>
</div>

    <h2></h2>
  
     </div> 
    </div>
  )
}

export default Contact