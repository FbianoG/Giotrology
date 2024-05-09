import { useState } from "react"
import { allSigns } from "../../utils/signs";
import "./SectionSign.css"
import HeadSection from "../Common/HeadSection";
import Button from '../Common/Button'

export default function SectionSign() {

    // Variáveis
    const signs = allSigns
    const [countSign, setCountSign] = useState(6)
    const [btnText, setBtnText] = useState("Veja mais...")

    // Funções
    function changeCount() {
        if (countSign === 6) {
            setBtnText("Ver menos")
            setCountSign(12)
            return
        }
        setBtnText("Ver mais...")
        setCountSign(6)
    }

    return (
        <section className='sign' id="sectionSign">
            <HeadSection data={{ legend: "Signos do Zodiáco", title: 'Saiba Um Pouco Mais Sobre Todos Os Signos do Zodíaco', text: 'Embarque em uma jornada cósmica única e mergulhe nos mistérios profundos que envolvem cada um dos doze signos do zodíaco.' }} />
            <div className="list">
                {signs.map((element, index) => {
                    if (index >= countSign) return
                    return (
                        <div key={element.name} className="card" >
                            <div className="card__data">
                                <img src={element.src} alt="Síbulo do signo do zodíaco" />
                                <h3 className="card__title">{element.name}</h3>
                                <span className="card__data-legend">{element.date}</span>
                            </div>
                            <div className="card__details">
                                <h3 className="card__title">{element.name}</h3>
                                <span className="card__details-legend">{element.description}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
            <Button type="button" text={btnText} main={false} functions={changeCount} />
        </section >
    )
}