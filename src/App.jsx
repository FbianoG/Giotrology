import { useState } from 'react'
import './App.css'





function App() {


  return (
    <>
      <header>
        <span>Início</span>
        <span>Preço</span>
        <span>Mapa Astral</span>

      </header>

      <section className='apresentation'>
        <div className="contentSection">
          <span>Uma verdadeira experiência</span>
          <h1>Conheça e controle seu destino</h1>
          <p>Seu amor, trabalho, dinheiro, saúde e muito mais...</p>
          <button>Peça uma leitura</button>
          <button id='btnAboutMore'>Saiba mais</button>
        </div>
        <div className="imageSection">
          <img src="../public/8664239_3954070.svg" alt="Image astrology" />
        </div>
      </section>

      <section className='sectionSignus'>
        <div className="contentSignus">
          <span>Signos do Zodiáco</span>
          <h1>Saiba Um Pouco Mais Sobre Todos Os Signos do Zodíaco</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus facilis odio esse sint provident ipsum, perspiciatis aut quaerat </p>
        </div>

        <div className="listSignus">

          <div className="cardSignus">
            <img src="https://demo.waheeddev.com/outsidian/wp-content/uploads/2023/12/sign2-QM4ZKX2.png" alt=""/>
            <h3>Touro</h3>
            <span>Abr 20 - Mai 20</span>
          </div>
          <div className="cardSignus">
            <img src="https://demo.waheeddev.com/outsidian/wp-content/uploads/2023/12/sign3-QM4ZKX2.png" alt=""/>
            <h3>Gêmeos</h3>
            <span>mai 21 - jun 20</span>
          </div>
          <div className="cardSignus">
            <img src="https://demo.waheeddev.com/outsidian/wp-content/uploads/2023/12/sign3-QM4ZKX2.png" alt=""/>
            <h3>Touro</h3>
            <span>Abr 20 - Mai 20</span>
          </div>
          <div className="cardSignus">
            <img src="https://demo.waheeddev.com/outsidian/wp-content/uploads/2023/12/sign3-QM4ZKX2.png" alt=""/>
            <h3>Touro</h3>
            <span>Abr 20 - Mai 20</span>
          </div>
          <div className="cardSignus">
            <img src="https://demo.waheeddev.com/outsidian/wp-content/uploads/2023/12/sign3-QM4ZKX2.png" alt=""/>
            <h3>Touro</h3>
            <span>Abr 20 - Mai 20</span>
          </div>


        </div>


      </section>

      <section className='sectionPrice'>
        <div className="cardPrice">
          <div className="widgetDiscont">
            10% OFF
          </div>
          <h3>Mapa Astral</h3>
          <h2 className="widgetPrice">R$35 <span>/ por consulta</span></h2>

          <div className="cardDivisor"></div>
          <div className="cardDescription">
            <span>Dúvidas</span>
            <span>Dúvidas</span>
            <span>Dúvidas</span>
            <span>Dúvidas</span>
            <span>Dúvidas</span>
            <span>Dúvidas</span>
          </div>
          <button>Consulte Agora</button>
        </div>
        <div className="cardPrice">
          <div className="widgetDiscont">
            10% OFF
          </div>
          <h3>Mapa Astral</h3>
          <h2 className="widgetPrice">R$35 <span>/ por consulta</span></h2>

          <div className="cardDivisor"></div>
          <div className="cardDescription">
            <span>Dúvidas</span>
            <span>Dúvidas</span>
            <span>Dúvidas</span>
            <span>Dúvidas</span>
            <span>Dúvidas</span>
            <span>Dúvidas</span>
          </div>
          <button>Consulte Agora</button>
        </div>
        <div className="cardPrice">
          <div className="widgetDiscont">
            10% OFF
          </div>
          <h3>Mapa Astral</h3>
          <h2 className="widgetPrice">R$35 <span>/ por consulta</span></h2>

          <div className="cardDivisor"></div>
          <div className="cardDescription">
            <span>Dúvidas</span>
            <span>Dúvidas</span>
            <span>Dúvidas</span>
            <span>Dúvidas</span>
            <span>Dúvidas</span>
            <span>Dúvidas</span>
          </div>
          <button>Consulte Agora</button>
        </div>



      </section>



    </>
  )
}

export default App
