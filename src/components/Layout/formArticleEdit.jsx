import './FormArticleEdit.css'



export default function FormArticleEdit(props) {

    console.log(props);
    return (
        <>
            <div className='formCreateArticle'>
                {
                    <>
                        <input type='text' name='' defaultValue={props.article.title} />
                        <br />
                        <input type='text' name='' defaultValue={props.article.src} />
                        {props.article.articles.map((element, index) => (
                            <div className='formParagraphs' key={index} ref={props.ref}>
                                <input type='text' name='' defaultValue={element.subTitle} className={`sub${index + 1}`} />
                                <button onClick={(btn) => props.function.del(btn.target, index + 1)}>Deletar</button>
                                {element.article.map(e => (
                                    <>
                                        <textarea id="" defaultValue={e} className={`article${index + 1}`}></textarea >
                                    </>
                                ))}
                            </div>
                        ))}
                        <div className="formCreateArticleButtons">
                            <button onClick={props.function.createParagraph}>Add Parágrafo</button>
                            <button onClick={props.function.createSubTitle}>Add Subtítulo</button>
                            {/* <button onClick={}>Criar</button> */}
                        </div>
                    </>
                }
            </div>
        </>
    )
}