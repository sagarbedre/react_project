import React from 'react';
import logo1 from './fliplogo.svg';
import logo2 from './avatar_11830625.png';
import logo3 from './cart_6218551.png';
import logo4 from './mobile_12229216.png';
import logo5 from './search-interface-symbol_54481.png';
// import Header from './Header';
import './App.css';




function Header(){

    return(

    <div className='navbar'>
        <div className='flip_logo'>
          <img src={logo1}></img>
    
        </div>
    
        <div className='searchbar'>
          <div className='icon'><img src={logo5}></img></div>
          <div><input placeholder="Search for Products, Brands and More"></input></div>
        </div>
    
       <div className='allout'>

       <div className='txtcon1'>
         <div className='icon'><img src={logo2}></img></div>
         <div className='txt'>Login</div>
        </div>
    
        <div className='txtcon1'>
         <div className='icon'><img src={logo3}></img></div>
         <div className='txt'>Cart</div>
         
        </div>
    
        <div className='txtcon1'>
         <div className='icon'><img src={logo4}></img></div>
         <div className='txt'>Become a Seller</div>
        
        </div>
       </div>
    
    
    </div>
        

    )
}


export default Header;