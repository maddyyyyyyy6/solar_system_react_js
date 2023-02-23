import React, { useState } from "react";
import neptune from "../assets/neptune.png";
import "./planets.css";
import Sun from "../assets/planets/Sun.png";
import Mercury from "../assets/planets/Mercury.png";
import Venus from "../assets/planets/Venus.png";
import Earth from "../assets/planets/Earth.png";
import Mars from "../assets/planets/Mars.png";
import Jupiter from "../assets/planets/Jupiter.png";
import Saturn from "../assets/planets/Saturn.png";
import Neptune from "../assets/planets/Neptune.png";
import Uranus from "../assets/planets/Uranus.png";

const Planet = ({ orbit }) => {
    const [planet, setPlanet] = useState(planets[orbit - 1]);

    return (
        <>
            <img src={planet} className={`planet orbit${orbit}`} />
        </>
    );
};

export default Planet;

const planets = [Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune];
