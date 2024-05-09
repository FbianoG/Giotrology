import "./SectionPrice.css"

export default function SectionPrice() {

    return (
        <section className="sectionPrice" id="sectionPrice">
            <h1 className="title">Nossos preços</h1>
            <div className="listPrice">
                <div className="cardPrice" style={{ opacity: 0.3 }}>
                    <div className="widgetDiscont">
                        10% OFF
                    </div>
                    <h3>Revolução Solar</h3>
                    <h2 className="widgetPrice">R$50 <span>/ por consulta</span></h2>
                    <div className="cardDivisor"></div>
                    <div className="cardDescription">
                        <span>Pergunte ao Astrólogo</span>
                        <span>Suporte Online</span>
                        <span>Consultoria Astral</span>
                        <span>Interaja ao Vivo</span>
                        <span>Análise de Futuro</span>
                        {/* <span>Dúvidas</span> */}
                    </div>
                    <a>Consulte Agora</a>
                </div>
                <div className="cardPrice" style={{ opacity: 0.3 }}>
                    <div className="widgetDiscont">
                        10% OFF
                    </div>
                    <h3>Mapa Astral</h3>
                    <h2 className="widgetPrice">R$70 <span>/ por consulta</span></h2>
                    <div className="cardDivisor"></div>
                    <div className="cardDescription">
                        <span>Pergunte ao Astrólogo</span>
                        <span>Suporte Online</span>
                        <span>Consultoria Astral</span>
                        <span>Interaja ao Vivo</span>
                        <span>Análise de Futuro</span>
                        {/* <span>Dúvidas</span> */}
                    </div>
                    <a >Consulte Agora</a>
                </div>
                <div className="cardPrice">
                    <div className="widgetDiscont">
                        10% OFF
                    </div>
                    <h3>Sinastria Amorosa</h3>
                    <h2 className="widgetPrice">R$120 <span>/ por consulta</span></h2>
                    <div className="cardDivisor"></div>
                    <div className="cardDescription">
                        <span>Compatibilidade Amorosa</span>
                        <span>Orientação do Futuro Amoroso</span>
                        <span>Baixe Seu Mapa em PDF</span>
                        <span>Identifique Áreas de Intensidade</span>
                        <span>Fortaleça Áreas Importantes</span>

                    </div>
                    <a href="/payment">Consulte Agora</a>
                </div>
            </div>


        </section>
    )
}