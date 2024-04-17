import { useState, useEffect, useRef } from "react"
import "./SectionBlog.css"




export default function SectionBlog() {

    const urlBack = "https://giotrology-back.vercel.app"

    const [blogs, setBlogs] = useState(false)
    const [numBlogs, setNumBlogs] = useState(false)

    const [countBlog, setCountBlog] = useState(1)
    const countPage = useRef()


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

    function name() {
        countPage.current.textContent = countBlog
        console.log(countBlog);
        const newBlogs = blogs.filter((element, index) => {
            if (index < countBlog * 4 && index >= (countBlog * 4) - 4) {
                return element
            }
        })
        setNumBlogs(newBlogs)
    }

    function nextPage() {
        setCountBlog(countBlog + 1)
    }

    function previusPage() {
        if (countBlog - 1 == 0) {
            return
        }
        setCountBlog(countBlog - 1)
    }


    useEffect(() => {
        getArticles()
    }, [])

    useEffect(() => {
        if (blogs) {
            name()
        }
    }, [blogs])

    useEffect(() => {
        countPage.current.textContent = countBlog
        console.log(countBlog)
        if (blogs) {
            name()
        }
    }, [countBlog])



    return (
        <section className="sectionBlog" id="sectionBlog">

            <div className="contentBlog">
                <span>Blog</span>
                <h1>Fique por dentro de tudo sobre astrologia</h1>
                <p>Prepare-se para uma viagem fascinante rumo ao autoconhecimento e à compreensão dos desígnios celestiais.</p>
            </div>

            <div className="listBlog">


                {numBlogs &&
                    numBlogs.map(element => (
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
                <button onClick={previusPage}>-</button>
                <span ref={countPage}></span>
                <button onClick={nextPage}>+</button>
            </div>


        </section>
    )
}