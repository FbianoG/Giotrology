import './CardArticle.css'

export default function CardArticle({ data }) {
    return (
        <div key={data._id} className="article__card">
            <img src={data.src} alt={data.title} />
            <h2 className='article__card-title'>{data.title}</h2>
            <p className='article__card-content'>{data.article[0].slice(0, 2) === '**' ? data.article[1] : data.article[0]}</p>
            <a href={"/article?id=" + data._id}>Leia mais...</a>
        </div>
    )
}