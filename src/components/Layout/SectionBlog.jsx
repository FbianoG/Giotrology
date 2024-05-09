import { useState, useEffect, useRef } from "react"
import axios from "axios"
import "./SectionBlog.css"
import urlBack from '../../utils/api.js'
import Loader from "../Common/Loader.jsx"
import CardArticle from "./CardArticle.jsx"
import HeadSection from "../Common/HeadSection.jsx"

export default function SectionBlog() {

    // Variáveis
    const [blogs, setBlogs] = useState(false)

    // Funções
    async function getArticles() {
        try {
            const response = await axios.post(`${urlBack}/getArticles`,)
            setBlogs(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    // Chamadas
    useEffect(() => { getArticles() }, [])

    return (
        <section className="articles">
            <HeadSection data={{ legend: "Artigos", title: 'Fique por dentro de tudo sobre astrologia', text: 'Prepare-se para uma viagem fascinante rumo ao autoconhecimento e à compreensão dos desígnios celestiais.' }} />
            <div className="articles__list">
                {blogs && blogs.map((element, index) => {
                    if (index >= 3) return
                    return <CardArticle key={index} data={element} />
                })}
                {!blogs && <Loader />} :
            </div>
            <a href='/articles' className="btnViewMore" >Todos os artigos</a>
        </section>
    )
}