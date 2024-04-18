import "./Footer.css"


export default function Footer() {

    return (
        <footer>
            <div className="backdrop"></div>

            <div className="description">
                <h3>Contatos</h3>
                <div className="descriptionData">
                    <a href='https://maps.app.goo.gl/ZfAA7pT3MZaxJmX49' target='_blank'>São Gonçalo, RJ - Brasil</a>
                    <a href='' >GiovannaSalles@gmail.com</a>
                    <a href='https://www.instagram.com/giovannasallentel/' target='_blank'>@giovannasallentel</a>
                </div>
            </div>
            <div className="description">
                <h3>Serviços</h3>
                <div className="descriptionData">
                    <a >Sobre mim</a>
                    <a href='' >Preços</a>
                    <a href=''>Blog</a>
                </div>
            </div>

            <div className="logo">
                <h1>Giotrology</h1>
                <div className="logoSocial">
                    <a href='' ><i className="fa-brands fa-facebook-f"></i></a>
                    <a href='https://www.instagram.com/giovannasallentel/' target='_blank'><i className="fa-brands fa-instagram"></i></a>
                    <a href='' ><i className="fa-brands fa-whatsapp"></i></a>
                </div>
            </div>



        </footer>
    )
}