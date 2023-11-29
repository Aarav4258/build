import React, { useState } from "react"

const words = ['potato', 'apple', 'tomato', 'pasta', 'salad', 'pizza', 'delivery', 'cover', 'string']

const getRandomAnswer = () => {
    const randomIndex = Math.floor(Math.random() * words.length)
    return words[randomIndex];
}

export const GuessMyWordGame = () => {

    const [guesses, setGuesses] = useState<string[]>([]);
    const [answer, setAnswer] = useState("");
    const addGuess = (guess: string) => {
        setGuesses([...guesses, guess]);
    }
    const startOver = () => {
        setAnswer(getRandomAnswer())
    }
    if (!answer) {
        startOver();
    }

    return (
        <main style={{border:"3px solid red","padding":"1em"}}>
            <h1>Guess My Word!</h1>
            {/* Is the last guess not equal to answer*/}
            {answer != guesses[guesses.length - 1] &&
                <div>
                    <Clue answer={answer} guesses={guesses} />
                    <GuessList guesses={guesses} answer={answer} />
                    <GuessEntry onAdd={addGuess} wordLength={answer.length} />
                </div> || <div>You got it, the word was {answer}!</div>
            }
            <button onClick={startOver}>Restart</button>
        </main>
    )
}


const GuessEntry: React.FC<{ onAdd: (w: string) => void, wordLength: number }> = ({ onAdd, wordLength }) => {
    const [entry, setEntry] = useState("");
    const onAddClicked = () => {
        onAdd(entry);
        setEntry('');
    }
    return (
        <div>
            <input value={entry} onChange={(e) => setEntry(e.target.value.toLowerCase())} />
            <button onClick={onAddClicked} disabled={entry.length != wordLength}>
                Guess!
            </button>
        </div>
    );
}

const Clue = ({ answer, guesses }) => {
    const letters : string[] = Array.from(answer);
    const getLetterOrBlank = (ltr : string, idx : number) => {
        let matching = guesses.find(
            (g : string) => g[idx] == ltr
        );
        if (matching) {
            return ltr.toUpperCase();
        } else {
            return '_'
        }
    }
    return (<div style={{display:'flex',gap:'4px'}}>
        {letters.map(
            (ltr, idx) => (
                <span>
                    {getLetterOrBlank(ltr, idx)}
                </span>
            )
        )}
    </div>)
}

const GuessList = ({ guesses, answer }) => {

    const getStyle = (ltr, idx) => {
        /* If the letter matches answer at idx 
        then we style the letter green */
        let color;
        if (answer[idx] == ltr) {
            color = 'green';
        } else if (answer.indexOf(ltr) > -1) {
            color = 'orange';
        } else {
            color = 'white';
        }
        return {color}
    }

    return (
        <ul>
            {guesses.map(
                (g) => <li
                    style={{ display: "flex", gap: '4px' }}
                >{Array.from(g).map((ltr, idx) => <span style={getStyle(ltr,idx)}>{ltr.toUpperCase()}</span>)}</li>
            )}
            
        </ul>
    )
}