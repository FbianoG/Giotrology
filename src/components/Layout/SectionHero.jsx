import Button from "../Common/Button";
import HeadSection from "../Common/HeadSection";
import "./SectionHero.css";


export default function SectionHero() {

    function scrollPrice() {
        location.href = "/#sectionPrice"
    }

    return (
        <section className="hero">
            <div className="hero__content">
                <HeadSection data={{ legend: "Uma verdadeira experiência", title: 'Desvende o seu destino', text: 'Deixe-se guiar pela influência dos planetas, mergulhe na profundidade dos signos e descubra como os movimentos celestiais moldam a sua vida.' }} />
                <div className="hero__content-buttons">
                    <Button type={"submit"} text={'Peça uma leitura'} main={true} functions={scrollPrice} />
                    <Button type={"submit"} text={'Saiba mais...'} main={false} />
                </div>
            </div>
            <div className="hero__content">
                <img src="/img/apresentationImg.svg" alt="" />
            </div>
        </section>
    )
}