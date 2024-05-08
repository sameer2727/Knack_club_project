import React from 'react'

function Cards1() {
  return (
    <div className='cards1'>
    <div className="card w-96 bg-base-100 shadow-xl ml-11 mt-7">
    <figure><img src="http://imsec.ac.in/images/faculty/1679978004sonali-mathur.jpg" alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">Dr Sonali Mathur</h2>
      <p>HOD CSE </p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Explore</button>
      </div>
    </div>
  </div>

  <div className="card w-96 bg-base-100 shadow-xl ml-11 mt-7">
    <figure><img src="http://imsec.ac.in/images/faculty/1679978032sonia-juneja.JPG" alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">Dr Sonia Juneja</h2>
      <p>HOD COMPUTER SCIENCE</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Explore</button>
      </div>
    </div>
  </div>



  <div className="card w-96 bg-base-100 shadow-xl ml-11 mt-7">
    <figure><img src="http://imsec.ac.in/images/faculty/1679980430pramod-sir.jpg" alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title"> Dr Pramod</h2>
      <p>HOD ECE</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Explore Now </button>
      </div>
    </div>
  </div>

</div>
  
  )
}

export default Cards1