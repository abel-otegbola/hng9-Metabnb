import PlaceContainer from "../../components/placeContainer/placeContainer";
import "./places.css";
import filterIcon from "../../imgs/filter.svg"
import { useContext } from "react";
import { PlacesContext } from "../../context/placesContext";

const Places = () => {
    const places = useContext(PlacesContext)

    return (
        <div className="places--page">
            <div className="categories">
                <button>Location <img src={filterIcon} alt="filter icon" width="20px" /></button>
            </div>
            <div className="places--list">
                <div className="places">
                    {
                        places.map(place => {
                            return (
                                <PlaceContainer place={place} key={place.id} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Places;