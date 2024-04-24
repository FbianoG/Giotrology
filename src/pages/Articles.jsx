import { useState, useEffect } from "react";
import './Articles.css'
import Stars from "../components/Common/Stars";
import Footer from "../components/Shared/Footer";
import Header from "../components/Shared/Header";
import urlBack from '../utils/api.js'
import CardArticle from "../components/Layout/CardArticle.jsx";

export default function Articles() {

    const [Articles, setArticles] = useState(false)

    async function getArticles() {
        const response = await fetch(`${urlBack}/getArticles`, {
            method: "POST",
            body: JSON.stringify(),
            headers: { "Content-Type": "application/json" }
        })
        const data = await response.json()
        if (response.ok) {
            setArticles(data)
        }
    }
  
    useEffect(() => {
        getArticles()
    }, [])

    return (
        <>
            <Header />
            <div className="content">
                <h1 className="title">Todos os Artigos</h1>
                <div className="listBlog">
                    {Articles &&
                        Articles.map((element, index) => (
                            <CardArticle key={index} data={element} />
                        ))
                    }
                </div>
                <CardArticle />
                <Stars />
            </div>
            <Footer />
        </>
    )
}