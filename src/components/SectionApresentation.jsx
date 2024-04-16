import "./SectionApresentation.css";


export default function SectionApresentation() {

    return (
        <section className="sectionApresentation">
            <div className="contentSection">
                <span>Uma verdadeira experiência</span>
                <h1>Explore os mistérios dos astros e desvende o seu destino</h1>
                <p>Deixe-se guiar pela influência dos planetas, mergulhe na profundidade dos signos e descubra como os movimentos celestiais moldam a sua vida. Com análises precisas e conteúdo cativante, estamos aqui para ajudá-lo a encontrar clareza, orientação e conexão com o cosmos.</p>
                <div className="contentButtons">
                    <button>Peça uma leitura</button>
                    <button id='btnAboutMore'>Saiba mais</button>
                </div>

            </div>
            <div className="imageSection">
                <img src="./public/8664239_3954070.svg" alt="Image astrology" />
            </div>
        </section>
    )
}