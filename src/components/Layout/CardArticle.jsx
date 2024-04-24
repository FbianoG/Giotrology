import './CardArticle.css'


export default function CardArticle({ data }) {
    return (
        data &&
        <div key={data._id} className="blogCard">
            <img src={data.src} alt={data.title} />
                <h2>{data.title}</h2>
                <span>{data.articles[0].article}</span>
                <a href={"/article?id=" + data._id}>Leia mais...</a>

        </div>

    );
}
