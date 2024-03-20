import React from 'react'


const Header = () => {

  const headerStyles = {
    textAlign : 'center',
    backgroundColor : 'blue',
    height: '60px'
  }

  const titleStyles = {
    color: '#fff',
  

  }

 
  return (
    <>
      
      <div style={headerStyles}>
        <h1 style={titleStyles}>Curiana Radio</h1>
      </div>
      
    </>
  )
}

export default Header
