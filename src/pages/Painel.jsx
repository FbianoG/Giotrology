import { useState } from 'react'
import './Painel.css'
import { useEffect } from 'react'
import axios from 'axios'
import urlBack from '../utils/api'
import Button from '../components/Common/Button'
import Stars from '../components/Common/Stars'
import Footer from '../components/Shared/Footer'

export default function Painel() {
    const [text, setText] = useState(null)
    const [title, setTitle] = useState(null)
    const [src, setSrc] = useState(null)
    const [article, setArticle] = useState(false)

    const [textUpdate, setTextUpdate] = useState('')
    const [titleUpdate, setTitleUpdate] = useState('')
    const [srcUpdate, setSrcUpdate] = useState('')
    const [articleUpdate, setArticleUpdate] = useState('')
    const [showUpdate, setShowUpdate] = useState(false)
    const [updateId, setUpdateId] = useState('')

    const [listArticle, setListArticle] = useState(false)
    const [articles, setArticles] = useState([])
    const [findArticle, setFindArticle] = useState(null)


    function changeText() {
        if (!text || text.trim() === '') return
        setArticle(text.split('\n'))
    }

    async function createArticle() { // Cria artigo no DataBase
        console.log(article.length);
        try {
            const response = await axios.post(`${urlBack}/createArticle`, { title, src, article, })
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    async function getArticles() { // get artigos no DataBase
        try {
            const response = await axios.post(`${urlBack}/getArticles?`,)
            setArticles(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    async function getArticle(id) { // get artigo no DataBase
        try {
            const response = await axios.post(`${urlBack}/getArticle?id=${id}`,)
            setTextUpdate(response.data.article.join('\n'))
            setTitleUpdate(response.data.title)
            setSrcUpdate(response.data.src)
            setUpdateId(id)
            setShowUpdate(true)
        } catch (error) {
            console.log(error);
        }
    }

    async function updateArticle(e) { // Atualiza artigo no DataBase
        e.preventDefault()
        try {
            const response = await axios.post(`${urlBack}/updateArticle`, { _id: updateId, title: titleUpdate, src: srcUpdate, article: textUpdate.split('\n') })
            console.log(response.data);
            setShowUpdate(false)
            getArticles()
        } catch (error) {
            console.log(error);
        }
    }

    async function deleteArticle(e) { // Deleta artigo no DataBase
        try {
            const response = await axios.post(`${urlBack}/deleteArticle`, { _id: e })
            console.log(response);
            getArticles()
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (article) {
            createArticle()
        }
    }, [article])

    return (
        <>
            <div className="content">

                {listArticle && <button className='btn__changeForm' onClick={(e) => setListArticle(false)} type='default'>Criar de Artigos</button>}
                {!listArticle && <button className='btn__changeForm' onClick={(e) => { getArticles(), setListArticle(true) }} type='default'>Lista de Artigos</button>}
                {!listArticle &&
                    <>
                        <h2 className='content__title'>Criar Artigo</h2>
                        <form className='form__article'>
                            <label htmlFor='' >Título:</label>
                            <input type='text' className='form__input' value={title} onChange={(e) => setTitle(e.target.value)} />
                            <label htmlFor=''>Url imagem:</label>
                            <input type='text' className='form__input' value={src} onChange={(e) => setSrc(e.target.value)} />
                            <label htmlFor=''>Artigo:</label>
                            <textarea className='form__textarea' value={text} onChange={(e) => setText(e.target.value)} ></textarea>
                            <Button main text={'Criar Artigo'} functions={changeText} />
                        </form>
                    </>
                }
                {listArticle && !showUpdate &&
                    <>
                        <h2 className='content__title'>Lista De Artigos</h2>
                        <div className="form__article list">
                            {articles.map(element => (
                                <div key={element._id} className="listArticle__iten">
                                    <span>{element.title}</span>
                                    <span>{element.date.slice(0, 10).split('-').reverse().join('/')}</span>
                                    <div className="listArticle__iten cotainerBtn">
                                        <button onClick={() => deleteArticle(element._id)} >Exluir</button>
                                        <button onClick={() => { getArticle(element._id) }}>Editar</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                }

                {showUpdate &&
                    <>
                        <h2 className='content__title'>Editar Artigo</h2>
                        <form className='form__article' >
                            <label htmlFor='' >Título:</label>
                            <input type='text' className='form__input' value={titleUpdate} onChange={(e) => setTitleUpdate(e.target.value)} />
                            <label htmlFor=''>Url imagem:</label>
                            <input type='text' className='form__input' value={srcUpdate} onChange={(e) => setSrcUpdate(e.target.value)} />
                            <label htmlFor=''>Artigo:</label>
                            <textarea className='form__textarea' value={textUpdate} onChange={(e) => setTextUpdate(e.target.value)} ></textarea>
                            <Button main text={'Editar Artigo'} functions={(e) => updateArticle(e)} />
                            <Button text={'Cancelar'} functions={(e) => { e.preventDefault(), setShowUpdate(false) }} />
                        </form>
                    </>
                }




            </div>
            <Footer />
            <Stars />
        </>

    )
}