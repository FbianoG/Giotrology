import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Article from './pages/Article'
import Painel from './pages/Painel'
import Payment from './pages/Payment'
import Articles from './pages/Articles'


function App() {


  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article" element={<Article />} />
        <Route path="/painel" element={<Painel />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </Router>


  )
}

export default App
