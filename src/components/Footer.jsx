import "./Footer.css"


export default function Footer() {

    return (
        <footer>
            <div className="backdrop"></div>

            <div className="description">
                <h3>Contatos</h3>
                <div className="descriptionData">
                    <span>São Gonçalo, RJ - Brasil</span>
                    <span>GiovannaSapeca@gmail.com</span>
                    <span>@GigiGatinha</span>
                </div>
            </div>
            <div className="description">
                <h3>Serviços</h3>
                <div className="descriptionData">
                    <span>Sobre mim</span>
                    <span>Preços</span>
                    <span>Blog</span>
                </div>
            </div>

            <div className="logo">
                <h1>Giotrology</h1>
            </div>



        </footer>
    )
}