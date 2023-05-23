import React, {useState} from "react";
import star from "../assets/icons/star.svg";
import star2 from "../assets/icons/select_star.svg";

const Star = () => {
    const [favEvent, setFavEvent] = useState(false);

    const handleFavEvent = () => {
        setFavEvent(!favEvent);
    };

    return (
        <div onClick={handleFavEvent}>
            {!favEvent ? (
                <img
                    className="bg-Stroke rounded-lg p-2.5 cursor-pointer"
                    src={star}
                    alt=""
                />
            ) : (
                <img
                    className="bg-Stroke rounded-lg p-2.5 cursor-pointer"
                    src={star2}
                    alt=""
                />
            )}
        </div>
    );
};

export default Star;
