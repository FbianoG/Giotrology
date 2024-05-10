import { useState, useEffect } from "react";
import './Articles.css'
import Stars from "../components/Common/Stars";
import Footer from "../components/Shared/Footer";
import Header from "../components/Shared/Header";
import urlBack from '../utils/api.js'
import CardArticle from "../components/Layout/CardArticle.jsx";
import axios from "axios";
import HeadSection from "../components/Common/HeadSection.jsx";
import Loader from "../components/Common/Loader.jsx";

export default function Articles() {

    const [articles, setArticles] = useState(false)

    async function getArticles() {
        const response = await axios.post(`${urlBack}/getArticles`)
        setArticles(response.data)
    }

    useEffect(() => {getArticles()}, [])

    return (
        <>
            <Header />
            <div className="content">
                <HeadSection data={{ title: 'Todos os Artigos', text: 'Por Giovanna Salles' }} />
                <div className="articles__list">
                    {articles && articles.map((element, index) => {
                        if (index >= 3) return
                        return <CardArticle key={index} data={element} />
                    })}
                    {!articles && <Loader />} :
                </div>
            </div>
            <Stars />
            <Footer />
        </>
    )
}