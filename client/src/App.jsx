import { useState } from "react";
import "./App.css";
import Orbit from "./components/Orbit";
import Sun from "./components/Sun";
import Text from "./components/Text";

function App() {
    return (
        <div className="App flex items-center justify-center w-screen h-screen object-fill bg-[url('/src/assets/space.jpg')] relative">
            <Orbit planet="Neptune" orbitSize="600px" orbit="8" />
            <Orbit planet="Uranus" orbitSize="550px" orbit="7" />
            <Orbit planet="Saturn" orbitSize="500px" orbit="6" />
            <Orbit planet="Jupiter" orbitSize="460px" orbit="5" />
            <Orbit planet="Mars" orbitSize="380px" orbit="4" />
            <Orbit planet="Earth" orbitSize="320px" orbit="3" />
            <Orbit planet="Venus" orbitSize="260px" orbit="2" />
            <Orbit planet="Mercury" orbitSize="180px" orbit="1" />
            <Sun />
            {/* name and author */}
            <Text />
        </div>
    );
}

export default App;
