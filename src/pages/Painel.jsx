import { useState, useEffect, useRef } from 'react'
import "./Painel.css";

export default function Painel() {


    const createList = useRef()
    const title = useRef()
    const linkUrl = useRef()

    function createParagraph() {
        const count = createList.current.querySelectorAll('input').length
        const newPara = document.createElement('textarea')
        newPara.className = "article" + count
        newPara.placeholder = "Parágrafo 0" + (count)
        createList.current.appendChild(newPara)
    }

    function createSubTitle() {
        const count = createList.current.querySelectorAll('input').length
        const newSub = document.createElement('input')
        newSub.placeholder = "Subtítulo 0" + (count + 1)
        createList.current.appendChild(newSub)
    }

    async function save() {
        const totalSub = createList.current.querySelectorAll('input').length
        const art = {
            title: title.current.value,
            date: new Date(),
            src: linkUrl.current.value,
            articles: []
        }

        for (let i = 1; i <= totalSub; i++) {
            const allArticle = Array.from(createList.current.querySelectorAll('.article' + i))
            const arrayArticle = allArticle.map(element => element.value)
            const newParagraphs = { subTitle: createList.current.querySelectorAll('input')[i - 1].value, article: arrayArticle }
            art.articles.push(newParagraphs)

        }
        
        const response = await fetch("http://localhost:3000/createArticle", {
            method: "POST",
            body: JSON.stringify(art),
            headers: { "Content-Type": "application/json" }
        })

        const data = await response.json()
        console.log(data)
    }

    return (
        <div className='formCreateArticle'>
            <h2>Criar Novo Artigo</h2>
            <input type='text' name='' placeholder="Título" ref={title} />
            <br />
            <input type='text' name='' placeholder="Link Imagem" ref={linkUrl} />
            <div ref={createList} className='formParagraphs'>
                <input type='text' name='' placeholder="Subtítulo 01" />
                <textarea className="article1" placeholder='Parágrafo 01'></textarea>
            </div>
            <div className="formCreateArticleButtons">
                <button onClick={createParagraph}>Add Parágrafo</button>
                <button onClick={createSubTitle}>Add Subtítulo</button>
                <button onClick={save}>Criar</button>
            </div>
        </div>
    )
}