import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Orbit from "./components/Orbit";
import Sun from "./components/Sun";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App flex items-center justify-center w-screen h-full">
            <Orbit index="400px" />
            <Orbit index="350px" />
            <Orbit index="300px" />
            <Orbit index="250px" />
            <Orbit index="200px" />
            <Sun />
        </div>
    );
}

export default App;
