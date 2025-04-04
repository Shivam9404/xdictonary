import { useState } from "react";

function Directory (){
    const [dictionary] = useState([
        { word: "React", meaning: "A JavaScript library for building user interfaces." },
        { word: "Component", meaning: "A reusable building block in React." },
        { word: "State", meaning: "An object that stores data for a component." }
      ]);

      const [searchTerm, setSearchTearm] = useState("");
      const [definition, setDefination ] = useState(null);

      const handleSearch = () => {
        const foundEntry = dictionary.find(
            (entry) => entry.word.toLowerCase() === searchTerm.toLowerCase()
        );
        setDefination(foundEntry ? foundEntry.meaning: "Word not found in the dictionary.")
      };

    return(
        <div>
            <h1>Dictonary App</h1>
            <div>
                <input type="text" 
                placeholder="Search for a word..." 
                value={searchTerm}
                onChange={(e) => setSearchTearm(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
                <div>
                    {definition === "Word not found in the dictionary." ? (
                        <p>{definition}</p>
                    ):(
                        <>
                        <h3>Definition:</h3>
                        <p>{definition}</p>
                        </>
                    )}
                </div>
            </div>
        </div>
        
    )
};

export default Directory;