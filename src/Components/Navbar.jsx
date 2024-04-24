

const Navbar = () => {

  const navbarStyles = {
    alignText: 'center',
    backgroundColor: '#105bbd',
    height: '30px',
    position:'sticky'
   
  }

  const listStyles = {
    justifyContent: 'space-around',
    display: 'flex',
    margin: '0px 0px 0px 0px',
    fontSize: '8px'
    
  }

  const linkStyles = {
    display:  'flex',
  }

  const logoStyles = {
    paddingRight: '100px'
  }

  const detailStyles = {
    paddingRight: '40px'

  }

  return (
    <nav style={navbarStyles}>
      <ul style={listStyles}>
          <h2 style={logoStyles}>CURIANA RADIO</h2>
        <ul style={linkStyles}>
          <h2 style={detailStyles}>HOME</h2>
          <h2 style={detailStyles}>PROYECTOS</h2>
          <h2 style={detailStyles}>GALERIA</h2>
          <h2 style={detailStyles}>ABOUT</h2>
        </ul>
      </ul>
    </nav>
  )
}

export default Navbar
