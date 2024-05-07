import { useState, useEffect, useRef } from "react"
import "./Header.css"



export default function Header() {
    const [showMenu, setShowMenu] = useState(true)

    function changeMenu() {
        if (showMenu) setShowMenu(false)
        else setShowMenu(true)
    }

    useEffect(() => {
        if (window.innerWidth <= 767) {
            setShowMenu(false);
        }
    }, []);

    return (
        <header>

            <div className="logo">
                Giotrology
            </div>
            {showMenu &&
                <nav >
                    <a href="/">Início</a>
                    <a href="/articles">Artigos</a>
                    <a href="#sectionSign">Signos</a>
                    <a href="/payment">Mapa Astral</a>
                </nav>
            }
            <button className="header__btnMenu" onClick={changeMenu}>
                {!showMenu && <i className="fa-solid fa-bars"></i>}
                {showMenu && <i className="fa-solid fa-xmark"></i>}
            </button>

        </header>
    )
}

