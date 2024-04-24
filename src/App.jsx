import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Carrousel from './Components/Carrousel'
import slides from './data/carrouselData.json'
function App() {
 

  return (
    <>
    
      <Navbar/>
      <Header/>
      <Carrousel data={slides} />
      <Footer/>
    </>
  )
}

export default App
