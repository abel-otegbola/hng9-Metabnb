import "./navbar.css";
import logo from "../../imgs/logo.png";
import { FaBars } from "react-icons/fa"
import { useEffect, useState } from "react";

const Navbar = () => {
    const [menuToggle, setMenuToggle] = useState(false)
    const [scroll, setScroll] = useState("")

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 49 ) {
                setScroll("scrolled")
            }
            else {
                setScroll("")
            }
        })
    }, [ setScroll ])

    return (
        <div className={`navbar ${scroll}`}>
            <img src={logo} height="30px" alt="logo" />
            <nav className={(menuToggle) ? "active" : ""}>
                <div className="nav-menu">
                    <a href="/">Home</a>
                    <a href="/places">Place to stay</a>
                    <a href="/">NFTs</a>
                    <a href="/">Community</a>
                </div>
                <a className="cto-button" href="/">Connect wallet</a>
            </nav>
            <button className="nav-toggler" onClick={() => setMenuToggle(!menuToggle)}><FaBars /></button>
        </div>
    )
}

export default Navbar