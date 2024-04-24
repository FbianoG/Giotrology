import { useState, useEffect, useRef } from "react"
import "./SectionBlog.css"
import urlBack from '../../utils/api.js'
import Loader from "../Common/Loader.jsx"
import CardArticle from "./CardArticle.jsx"



export default function SectionBlog() {

    const [blogs, setBlogs] = useState(false)

    async function getArticles() {
        const response = await fetch(`${urlBack}/getArticles`, {
            method: "POST",
            body: JSON.stringify(),
            headers: { "Content-Type": "application/json" }
        })
        const data = await response.json()
        if (response.ok) {
            setBlogs(data)
        }
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
                {blogs ?
                    blogs.map((element, index) => {
                        if (index >= 3) {
                            return
                        }
                        return <CardArticle key={index} data={element} />
                    }
                    )
                    :
                    <Loader />
                }
            </div>
            <a href='/articles' className="btnViewMore" >Todos os artigos</a>


        </section>
    )
}