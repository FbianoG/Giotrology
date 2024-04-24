import './FormArticleEdit.css'
import Button from '../Common/Button'


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
                                <button onClick={(btn) => props.function.deleteParagraph(btn.target, index + 1)}>Deletar</button>
                                {element.article.map(e => (
                                    <>
                                        <textarea id="" defaultValue={e} className={`article${index + 1}`}></textarea >
                                    </>
                                ))}
                            </div>
                        ))}
                        <div className="formCreateArticleButtons">
                            <Button main={true} text="Add Parágrafo" functions={props.function.createParagraph}/>
                            <Button main={true} text="Add Parágrafo" functions={props.function.createSubTitle}/>
                            <Button main={false} text="Salvar" functions={props.function.createParagraph}/>

                        </div>
                    </>
                }
            </div>
        </>
    )
}