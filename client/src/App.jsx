import { useEffect, useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import Orbit from "./components/Orbit";
import Sun from "./components/Sun";
import Text from "./components/Text";
import planet_data from "./constants/planet_data";

function App() {
    const [showInfo, setShowInfo] = useState(false);
    const [planet, setPlanet] = useState("Mercury");
    const [planetInfo, setPlanetInfo] = useState([]);
    useEffect(() => {
        let new_planet_info = planet_data[planet];
        setPlanetInfo(new_planet_info);
    }, [planet]);

    return (
        <div className="App flex items-center justify-center w-screen h-screen object-fill bg-[url('/src/assets/space.jpg')] relative">
            {/* {
                orbitsInfo.map((orbit) => {
                    return (
                        
                    );
                })
            } */}
            <Orbit
                setPlanet={setPlanet}
                planet="Neptune"
                orbitSize="600px"
                orbit="8"
            />
            <Orbit
                setPlanet={setPlanet}
                planet="Uranus"
                orbitSize="550px"
                orbit="7"
            />
            <Orbit
                setPlanet={setPlanet}
                planet="Saturn"
                orbitSize="500px"
                orbit="6"
            />
            <Orbit
                setPlanet={setPlanet}
                planet="Jupiter"
                orbitSize="460px"
                orbit="5"
            />
            <Orbit
                setPlanet={setPlanet}
                planet="Mars"
                orbitSize="380px"
                orbit="4"
            />
            <Orbit
                setPlanet={setPlanet}
                planet="Earth"
                orbitSize="320px"
                orbit="3"
            />
            <Orbit
                setPlanet={setPlanet}
                planet="Venus"
                orbitSize="260px"
                orbit="2"
            />
            <Orbit
                setPlanet={setPlanet}
                planet="Mercury"
                orbitSize="180px"
                orbit="1"
            />
            <Sun />
            {/* name and author */}
            <Text />
            {showInfo && (
                <Modal planet={planetInfo} setShowInfo={setShowInfo} />
            )}
        </div>
    );
}

export default App;

const orbitsInfo = [
    {
        orbit: 1,
        planet: "Mercury",
    },
    {
        orbit: 2,
        planet: "Venus",
    },
    {
        orbit: 3,
        planet: "Earth",
    },
    {
        orbit: 4,
        planet: "Mars",
    },
    {
        orbit: 5,
        planet: "Jupiter",
    },
    {
        orbit: 6,
        planet: "Saturn",
    },
    {
        orbit: 7,
        planet: "Uranus",
    },
    {
        orbit: 8,
        planet: "Neptune",
    },
];
