import "./Loader.css"

export default function Loader() {

    return (
        <div className="cardLoader">
            <div className="loader">
                <p>Carregando</p>
                <div className="words">
                    <span className="word">estrelas</span>
                    <span className="word">planetas</span>
                    <span className="word">artigos</span>
                    <span className="word">constelações</span>
                    <span className="word">estrelas</span>
                </div>
            </div>
        </div>
    )
}