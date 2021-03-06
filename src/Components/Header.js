import React from 'react';
import { Link } from "react-router-dom";


import logo from './images/brand.png';
import './index.css'


const Header = ( props ) => {

    let logout =''
    let url = '/login'
    if(props.name) {
        url = '/home';
        logout = <Link  to='/login' className='link-dec logout'> <button className='logout-btn' onClick={()=>props.onLogout()} > Logout </button> </Link>
    }

    return(

        <Link to= {url} className='link-dec' >
            <div className='header' >
            <img src={logo} alt='info-detail logo' />
            <div className='heading'> Pooja Kushwah</div>
            <div className='user' > Hey {props.name} ! </div>
            {logout}
            
            </div>
        </Link>

    )

}

export default Header;