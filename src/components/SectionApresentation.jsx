import "./SectionApresentation.css";


export default function SectionApresentation() {

    return (
        <section className="sectionApresentation">
            <div className="contentSection">
                <span>Uma verdadeira experiência</span>
                <h1>Desvende o seu destino</h1>
                <p>Deixe-se guiar pela influência dos planetas, mergulhe na profundidade dos signos e descubra como os movimentos celestiais moldam a sua vida.</p>
                <div className="contentButtons">
                    <button>Peça uma leitura</button>
                    <button id='btnAboutMore'>Saiba mais</button>
                </div>

            </div>
            <div className="imageSection">
                <img src="/public/img/apresentationImg.svg" alt="Image astrology" />
            </div>
        </section>
    )
}