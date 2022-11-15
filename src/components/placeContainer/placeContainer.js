import "./placeContainer.css";
import { FaHeart, FaStar } from "react-icons/fa";
import { useContext } from "react";
import { PlacesContext } from "../../context/placesContext";

const PlaceContainer = ({ place }) => {
    const {likePlace} = useContext(PlacesContext);

    return (
        <div className="place">
            <img src={place.img} alt="place" />

            <FaHeart className={`heart ${place.liked ? "liked" : ""}`} onClick={() => likePlace(place.id)}/>

            <div className="place-texts">
                <div className="info">
                    <p>{place.title}</p>
                    <p>{place.description}</p>
                </div>

                <div className="info">
                    <p>{place.distance}km away</p>
                    <p>available for {place.availability} stay</p>
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

export default PlaceContainer;