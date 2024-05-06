import { useEffect, useRef, useState } from "react"
import "./SectionTitleBlog.css"
import FormEmail from "../Common/FormEmail"


export default function SectionTitleBlog() {

    const [article, setArticle] = useState(false)
    const urlBack = "https://giotrology-back.vercel.app"

    async function getArticle() {
        const urlQuery = new URLSearchParams(window.location.search).get("id")
        const response = await fetch(`${urlBack}/getArticle?id=${urlQuery}`, {
            method: "POST",
            body: JSON.stringify(),
            headers: { "Content-Type": "application/json" }
        })
        const data = await response.json()
        setArticle([data])
    }

    useEffect(() => {
        getArticle()
    }, [])

    return (
        <article>
            {article &&
                article.map(element => (
                    <div key={element._id}>
                        <section className="sectionTitleBlog">
                            <img src={element.src} alt="" />
                            <h1 className="titleBlogContent">{element.title}</h1>
                        </section>
                        <div className="sectionContentBlog">
                            <legend>
                                <span>em: {element.date.slice(0, 10).split("-").reverse().join("/")}</span>
                                <br />
                                <span>por: Giovanna Salles</span>
                            </legend>
                            {element.article.map(e => {
                                if (e.slice(0, 2) === '**') return <h2>{e.slice(2)}</h2>
                                else return (<><p>{e}</p> <br /></>)

                            })}
                        </div>
                        <FormEmail />
                    </div>



                ))
            }



        </article >

    )
}