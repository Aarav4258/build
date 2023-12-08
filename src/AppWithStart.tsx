import { useState } from "react";

export const AppWithStart = () => {
    const [started, setStarted] = useState(false)
    
    const startGame = () => {
        setStarted(true);
        console.log('Do something else?')
    }
    const finishGame = () => {
        setStarted(false);
    }

    const showGame = () => (
        <div>
            Wow this is a game!
            <button onClick={finishGame}>
                Finish
            </button>
        </div>
    )

    return (<div>
        <button disabled={started}
            onClick={startGame}
        >
            Start
        </button>
        {started && showGame()}
    </div>);
}