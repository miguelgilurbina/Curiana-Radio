import React from 'react'

const Navbar = () => {

  const navbarStyles = {
    display: 'flex',
    alignText: 'center',
    
  }

  const linkStyles = {
    paddingTop: '25rem',
    paddingRight: '10rem',
    paddingLeft: '10rem'
    
  }

  return (
    <nav style={navbarStyles}>
         <h2 style={linkStyles}>Home</h2>
         <h2 style={linkStyles}>Proyectos</h2>
         <h2 style={linkStyles}>Galería</h2>
    </nav>
  )
}

export default Navbar
