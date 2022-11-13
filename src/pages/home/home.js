import "./home.css";
import heroImg from "../../imgs/hero-img.png";

const Home = () => {
    return (
        <div className="home">
            <div className="hero-section">
                <div className="hero-section--texts">
                    <h1>Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span></h1>
                    <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                    <div className="search-field">
                        <input type="text" placeholder="Search for location" />
                        <button>Search</button>
                    </div>
                </div>

                <img src={heroImg} alt="metabnb-hero"/>
            </div>
        </div>
    )
}

export default Home