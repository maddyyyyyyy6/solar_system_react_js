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
    const [planet, setPlanet] = useState(planets[orbitmapping[orbit]]);

    return (
        <>
            <img
                title={planet.name}
                src={planet.planet}
                className={`planet orbit${orbit} ${planet.name}`}
            />
        </>
    );
};

export default Planet;

const planets = {
    Mercury: {
        name: "Mercury",
        planet: Mercury,
        size: {
            x: "50",
            y: "50",
        },
    },
    Venus: {
        name: "Venus",
        planet: Venus,
        size: {
            x: "20px",
            y: "20px",
        },
    },
    Earth: {
        name: "Earth",
        planet: Earth,
        size: {
            x: "50px",
            y: "50px",
        },
    },
    Mars: {
        name: "Mars",
        planet: Mars,
        size: {
            x: "50px",
            y: "50px",
        },
    },
    Jupiter: {
        name: "Jupiter",
        planet: Jupiter,
        size: {
            x: "50px",
            y: "50px",
        },
    },
    Saturn: {
        name: "Saturn",
        planet: Saturn,
        size: {
            x: "50px",
            y: "50px",
        },
    },
    Uranus: {
        name: "Uranus",
        planet: Uranus,
        size: {
            x: "50px",
            y: "50px",
        },
    },
    Neptune: {
        name: "Neptune",
        planet: Neptune,
        size: {
            x: "50px",
            y: "50px",
        },
    },
};

const orbitmapping = {
    1: "Mercury",
    2: "Venus",
    3: "Earth",
    4: "Mars",
    5: "Jupiter",
    6: "Saturn",
    7: "Uranus",
    8: "Neptune",
};
