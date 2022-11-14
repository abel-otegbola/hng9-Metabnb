import "./home.css";
import heroImg from "../../imgs/hero-img.png";
import MBToken from "../../imgs/brands/MBToken.svg";
import metamask from "../../imgs/brands/metamask.svg";
import opensea from "../../imgs/brands/opensea.svg";
import nfts from "../../imgs/nfts.png";
import { PlacesContext } from "../../context/placesContext";
import { useContext } from "react";
import PlaceContainer from "../../components/placeContainer/placeContainer";


const Home = () => {
    const places = useContext(PlacesContext)

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

            <div className="brands">
                <a href="/">
                    <img src={MBToken} alt="MBToken" height="35px"/>
                </a>
                <a href="/">
                    <img src={metamask} alt="MBToken" height="35px"/>
                </a>
                <a href="/">
                    <img src={opensea} alt="MBToken" height="35px"/>
                </a>
            </div>

            <div className="inspirations">
                <h1>Inspiration for your next adventure</h1>

                <div className="places">
                    {
                        places.filter(item => (item.id%2 === 0) ).map(place => {
                            return (
                                <PlaceContainer place={place} key={place.id} />
                            )
                        })
                    }
                </div>
            </div>

            <div className="nfts">
                <div className="nfts--texts">
                    <h1>Metabnb NFTs</h1>
                    <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
                    <a href="/">Learn more</a>
                </div>

                <img src={nfts} alt="nfts" />
            </div>
        </div>
    )
}

export default Home