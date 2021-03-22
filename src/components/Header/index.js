import React, {useState, useEffect} from 'react';
import {HashLink as Link} from 'react-router-hash-link';
import './header.css';
import TEAM from './TEAM.mp4';
import Logo from './logo.png';
import Wpp from './wpp.png';
import Insta from './insta.png';
function Header() {
  const [navbar,setNavbar] = useState(false);
  
  const changeBackground = () =>{
     if(window.scrollY >= 80) {
       setNavbar(true);
     }else{
       setNavbar(false);
     }

  }
  window.addEventListener('scroll', changeBackground)
  return (
    <div className="header">
       <video autoPlay loop muted className="video">
         <source src={TEAM}/>
       </video>
        <h1 className="h1">Teste</h1>
      <nav className={navbar ? 'active' : 'navbar'}>
       <img src={Logo} className="img1"/>
        <ul className="navul">
          <li><Link className="serv">Serviços</Link></li>
          <li><Link className="de">Departamentos</Link></li>
          <li><Link className="cont">Contato</Link></li>
          <li><Link> 
           <img src={Wpp} className="wpp"/>
          </Link></li>
          <li><Link>
             <img src={Insta} className="insta"/>
            </Link></li>

        </ul>
      </nav>
     .
    </div>
  );
}

export default Header;
