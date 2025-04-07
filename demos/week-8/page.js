"use client";

import {useState, useEffect } from "react";

async function fetchRandomDog() {
    const response = breed
    ? await fetch('https://dog.ceo/api/breeds/image/random') //fetch returns a promise that resolves to the response object when the request completes and we await it
    : "https://dog.ceo/api/breeds/image/random";
    const data = await response.json(); //response.json() returns a promise that resolves to the JSON object when the parsing completes and we await
    return data.message; //this is the URL fo the image
}

async function getBreeds() {
    const response = await fetch("https://dog.ceo/api/breeds/list/all")
    const data = await response.json();
    const breeds = Object.keys(data.message); //Object.keys reutrns an array of the key in the object
    return breeds;
}
export default function Page() {
    const [randomDogUrl, setRandomDogUrl] = useState(null);
    const [breeds, setBreeds] = useState([]);

    const loadRandomDog = async () => {
        const newDog = await fetchRandomDog (); //returns a new URL
        setRandomDogUrl(newDog); //sets the new URL, re-rendering the component, changes the state
    }

    const loadBreeds = async () => {
        const breeds = await getBreeds();
        setBreeds(breeds);
    };

    const handleSelectChange = async (event) => {
        const breed = event.target.value;
        const newDog = await fetchRandomDog(breed);
        setRandomDogUrl(newDog);
    }

    useEffect(() => {
        loadRandomDog();
        loadBreeds();
    }, []); //empty array means this effect runs only once, after the first render

    return (
        <div>
            <h1>Random Dog </h1>
            <select onChange= {handleSelectChange}>
                {breeds.map((breed) => (
                    <option key={breed}
                    {breed} 
                ))}
            </select>
            <img src={randomDogUrl} alt ="A random dog" />
        </div>
    );
}