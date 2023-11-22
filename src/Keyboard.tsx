import { useState } from "react";

export const OnscreenQwerty = ({onChange}) => {
    const [word, setWord] = useState("");

    const top = Array.from('qwertyuiop');
    const middle = Array.from('asdfghjkl');
    const bottom = Array.from('zxcvbnm');

    const makeKey = (letter: string) => (
        <button onClick={() => setWord(word + letter)}>{letter}</button>
    );
    const deleteLastLetter = () => {
        let wordLength = word.length;
        setWord(word.substring(0, wordLength - 1));
    }
    const onEnter = () => {
        onChange(word);
    }

    return (
        <div className="qwertyInput">
            <div className="result">
                {word}
            </div>
            <div className="keyboard">
                <div className="row">
                    {top.map(makeKey)}
                    <button onClick={deleteLastLetter}>
                        Bksp
                    </button>
                </div>
                <div className="row">
                    {middle.map(makeKey)}
                </div>
                <div className="row">
                    {bottom.map(makeKey)}
                    <button onClick={onEnter}>Enter</button>
                </div>
            </div>
        </div>
    )

}