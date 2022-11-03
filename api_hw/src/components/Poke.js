
import React, { useState } from "react";
import axios from "axios";

const Poke = () => {
    const [people, setPeople] = useState([]);
    const add = () => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon/?limit=807")
            .then((response) => setPeople(response.data.results));
    };
    return (
        <>
            <button onClick={add}>Clic here to Fetch Pokemon </button>
            {people.map((item, index) => {
                return (
                    <div key={index}>
                        <ul>
                            <li>{item.name}</li>
                        </ul>
                    </div>
                );
            })}
        </>
    );
};
export default Poke;
