

const Navbar = () => {

  const navbarStyles = {
    display: 'flex',
    alignText: 'center',
    
  }

  const linkStyles = {
    paddingTop: '0rem',
    paddingRight: '1rem',
    paddingLeft: '1rem'
    
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
