import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Painel from './pages/Painel'


function App() {


  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/painel" element={<Painel />} />
      </Routes>
    </Router>


  )
}

export default App
