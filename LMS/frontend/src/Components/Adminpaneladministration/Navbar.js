import React ,{useState} from "react";
import { Link } from "react-router-dom";
import * as AiIcons from  "react-icons/ai";
import * as FaIcons from  "react-icons/fa";
import {Sidebardata} from "./Sidebardata";
import "./Navbar.css";
import {IconContext } from "react-icons";

function Navbar(){
   const [sidebar,setSidebar] = useState(false)
   const  showSidebar = () => setSidebar(!sidebar)
   return(
      <div style={{ minHeight:"83vh"}}>
      <IconContext.Provider value={{color: 'red'}}>
     <div className="navbar" >
         <Link to="#" className='menu-bars'></Link>
         <FaIcons.FaBars onClick={showSidebar}/>
     .navbar
     </div>
     <nav className= {sidebar ? ' nav-menu active' : 'nav-menu'}>
     <ul className='nav-menu-items'  onClick={showSidebar}>
       <li className="navbar-toggle">
         <Link to="#" className='menu-bars'>

           <AiIcons.AiOutlineClose />
         </Link>
       </li>
       {Sidebardata.map((item,index)=>{
           return(
             <li key={index} className={item.cName}>
               <Link to={item.path}>
                 {item.icon}
                 <span>
                   {item.title}
                 </span>
               </Link>
             </li>
           )

       })}
     </ul>
     </nav>
     </IconContext.Provider>
     <p  style={{color:"red",display: 'flex',  justifyContent:'center', alignItems:'center', height: '15vh', fontSize:"100px"}}>Admin panel</p>
    </div>


   );


}
export default Navbar;
