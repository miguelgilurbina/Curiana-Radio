import React from 'react'

const Navbar = () => {

  const navbarStyles = {
    display: 'flex',
    
  }

  const linkStyles = {
    padding: '1rem',
    alignText: 'center'
  }

  return (
    <nav style={navbarStyles}>
         <a style={linkStyles} href="">Home</a>
         <a style={linkStyles} href="">Galería</a>
         <a style={linkStyles} href="">Contacto</a>
    </nav>
  )
}

export default Navbar
