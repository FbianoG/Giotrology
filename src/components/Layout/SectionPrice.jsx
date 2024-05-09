import "./SectionPrice.css"
import HeadSection from '../Common/HeadSection'

export default function SectionPrice() {

    return (
        <section className="price" id="sectionPrice">
            <HeadSection data={{title:'Nosso Preço', legend:'Leitura Astral', text:'Explore as influências cósmicas em sua vida, obtenha insights pessoais e orientação para tomar decisões mais conscientes.'}} />
            <div className="list">
                <div className="card" style={{ opacity: 0.3 }}>
                    <div className="card__widget">10% OFF</div>
                    <h3 className="card__title">Revolução Solar</h3>
                    <h2 className="card__price">R$50 <span className="card__price-legend">/ por consulta</span></h2>
                    <div className="card__divider"></div>
                    <div className="card__details">
                        <span className="card__details-item">Pergunte ao Astrólogo</span>
                        <span className="card__details-item">Suporte Online</span>
                        <span className="card__details-item">Consultoria Astral</span>
                        <span className="card__details-item">Interaja ao Vivo</span>
                        <span className="card__details-item">Análise de Futuro</span>
                    </div>
                    <a className="card__link">Consulte Agora</a>
                </div>
                <div className="card" style={{ opacity: 0.3 }}>
                    <div className="card__widget">10% OFF</div>
                    <h3 className="card__title">Mapa Astral</h3>
                    <h2 className="card__price">R$70 <span className="card__price-legend">/ por consulta</span></h2>
                    <div className="card__divider"></div>
                    <div className="card__details">
                        <span className="card__details-item">Pergunte ao Astrólogo</span>
                        <span className="card__details-item">Suporte Online</span>
                        <span className="card__details-item">Consultoria Astral</span>
                        <span className="card__details-item">Interaja ao Vivo</span>
                        <span className="card__details-item">Análise de Futuro</span>
                    </div>
                    <a className="card__link">Consulte Agora</a>
                </div>
                <div className="card">
                    <div className="card__widget">10% OFF</div>
                    <h3 className="card__title">Sinastria Amorosa</h3>
                    <h2 className="card__price">R$120 <span className="card__price-legend">/ por consulta</span></h2>
                    <div className="card__divider"></div>
                    <div className="card__details">
                        <span className="card__details-item">Compatibilidade Amorosa</span>
                        <span className="card__details-item">Orientação do Futuro Amoroso</span>
                        <span className="card__details-item">Baixe Seu Mapa em PDF</span>
                        <span className="card__details-item">Identifique Áreas de Intensidade</span>
                        <span className="card__details-item">Fortaleça Áreas Importantes</span>
                    </div>
                    <a className="card__link" href="/payment">Consulte Agora</a>
                </div>
            </div>
        </section>
    )
}