
import RestaurentCard from "./Restaurent-card";
import reslist from "../utils/data";
import { useEffect, useState } from "react";
import Cards from "./Cards.js";
import Cards1 from "./Cards1.js";
import Director from "./Director.js";

const Body=()=>{
  // const [listofRestaurent,setlistofRestaurent]=useState([]);
  // const [searchText,setsearchText]=useState("");
  // const [filteredItems,setfilteredItems]=useState([]);

  // useEffect(()=>{
  //   console.log("useeffect caked");
  //   fetched();
  // },[])

//   const fetched= async ()=>{
//  const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
   
//  const json=await data.json()
//  console.log(json);

//  setlistofRestaurent(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
 
//  setfilteredItems(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)

// }
// if(listofRestaurent.length===0){
//  return <h1>Loading....</h1>
// }

      return( 

   
          //  <div className="body">
          //        <div className="filter">
          //        <div className="search">
          //         <input type="text" className="search-box" value={searchText} 
          //         onChange={(e)=>{
          //                setsearchText(e.target.value)
                         
          //         }} />
          //         <button onClick={()=>{
          //           console.log(searchText);
          //           // filter the restaurent card and update the ui 
          //            listofRestaurent.filter((res)=>{
          //             const filteredRestaurent= listofRestaurent.filter(
          //               (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
          //             )
          //             // console.log(filteredRestaurent);
          //             setfilteredItems(filteredRestaurent)
          //             // console.log(filteredRestaurent);
          //            })

                     
          //         }}>Search </button>
          //          </div>
          //        <button className="filter-btn" onClick={()=>{
                 
          //         const filteresItems= listofRestaurent.filter(
          //           (res)=> res.info.avgRating > 4.5
          //         )
          //         console.log(filteresItems);
          //         setlistofRestaurent(filteresItems);
          //        }}>Top Rated Restaurent </button></div>
          //        <div className="res-container">
          //           {
          //                filteredItems.map((restaurent) => (<RestaurentCard key={restaurent.info.id} resdata={restaurent}/>))
          //           }
          //        </div>
          //  </div>
<div>
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
        <Cards />
        <Cards1 />
        <Director />
        </div>

       
    )
}


export default Body;