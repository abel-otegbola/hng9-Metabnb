import "./footer.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../../imgs/logo-white.svg";

const Footer = () => {
    return (
        <footer>
            <div className="brand">
                <img src={logo} alt="logo" height="35px" />
                <div className="socials">
                    <li><a href="https://facebook.com"><FaFacebookF /></a></li>
                    <li><a href="https://instagram.com"><FaInstagram /></a></li>
                    <li><a href="https://twitter.com"><FaTwitter /></a></li>
                </div>
            </div>

            <ul>
                <h3>Community</h3>
                <li><a href="/">NFTs</a></li>
                <li><a href="/">Tokens</a></li>
                <li><a href="/">Landlords</a></li>
                <li><a href="/">Discord</a></li>
            </ul>

            <ul>
                <h3>Places</h3>
                <li><a href="/places">Castle</a></li>
                <li><a href="/places">Farms</a></li>
                <li><a href="/places">Beach</a></li>
                <li><a href="/places">Learn more</a></li>
            </ul>
            
            <ul>
                <h3>About us</h3>
                <li><a href="/">Roadmaps</a></li>
                <li><a href="/">Creators</a></li>
                <li><a href="/">Career</a></li>
                <li><a href="/">Contact us</a></li>
            </ul>

            <p>&copy; {new Date().getFullYear()} Metabnb</p>
        </footer>
    )
}

export default Footer;