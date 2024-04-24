
const Header = () => {

  const headerStyles = {
    backgroundColor: '#105bbd',
    margin: '0px 0px 0px 0px',
    witdh: '100vh',
    height: '900px',
    backgroundImage: 'url("../src/assets/Fondo Web Curiana 1.jpg")'
  }

  const titleStyles = {
    textAlign : 'center',
    fontSize: '200px',
    textShadow: '1px 1px 1px #F27A5E,8px 8px 8px #F27A5E',
    margin: '0px 0px',
    paddingTop: '300px'
  }


 
  return (
    <>
      <div style={headerStyles}>
        <h1 style={titleStyles}>CURIANA RADIO</h1>
      </div>
      
    </>
  )
}

export default Header
