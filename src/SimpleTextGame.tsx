import React,{ useState } from "react";

export const MyDumbGame = () => {

    const [word1, setWord1] = useState<string>("Tree");
    const [word2, setWord2] = useState<string>("House");

    /* React.ChangeEvent<HTMLInputElement> tells TypeScript that "event" will
    come from input, so then event.target will be an input, so then event.target.value
    will exist */
    const handleInput1 = (event : React.ChangeEvent<HTMLInputElement>) => {
        let whatTheyTyped = event.target.value;
        setWord1(whatTheyTyped);       
    }

    const handleInput2 = (event : React.ChangeEvent<HTMLInputElement>) => {
        let whatTheyTyped = event.target.value;
        setWord2(whatTheyTyped);    
    }

    const getResult = () => {
        if (word1.length > word2.length) {
            return "Word 1 is the winner!"
        } else {
            return "Word 2 is the winner!"
        }
    }

    return (

    <main>
        
        <input onInput={handleInput1} value={word1} type="text"/>
        vs.
        <input onInput={handleInput2} value={word2} type="text"/>
    
        <p>Result: {getResult()}</p>
    </main>
    )
}