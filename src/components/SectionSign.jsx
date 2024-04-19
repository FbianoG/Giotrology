import "./SectionSign.css"


export default function SectionSign() {

    const signs = [
        {
            name: "Áries",
            src: "/img/0.png",
            date: "mar 20 - abr 20",
            description: "O primeiro signo do zodíaco, simbolizando o início, a energia e a coragem. Os arianos são conhecidos por sua determinação e iniciativa, sempre prontos para enfrentar desafios de frente."
        },
        {
            name: "Touro",
            src: "/img/1.png",
            date: "abr 21 - mai 20",
            description: "Representando estabilidade e segurança, é o segundo signo. Taurinos são valorizados por sua lealdade, sensualidade e apreço pelo conforto material."
        },
        {
            name: "Gêmeos",
            src: "/img/2.png",
            date: "mai 21 - jun 20",
            description: "O terceiro signo, é associado à versatilidade e à curiosidade intelectual. Geminianos são comunicativos, adaptáveis e sempre em busca de novas experiências."
        },
        {
            name: "Câncer",
            src: "/img/3.png",
            date: "jul 23 - aug 22",
            description: "O quarto signo, é regido pela sensibilidade e pela proteção. Cancerianos são emocionais, intuitivos e valorizam profundamente a família e o lar."
        },
        {
            name: "Leão",
            src: "/img/4.png",
            date: "jul 23 - aug 22",
            description: "Representando liderança e autoexpressão, é o quinto signo. Leoninos são confiantes, generosos e adoram ser o centro das atenções."
        },
        {
            name: "Virgem",
            src: "/img/5.png",
            date: "aug 23 - set 22",
            description: "O sexto signo, é associado à organização e à análise detalhada. Virginianos são práticos, perfeccionistas e têm uma forte ética de trabalho."
        },
        {
            name: "Libra",
            src: "/img/6.png",
            date: "set 23 - out 22",
            description: "Simbolizando equilíbrio e harmonia, é o sétimo signo. Librianos são sociáveis, justos e buscam constantemente a paz e a beleza em seus relacionamentos."
        },
        {
            name: "Escorpião",
            src: "/img/7.png",
            date: "oct 23 - nov 21",
            description: "O oitavo signo, é regido pela intensidade e pela transformação. Escorpianos são apaixonados, determinados e têm uma habilidade única para investigar profundamente as situações."
        },
        {
            name: "Sagitário",
            src: "/img/8.png",
            date: "nov 22 - dez 21",
            description: "Representando aventura e expansão, é o nono signo. Sagitarianos são otimistas, aventureiros e estão sempre em busca de novos horizontes e experiências."
        },
        {
            name: "Capricórnio",
            src: "/img/9.png",
            date: "dez 22 - jan 20",
            description: "O décimo signo, é associado à ambição e à disciplina. Capricornianos são responsáveis, persistentes e têm uma forte ética de trabalho para alcançar seus objetivos."
        },
        {
            name: "Aquário",
            src: "/img/10.png",
            date: "jan 21 - fev 18",
            description: "Simbolizando originalidade e progresso, é o décimo primeiro signo. Aquarianos são visionários, altruístas e valorizam a liberdade e a independência."
        },
        {
            name: "Peixes",
            src: "/img/11.png",
            date: "fev 19 - mar 20",
            description: "O décimo segundo signo, é regido pela sensibilidade e pela compaixão. Piscianos são intuitivos, empáticos e têm uma forte conexão com o mundo espiritual."
        },
    ]


    return (
        <section className='sectionSign' id="sectionSign">

            <div className="contentSign">
                <span>Signos do Zodiáco</span>
                <h1>Saiba Um Pouco Mais Sobre Todos Os Signos do Zodíaco</h1>
                <p>Embarque em uma jornada cósmica única e mergulhe nos mistérios profundos que envolvem cada um dos doze signos do zodíaco.</p>
            </div>

            <div className="listSign">

                {signs.map(element => (
                    <div key={element.name} className="cardSign">
                        <div className="signMain">
                            <img src={element.src} alt="" />
                            <h3>{element.name}</h3>
                            <span>{element.date}</span>
                        </div>
                        <div className="signData">
                            <h3>{element.name}</h3>
                            <span>{element.description}</span>
                        </div>
                    </div>
                ))}

            </div>

        </section>
    )
}