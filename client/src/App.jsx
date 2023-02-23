import { useState } from "react";
import "./App.css";
import Orbit from "./components/Orbit";
import Sun from "./components/Sun";

function App() {
    return (
        <div className="App flex items-center justify-center w-screen h-screen object-fill bg-[url('/src/assets/space.jpg')] relative">
            <Orbit planet="Neptune" orbitSize="550px" orbit="8" />
            <Orbit planet="Uranus" orbitSize="500px" orbit="7" />
            <Orbit planet="Saturn" orbitSize="450px" orbit="6" />
            <Orbit planet="Jupiter" orbitSize="400px" orbit="5" />
            <Orbit planet="Mars" orbitSize="350px" orbit="4" />
            <Orbit planet="Earth" orbitSize="300px" orbit="3" />
            <Orbit planet="Venus" orbitSize="250px" orbit="2" />
            <Orbit planet="Mercury" orbitSize="200px" orbit="1" />
            <Sun />
        </div>
    );
}

export default App;
