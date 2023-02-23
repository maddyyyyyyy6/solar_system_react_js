import React from "react";
import sun from "../assets/planets/Sun.png";

const Sun = () => {
    return (
        <div className="w-[110px] h-[110px] rounded-full">
            <img src={sun} title="sun" className="z-[99999]" />
        </div>
    );
};

export default Sun;
