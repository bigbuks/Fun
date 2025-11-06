import React, { useState } from "react";

function EventDemo() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [hovered, setHovered] = useState(false);
    const [keyPressed, setKeyPressed] = useState("");

    // 🖊️ Handle input change
    const handleChange = (e) => {
        setName(e.target.value);
    };

    // 🖱️ Handle button click
    const handleClick = () => {
        setMessage(`Hello, ${name || "stranger"} 👋`);
    };

    // ⌨️ Handle keyboard event
    const handleKeyDown = (e) => {
        setKeyPressed(e.key);
    };

    // 🖱️ Handle hover
    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);

    // 🧾 Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Form submitted with name: ${name}`);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-orange-100 p-6">
            <h1 className="text-3xl font-bold mb-4">🎯 React Event Demo</h1>

            {/* Form */}
            <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-sm"
            >
                <label className="block text-lg mb-2">Enter your name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Type here..."
                    className="w-full border p-2 rounded-md mb-4"
                />

                <button
                    type="button"
                    onClick={handleClick}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className={`w-full py-2 rounded-md text-white font-semibold transition ${hovered ? "bg-orange-600" : "bg-orange-500"
                        }`}
                >
                    Click Me
                </button>

                {/* Message Display */}
                {message && (
                    <p className="mt-4 text-center text-lg font-medium text-gray-700">
                        {message}
                    </p>
                )}

                {/* Keyboard feedback */}
                {keyPressed && (
                    <p className="mt-2 text-center text-sm text-gray-500">
                        Last key pressed: <strong>{keyPressed}</strong>
                    </p>
                )}
            </form>
        </div>
    );
}

export default EventDemo;
