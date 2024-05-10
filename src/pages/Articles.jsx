import { useState, useEffect } from "react";
import './Articles.css'
import Stars from "../components/Common/Stars";
import Footer from "../components/Shared/Footer";
import Header from "../components/Shared/Header";
import urlBack from '../utils/api.js'
import CardArticle from "../components/Layout/CardArticle.jsx";
import axios from "axios";

export default function Articles() {

    const [Articles, setArticles] = useState(false)

    async function getArticles() {
        const response = await axios.post(`${urlBack}/getArticles`)
        console.log(response);
        setArticles(response.data)
    }

    useEffect(() => {
        getArticles()
    }, [])

    return (
        <>
            <Header />
            <div className="content">
                <h1 className="list__articles-title">Todos os Artigos</h1>
                <div className="list__articles">
                    {Articles &&
                        Articles.map(element => (
                            <CardArticle key={element._id} data={element} />
                        ))
                    }
                </div>

                <Stars />
            </div>
            <Footer />
        </>
    )
}