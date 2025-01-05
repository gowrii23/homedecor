import { useState } from 'react'
import Header from './Header'; 
import Home from './Home'; 
import About from './About';
import Gallery from './Gallery'; 
import Footer from './Footer';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
     <div className="App"> 
          <Header /> 
          <Home /> 
          <About /> 
          <Gallery /> 
          <Footer /> 
     </div>
    
  )
}

export default App;
