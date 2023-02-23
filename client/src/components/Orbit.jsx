import React, { useEffect, useState } from "react";
import Planet from "./Planet";

const Orbit = ({ orbitSize, orbit }) => {
    // const [orbitSize, setOrbitSize] = useState("100");

    // useEffect(() => {
    //     newOrbit = orbitsSize(index - 1);
    //     setOrbitSize();
    // }, [index]);
    return (
        <div
            className="border-2 rounded-full border-gray-400 border-dashed absolute"
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
