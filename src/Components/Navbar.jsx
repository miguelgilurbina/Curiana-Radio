

const Navbar = () => {

  const navbarStyles = {
    alignText: 'center',
    backgroundColor: '#215BA6',
    height: '60px',
    display: 'flex',
    fontSize: '14'
  }

  const listStyles = {
    justifyContent: 'flex-end',
    paddingLeft: '5px',
    display: 'flex',
    margin: '0px 160px 0px 160px',
    
  }

  const linkStyles = {
    paddingLeft: '38px',

  }

  const logoStyles = {
    paddingRight: '1300px'
  }

  return (
    <nav style={navbarStyles}>
      <ul style={listStyles}>
          <h2 style={logoStyles}>Curiana Radio</h2>
          <h2 style={linkStyles} >Inicio</h2>
          <h2 style={linkStyles}>Proyectos</h2>
          <h2 style={linkStyles}>Galería</h2>
          <h2 style={linkStyles}>About</h2>
      </ul>
    </nav>
  )
}

export default Navbar
