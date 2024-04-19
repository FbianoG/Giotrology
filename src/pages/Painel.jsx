import { useState, useEffect, useRef } from 'react'
import "./Painel.css";
import urlBack from '../assets/api'

export default function Painel() {

    const alert = useRef()
    const createList = useRef()
    const title = useRef()
    const linkUrl = useRef()
    const editBtn = useRef()
    const createBtn = useRef()

    const [editArticle, setEditArticle] = useState(true)

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
        newSub.className = "sub" + (count + 1)
        const newDelBtn = document.createElement("button")
        newDelBtn.textContent = "Excluir"
        createList.current.appendChild(newSub)
        createList.current.appendChild(newDelBtn)
        newDelBtn.addEventListener("click", () => del(newDelBtn, count + 1))
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

        try {
            const response = await fetch(`${urlBack}/createArticle`, {
                method: "POST",
                body: JSON.stringify(art),
                headers: { "Content-Type": "application/json" }
            })
            const data = await response.json()
            if (response.ok) {
                console.log(data)
                alert.current.style.color = "green"
                alert.current.textContent = data.message
                setEditArticle(true)
            } else {
                alert.current.style.color = "red"
                alert.current.textContent = data.message

            }
        } catch (error) {
            console.log(error)
        }
    }

    function del(btn, e) {
        const allDelete = document.querySelectorAll(`.article${e}`)
        const allDelete2 = document.querySelectorAll(`.sub${e}`)
        allDelete.forEach(element => element.remove())
        allDelete2.forEach(element => element.remove())
        btn.remove()
    }


    useEffect(() => {
        if (editArticle) {
            createBtn.current.style.opacity = "0.2"
            createBtn.current.style.height = "35px"
            editBtn.current.style.opacity = ""
            editBtn.current.style.height = ""
        } else {
            editBtn.current.style.opacity = "0.2"
            editBtn.current.style.height = "35px"
            createBtn.current.style.opacity = ""
            createBtn.current.style.height = ""
        }
    }, [editArticle])

    return (
        <>
            <div className="headerPainel">
                <button ref={editBtn} onClick={() => setEditArticle(true)}>Editar Artigos</button>
                <button ref={createBtn} onClick={() => setEditArticle(false)}>Criar Artigo</button>
            </ div>
            {editArticle ?
                ""
                :
                <>
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

                </>
            }
            <h3 ref={alert} className='alertCreateArticle'></h3>
        </>

    )
}