import "./SectionBlog.css"



export default function SectionBlog() {

    return (
        <section className="sectionBlog" id="sectionBlog">

            <div className="contentBlog">
                <span>Blog</span>
                <h1>Fique por dentro de tudo sobre astrologia</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus facilis odio esse sint provident ipsum, perspiciatis aut quaerat </p>
            </div>

            <div className="listBlog">

                <div className="blogCard">
                    <img src="https://media.c5n.com/p/8b024c5dcaa3dc13f99eb15e82b661b8/adjuntos/326/imagenes/000/225/0000225120/790x0/smart/zodiaco.jpg" alt="" />
                    <h2>Previsões de Touro </h2>
                    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid placeat aut adipisci assumenda quasi vel, officia nostrum vitae asperiores est, perspiciatis fugit odit nam accusantium ex hic voluptatum voluptate possimus!</span>
                    <button>Leia mais...</button>
                </div>

                <div className="blogCard">
                    <img src="https://www.phenomidiomas.com.br/wp-content/uploads/2023/01/signos-em-ingles-por-que-falar-sobre-astrologia-em-outro-idioma.jpg" alt="" />
                    <h2>O que já sabemos de 2024</h2>
                    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid placeat aut adipisci assumenda quasi vel, officia nostrum vitae asperiores est, perspiciatis fugit odit nam accusantium ex hic voluptatum voluptate possimus!</span>
                    <button>Leia mais...</button>
                </div>



            </div>


        </section>
    )
}