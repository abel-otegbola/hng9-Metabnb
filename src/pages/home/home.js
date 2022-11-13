import "./home.css";
import heroImg from "../../imgs/hero-img.png";
import MBToken from "../../imgs/brands/MBToken.svg";
import metamask from "../../imgs/brands/metamask.svg";
import opensea from "../../imgs/brands/opensea.svg";
import Project from "../../components/project/project";
import { projects } from "../../data/projects";

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

            <div className="brands">
                <a href="/">
                    <img src={MBToken} alt="MBToken" height="40px"/>
                </a>
                <a href="/">
                    <img src={metamask} alt="MBToken" height="40px"/>
                </a>
                <a href="/">
                    <img src={opensea} alt="MBToken" height="40px"/>
                </a>
            </div>

            <div className="inspirations">
                <h1>Inspiration for your next adventure</h1>

                <div className="projects">
                    {
                        projects.filter(item => (item.id%2 === 0) ).map(project => {
                            return (
                                <Project project={project} key={project.id} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Home