import { useState } from "react";

function Directory() {
    const [dictionary] = useState([
        { word: "React", meaning: "A JavaScript library for building user interfaces." },
        { word: "Component", meaning: "A reusable building block in React." },
        { word: "State", meaning: "An object that stores data for a component." }
    ]);

    const [searchTerm, setSearchTerm] = useState(""); // Fixed typo in setSearchTerm
    const [definition, setDefinition] = useState(null); // Fixed typo in setDefinition

    const handleSearch = () => {
        const foundEntry = dictionary.find(
            (entry) => entry.word.toLowerCase() === searchTerm.toLowerCase()
        );
        setDefinition(foundEntry ? foundEntry.meaning : "Word not found in the dictionary.");
    };

    return (
        <div>
            <h1>Dictionary App</h1>
            <div>
                <input
                    type="text"
                    placeholder="Search for a word..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} // Fixed typo in setSearchTerm
                />
                <button onClick={handleSearch}>Search</button>
                <div>
                    <h3>Definition:</h3> <p>{definition}</p>
                </div>
            </div>
        </div>
    );
}

export default Directory;
