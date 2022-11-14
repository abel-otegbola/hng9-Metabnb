import Project from "../../components/project/project";
import { projects } from "../../data/projects";
import "./places.css";
import filterIcon from "../../imgs/filter.svg"

const Places = () => {
    return (
        <div className="places">
            <div className="categories">
                <button>Location <img src={filterIcon} alt="filter icon" width="20px" /></button>
            </div>
            <div className="places--list">
                <div className="projects">
                    {
                        projects.map(project => {
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

export default Places;