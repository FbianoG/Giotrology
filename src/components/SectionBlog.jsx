import { useState } from "react"
import "./SectionBlog.css"
import { useEffect } from "react"



export default function SectionBlog() {


    const [blogs, setBlogs] = useState(false)

    const urlBack = "https://giotrology-back.vercel.app"




    async function getArticles() {
        const response = await fetch(`${urlBack}/getArticles`, {
            method: "POST",
            body: JSON.stringify(),
            headers: { "Content-Type": "application/json" }
        })
        const data = await response.json()
        setBlogs(data)
    }





    useEffect(() => {
        getArticles()
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
                            <span>{element.articles[0].article[0]}</span>
                            <a href={"/blog?id=" + element._id}>Leia mais...</a>
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