import { useState } from "react"
import "./SectionBlog.css"
import { useEffect } from "react"



export default function SectionBlog() {

    const Blogs = [
        {
            _id: "12312312",
            title: "Previsões de Touro",
            article: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid placeat aut adipisci assumenda quasi vel, officia nostrum vitae asperiores est, perspiciatis fugit odit nam accusantium ex hic voluptatum voluptate possimus!",
            date: "16/04/2024",
            src: "https://media.c5n.com/p/8b024c5dcaa3dc13f99eb15e82b661b8/adjuntos/326/imagenes/000/225/0000225120/790x0/smart/zodiaco.jpg"
        },
        {
            _id: "123122312",
            title: "O que já sabemos de 2024 ?",
            article: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid placeat aut adipisci assumenda quasi vel, officia nostrum vitae asperiores est, perspiciatis fugit odit nam accusantium ex hic voluptatum voluptate possimus!",
            date: "16/04/2024",
            src: "https://www.phenomidiomas.com.br/wp-content/uploads/2023/01/signos-em-ingles-por-que-falar-sobre-astrologia-em-outro-idioma.jpg"
        },
        {
            _id: "123132312",
            title: "Voce está com sorte ?",
            article: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid placeat aut adipisci assumenda quasi vel, officia nostrum vitae asperiores est, perspiciatis fugit odit nam accusantium ex hic voluptatum voluptate possimus!",
            date: "16/04/2024",
            src: "https://www.astrocentro.com.br/blog/wp-content/uploads/2020/03/estudar-astrologia-2-1.jpg"
        },
    ]

    const [blogs, setBlogs] = useState(false)


    useEffect(() => {
        setBlogs(Blogs)
        // console.log(blogs);
    }, [])



    return (
        <section className="sectionBlog" id="sectionBlog">

            <div className="contentBlog">
                <span>Blog</span>
                <h1>Fique por dentro de tudo sobre astrologia</h1>
                <p>Prepare-se para uma viagem fascinante rumo ao autoconhecimento e à compreensão dos desígnios celestiais.</p>
            </div>

            <div className="listBlog">


                {blogs &&
                    blogs.map(element => (
                        <div key={element._id} className="blogCard">
                            <img src={element.src} alt="" />
                            <h2>{element.title}</h2>
                            <span>{element.article}</span>
                            <a href={"/blog?" + element._id}>Leia mais...</a>
                        </div>
                    ))
                }








            </div>

            <label htmlFor=''>Página</label>
            <div className="cardCount">
                <button>-</button>
                <span>01</span>
                <button>+</button>
            </div>


        </section>
    )
}