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
    const [planet, setPlanet] = useState({
        name: planets[orbit - 1],
        size: {
            x: "200px",
            y: "200px",
        },
    });

    return (
        <>
            <img
                src={planet.name}
                className={`planet orbit${orbit} w-[${planet.width}] h-[${planet.height}]`}
            />
        </>
    );
};

export default Planet;

const planets = {
    Mercury: {
        size: {
            x: "80px",
            y: "80px",
        },
    },
    Venus: {
        size: {
            x: "80px",
            y: "80px",
        },
    },
    Earth: {
        size: {
            x: "80px",
            y: "80px",
        },
    },
    Mars: {
        size: {
            x: "80px",
            y: "80px",
        },
    },
    Jupiter: {
        size: {
            x: "80px",
            y: "80px",
        },
    },
    Saturn: {
        size: {
            x: "80px",
            y: "80px",
        },
    },
    Uranus: {
        size: {
            x: "80px",
            y: "80px",
        },
    },
    Neptune: {
        size: {
            x: "80px",
            y: "80px",
        },
    },
};
