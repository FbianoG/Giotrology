import Button from "../Common/Button";
import "./SectionApresentation.css";


export default function SectionApresentation() {

    return (
        <section className="sectionApresentation">
            <div className="contentSection">
                <span>Uma verdadeira experiência</span>
                <h1>Desvende o seu destino</h1>
                <p>Deixe-se guiar pela influência dos planetas, mergulhe na profundidade dos signos e descubra como os movimentos celestiais moldam a sua vida.</p>
                <div className="contentButtons">
                    <Button type={"submit"} text={'Peça uma leitura'} main={true} />
                    <Button type={"submit"} text={'Saiba mais...'} main={false} />
                    
                </div>

            </div>
            <div className="imageSection">
                <img src="/img/apresentationImg.svg" alt="Image astrology" />
            </div>
        </section>
    )
}