import React from "react";

const Button = ({ text }) => {
    return (
        <div className="bg-blue-400 p-2 rounded-md hover:shadow-md focus:border-2 cursor-pointer">
            {text}
        </div>
    );
};

export default Button;
