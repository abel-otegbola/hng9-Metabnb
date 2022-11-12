import "./navbar.css";
import logo from "../../imgs/logo.png";
import { FaBars } from "react-icons/fa"
import { useState } from "react";

const Navbar = () => {
    const [menuToggle, setMenuToggle] = useState(false)

    return (
        <div className="navbar">
            <img src={logo} height="30px" alt="logo" />
            <nav className={(menuToggle) ? "active" : ""}>
                <div className="nav-menu">
                    <a href="/">Home</a>
                    <a href="/">Place to stay</a>
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