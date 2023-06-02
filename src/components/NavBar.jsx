import React from 'react'

export default function NavBar() {
  return (
 <div className='cont-menu'>
      <div className='items-menu'>
        <i class='bx bx-menu'></i>
      </div>
    <ul className="NavBar">
        <li className='items'><i className='bx bx-user'></i></li>
        <li className='items'><i className='bx bx-slideshow'></i></li>
        <li className='items'><i className='bx bx-folder-open'></i></li>
        <li className='items'><i className='bx bx-message'></i></li>
        <li className='items'><i className='bx bx-cog'></i></li>
    </ul>
 </div>
  )
}
