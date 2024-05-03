import "./SectionPrice.css"

export default function SectionPrice() {

    return (
        <section className="sectionPrice" id="sectionPrice">
            <h1 className="title">Nossos preços</h1>
            <div className="listPrice">
                <div className="cardPrice">
                    <div className="widgetDiscont">
                        10% OFF
                    </div>
                    <h3>Mapa Astral</h3>
                    <h2 className="widgetPrice">R$35 <span>/ por consulta</span></h2>

                    <div className="cardDivisor"></div>
                    <div className="cardDescription">
                        <span>Pergunte ao Astrólogo</span>
                        <span>Suporte Online</span>
                        <span>Consultoria Astral</span>
                        <span>Interaja ao Vivo</span>
                        <span>Análise de Futuro</span>
                        {/* <span>Dúvidas</span> */}
                    </div>
                    <a href="/payment">Consulte Agora</a>
                </div>
                <div className="cardPrice">
                    <div className="widgetDiscont">
                        10% OFF
                    </div>
                    <h3>Sinastria Amorosa</h3>
                    <h2 className="widgetPrice">R$65 <span>/ por consulta</span></h2>

                    <div className="cardDivisor"></div>
                    <div className="cardDescription">
                        <span>Pergunte ao Astrólogo</span>
                        <span>Suporte Online</span>
                        <span>Consultoria Astral</span>
                        <span>Interaja ao Vivo</span>
                        <span>Análise de Futuro</span>
                        {/* <span>Dúvidas</span> */}
                    </div>
                    <a href="/payment">Consulte Agora</a>
                </div>
                <div className="cardPrice">
                    <div className="widgetDiscont">
                        10% OFF
                    </div>
                    <h3>Mapa Astral</h3>
                    <h2 className="widgetPrice">R$90 <span>/ por consulta</span></h2>

                    <div className="cardDivisor"></div>
                    <div className="cardDescription">
                        <span>Pergunte ao Astrólogo</span>
                        <span>Suporte Online</span>
                        <span>Consultoria Astral</span>
                        <span>Interaja ao Vivo</span>
                        <span>Análise de Futuro</span>
                        {/* <span>Dúvidas</span> */}
                    </div>
                    <a href="/payment">Consulte Agora</a>
                </div>
            </div>


        </section>
    )
}