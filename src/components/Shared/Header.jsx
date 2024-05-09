import { useState, useEffect, useRef } from "react"
import "./Header.css"



export default function Header() {
    const [showMenu, setShowMenu] = useState(true)

    function changeMenu() {
        if (showMenu) setShowMenu(false)
        else setShowMenu(true)
    }

    useEffect(() => { if (window.innerWidth <= 767) setShowMenu(false) }, []);

    return (
        <header>
            <div className="header__logo">Giotrology</div>
            {showMenu &&
                <nav >
                    <ul className="header__nav">
                        <li className="header__nav-item"><a href="/">Início</a></li>
                        <li className="header__nav-item"><a href="/articles">Artigos</a></li>
                        <li className="header__nav-item"><a href="#sectionSign">Signos</a></li>
                        <li className="header__nav-item"><a href="/payment">Mapa Astral</a></li>
                    </ul>
                </nav>
            }
            <button className="header__btnMenu" onClick={changeMenu}>
                {!showMenu && <i className="fa-solid fa-bars"></i>}
                {showMenu && <i className="fa-solid fa-xmark"></i>}
            </button>

        </header>
    )
}

