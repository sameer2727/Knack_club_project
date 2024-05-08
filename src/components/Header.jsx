import { useState } from "react";
import { Link } from "react-router-dom";

const Header=()=>{

       // const [btnNamereact,setbtnNameReact]=useState("Login")

    return(
       //     <div className="header">
       //            <div className="logo-container">
       //                   <img className="logo" src="https://images-platform.99static.com//jvx9vpdlb8RY3U8if5z-7CcLeFk=/250x60:1267x1077/fit-in/500x500/99designs-contests-attachments/90/90993/attachment_90993964"/>
       //            </div>
       //             <div className="nav-items">

       //                   <ul >
       //                          <li>Home</li>
       //                          <li>About</li>
       //                          <li>FAQ</li>
       //                          <li>Cart</li>
       //                          <button className="login" onClick={()=>{btnNamereact==="Login"?
       //                            setbtnNameReact("LOGOUT") :setbtnNameReact("Login")
       //                            }}>{btnNamereact}</button>
       //                   </ul>
       //             </div>
       //     </div>
       <div>
             <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
  <img src="http://imsec.ac.in/assets/images/logo/Website%20Header%20Logo%2016%20Aug%201.png" alt="" width="" className="logo1" />
  </div>
  <div className="navbar-center hidden lg:flex ml-20">
    <ul className="menu menu-horizontal px-1">
      <li className="links"><a href="/">Home</a></li>
      <li className="links"><a href="/about">About</a></li>
      <li>
        <details>
          <summary className="links">Academics</summary>
          <ul className="p-2">
            <li><a>Departments </a></li>
            <li><a>Courses </a></li>
          </ul>
        </details>
      </li>
      <li className="links"><a href="/events">Events</a></li>
      <li className="links"><a href="placements">Placements</a></li>
      <li className="links"><a href="/contact">Contact Us</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Login</a>
    <a className="btn">Register</a>
  </div>
</div> 
       </div>
    )
}

export default Header;