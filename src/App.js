import {Routes, Route} from 'react-router-dom'

//Components
import Header from './components/Header'

//PAGES
import Home from './pages/Home'
import Country from './pages/Country'
import { useEffect, useState } from 'react'

function App() {

  const [theme, setTheme] = useState("light")

  useEffect(() => {
    document.querySelector("body").setAttribute("theme", `${theme === "light" ? "light" : "dark"} `)

  }, [theme])

  return (
    <div className='App' id={theme}>
    <Header theme={theme} setTheme={setTheme}/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/:country' element={<Country />}/>
    </Routes>
    </div>
  );
}

export default App;
