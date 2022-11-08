import React,{useState} from 'react';
import NavbarCss from './navbar.module.css';
import {Link} from 'react-router-dom';
const Navbar = () =>{

    const [on, seton] = useState(NavbarCss.off);
    const [cont, setcont] = useState({

        height: ""
    })

return<>

<div className={NavbarCss.container} style={cont}>
      <Link style={{textDecoration: 'none'}} to="/"> <h1 className={NavbarCss.h1}>LOGO</h1> </Link> 

        <ul className={on}>
        <Link style={{textDecoration: 'none'}} children={NavbarCss.Link} to="/home"><li>Home</li></Link>
            <Link style={{textDecoration: 'none'}} children={NavbarCss.Link} to="/about"><li>About</li></Link>
            <Link style={{textDecoration: 'none'}} children={NavbarCss.Link} to="/contact"><li>contact</li></Link>
        </ul>
        <button onClick={()=>{seton(NavbarCss.on); setcont({height: "150px"})}} className={NavbarCss.icon}> <i className="fa fa-bars"></i></button>
    </div>


</>
}

export default Navbar