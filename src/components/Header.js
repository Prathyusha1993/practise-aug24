import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div style={{display:'flex'}}>
        <ul style={{display:'flex', justifyContent:'right', backgroundColor: 'gray', padding:'30px', width:'1600px'}}>
            <Link to='/'><li style={{margin:'10px'}}>Home</li></Link>
            <Link to='/about'><li style={{margin:'10px'}}>About</li></Link>
            <Link to='/contact'><li style={{margin:'10px'}}>Contact</li></Link>
        </ul>
    </div>
  )
}

export default Header;