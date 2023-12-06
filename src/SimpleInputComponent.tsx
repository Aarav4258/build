import React,{ useState } from "react";

export const SimpleInput = ({onChangeWord}) => {

    const [word, setWord] = useState<string>("Tree");

    /* React.ChangeEvent<HTMLInputElement> tells TypeScript that "event" will
    come from input, so then event.target will be an input, so then event.target.value
    will exist */
    const handleInput = (event : React.ChangeEvent<HTMLInputElement>) => {
        let whatTheyTyped = event.target.value;
        setWord(whatTheyTyped);
        onChangeWord(whatTheyTyped)
    }

    return (

    <main>
        <h1>The Word is: {word}</h1>
        <input onInput={handleInput} value={word} type="text"/>
    
    </main>
    )
}