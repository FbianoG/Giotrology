import "./Footer.css"

export default function Footer() {

    return (
        <footer>
            <div className="footer__backdrop"></div>
            <div className="footer__datails">
                <h3 className="footer__datails-title">Contatos</h3>
                <div className="footer__details-nav">
                    <li className="details__nav-item"><a href='https://maps.app.goo.gl/ZfAA7pT3MZaxJmX49'>São Gonçalo, RJ - Brasil</a></li>
                    <li className="details__nav-item"><a href='' >GiovannaSalles@gmail.com</a></li>
                    <li className="details__nav-item"><a href='https://www.instagram.com/giovannasallentel/' target='_blank'>@giovannasallentel</a></li>
                </div>
            </div>
            <div className="footer__datails">
                <h3 className="footer__datails-title">Serviços</h3>
                <nav>
                    <ul className="footer__details-nav">
                        <li className="details__nav-item"><a href=''>Sobre mim</a></li>
                        <li className="details__nav-item"><a href=''>Artigos</a></li>
                        <li className="details__nav-item"><a href=''>Preços</a></li>
                    </ul>
                </nav>
            </div>
            <div className="footer__logo">
                <h1 className="footer__logo-title">Giotrology</h1>
                <div className="footer__logo-icons">
                    <a className="logo__icons-itens" href='' ><i className="fa-brands fa-facebook-f"></i></a>
                    <a className="logo__icons-itens" href='https://www.instagram.com/giovannasallentel/' target='_blank'><i className="fa-brands fa-instagram"></i></a>
                    <a className="logo__icons-itens" href='' ><i className="fa-brands fa-whatsapp"></i></a>
                </div>
            </div>
        </footer>
    )
}