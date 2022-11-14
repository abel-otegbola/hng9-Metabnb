import "./placeContainer.css";
import { FaHeart, FaStar } from "react-icons/fa";

const PlaceContainer = ({ place }) => {

    return (
        <div className="place">
            <img src={place.img} alt="place" />

            <FaHeart className="heart" />

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