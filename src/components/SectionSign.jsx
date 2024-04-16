import "./SectionSign.css"


export default function SectionSign() {

    return (
        <section className='sectionSign' id="sectionSign">

            <div className="contentSign">
                <span>Signos do Zodiáco</span>
                <h1>Saiba Um Pouco Mais Sobre Todos Os Signos do Zodíaco</h1>
                <p>Embarque em uma jornada cósmica única e mergulhe nos mistérios profundos que envolvem cada um dos doze signos do zodíaco.</p>
            </div>

            <div className="listSign">

                <div className="cardSign">
                    <img src="https://demo.waheeddev.com/outsidian/wp-content/uploads/2023/12/sign2-QM4ZKX2.png" alt="" />
                    <h3>Touro</h3>
                    <span>Abr 20 - Mai 20</span>
                </div>
                <div className="cardSign">
                    <img src="https://demo.waheeddev.com/outsidian/wp-content/uploads/2023/12/sign3-QM4ZKX2.png" alt="" />
                    <h3>Gêmeos</h3>
                    <span>mai 21 - jun 20</span>
                </div>
                <div className="cardSign">
                    <img src="https://demo.waheeddev.com/outsidian/wp-content/uploads/2023/12/sign5-QM4ZKX2.png" alt="" />
                    <h3>Leão</h3>
                    <span>jul 23 - aug 22</span>
                </div>
                <div className="cardSign">
                    <img src="https://demo.waheeddev.com/outsidian/wp-content/uploads/2023/12/sign6-QM4ZKX2.png" alt="" />
                    <h3>Virgem</h3>
                    <span>Aug 23 - Sep 22</span>
                </div>
                <div className="cardSign">
                    <img src="https://demo.waheeddev.com/outsidian/wp-content/uploads/2023/12/sign8-QM4ZKX2.png" alt="" />
                    <h3>Escorpião</h3>
                    <span>Oct 23 - Nov 21</span>
                </div>
            </div>

        </section>
    )
}