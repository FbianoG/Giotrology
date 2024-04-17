import "./Header.css"



export default function Header() {

    return (
        <header>

            <div className="logo">
                Giotrology
            </div>
            <nav>
                <a href="/">Início</a>
                <a href="#sectionBlog">Blog</a>
                <a href="#sectionSign">Signos</a>
                <a href="#sectionPrice">Mapa Astral</a>
            </nav>

        </header>
    )
}

