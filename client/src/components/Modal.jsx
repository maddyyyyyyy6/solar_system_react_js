import React, { useEffect, useState } from "react";
import "./modal.css";
import Button from "./other/Button";
import CloseIcon from "@mui/icons-material/Close";

const Modal = ({ planet, setShowInfo }) => {
    const [_planet, set_Planet] = useState(planet);
    useEffect(() => {
        let new_planet_json = planet;
        set_Planet(new_planet_json);
    }, [planet]);
    console.log(_planet);

    return (
        <div className="modal flex flex-col items-start justify-start">
            {/* image */}
            <div className="text-right">
                <CloseIcon
                    sx={{ cursor: "pointer" }}
                    onClick={() => setShowInfo(false)}
                />
            </div>
            {/* informatins */}
            <div className="flex-1">
                <h3 className="text-2xl">{_planet.name}</h3>
                <p>{_planet.position_in_number}th Planet</p>
                <ul>
                    <li>
                        Mass:{"  "} {_planet.mass}
                    </li>
                    <li>Diameter: {_planet.diameter}</li>
                </ul>
            </div>
            {/* buttons */}
            <Button text="Read More..." />
        </div>
    );
};

export default Modal;
