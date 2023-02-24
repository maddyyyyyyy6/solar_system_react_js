import React, { useEffect, useState } from "react";
import Planet from "./Planet";
import "./orbit.css";

const Orbit = ({ orbitSize, orbit, planet, setPlanet }) => {
    // const [orbitSize, setOrbitSize] = useState("100");

    // useEffect(() => {
    //     newOrbit = orbitsSize(index - 1);
    //     setOrbitSize();
    // }, [index]);
    return (
        <div
            className={`orbitline${orbit} border-[1px] rounded-full border-gray-400 border-dotted absolute`}
            style={{
                width: orbitSize,
                height: orbitSize,
            }}
        >
            <Planet orbit={orbit} setPlanetInfo={setPlanet} />
        </div>
    );
};

export default Orbit;

// values for orbits

const orbitsSize = [100, 200, 300, 400, 500, 600, 700, 800];
