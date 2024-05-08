import React from "react";
import ReactDOM from'react-dom/client';
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter ,RouterProvider} from "react-router-dom";
import About from "./components/About";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

const Applayout =()=>(
              <div className="app">
             <Header />
             <Body/>
             <Footer />
             
       </div>
)

const approuter=createBrowserRouter([

      
      {
            path:"/", 
            element:<Applayout />
      },
      {
             path:"/about",
             element: <About />
      },
      {
            path:"/contact",
            element: <Contact />
     }
])

const root=ReactDOM.createRoot(document.getElementById("root"))  // then we creates a root element inside reacts , everything will be render inside the root 

root.render(<RouterProvider router={approuter} />)