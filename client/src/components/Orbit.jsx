import React, { useEffect, useState } from "react";
import Planet from "./Planet";
import "./orbit.css";

const Orbit = ({ orbitSize, orbit, planet }) => {
    // const [orbitSize, setOrbitSize] = useState("100");

    // useEffect(() => {
    //     newOrbit = orbitsSize(index - 1);
    //     setOrbitSize();
    // }, [index]);
    return (
        <div
            title={planet}
            className={`orbitline${orbit} border-[1px] rounded-full border-gray-400 border-dotted absolute`}
            style={{
                width: orbitSize,
                height: orbitSize,
            }}
        >
            <Planet orbit={orbit} />
        </div>
    );
};

export default Orbit;

// values for orbits

const orbitsSize = [100, 200, 300, 400, 500, 600, 700, 800];
