import "./SectionApresentation.css";


export default function SectionApresentation() {

    return (
        <section className="sectionApresentation">
            <div className="contentSection">
                <span>Uma verdadeira experiência</span>
                <h1>Conheça e controle seu destino</h1>
                <p>Seu amor, trabalho, dinheiro, saúde e muito mais...</p>
                <div className="contentButtons">
                    <button>Peça uma leitura</button>
                    <button id='btnAboutMore'>Saiba mais</button>
                </div>

            </div>
            <div className="imageSection">
                <img src="../public/8664239_3954070.svg" alt="Image astrology" />
            </div>
        </section>
    )
}