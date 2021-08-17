import React from 'react'

const Navbar = () => {
  return <nav className='navbar'>
    <ul className='container'>
      <li><a className='item main-item'>Games <i className='item-dropdown-icon'></i></a></li>
      <li><a className='item hidden-xs'>Subcategories <i className='item-dropdown-icon small'></i></a></li>
      <li><span className='item splitter-item'></span></li>
      <li><a className='item active'>Home</a></li>
      <li><a className='item hidden-sm'>Top charts</a></li>
      <li><a className='item hidden-sm'>New releases</a></li>
      <li className='mr-auto'><button className='navbar-btn'><i className='navbar-question-icon'></i></button></li>
      <li><button className='navbar-btn navbar-setting-btn'><i className='navbar-setting-icon'></i></button></li>
    </ul>
  </nav>
}

export default Navbar