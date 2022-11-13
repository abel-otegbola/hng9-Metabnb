import "./project.css";
import { FaStar } from "react-icons/fa";

const Project = ({ project }) => {
    return (
        <div className="project">
            <img src={project.img} alt="project" />

            <div className="project-texts">
                <div className="info">
                    <p>{project.title}</p>
                    <p>{project.description}</p>
                </div>

                <div className="info">
                    <p>{project.distance}km away</p>
                    <p>available for {project.availability} stay</p>
                </div>

                <div className="star-rating">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
            </div>
        </div>
    )
}

export default Project;