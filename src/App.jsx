import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Painel from './pages/Painel'
import Payment from './pages/Payment'


function App() {


  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/painel" element={<Painel />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>


  )
}

export default App
