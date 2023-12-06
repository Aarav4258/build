import React, { useState } from 'react';

const words = ['potato', 'apple', 'tomato', 'pasta', 'salad', 'pizza', 'delivery', 'cover', 'string'];

export const SimplerGuessMyWordGame = () => {
    const getRandomAnswer = () => words[Math.floor(Math.random() * words.length)];

    const [guesses, setGuesses] = useState<string[]>([]);
    const [answer, setAnswer] = useState<string>(getRandomAnswer());
    const [entry, setEntry] = useState<string>('');

    const addGuess = () => {
        setGuesses([...guesses, entry]);
        setEntry('');
    };

    const startOver = () => {
        setAnswer(getRandomAnswer());
        setGuesses([]);
    };

    const renderClue = () => {
        return answer.split('').map((char, index) => {
            const guessedCorrectly = guesses.some(guess => guess[index] === char);
            return guessedCorrectly ? char.toUpperCase() : '_';
        }).join(' ');
    };

    return (
        <main style={{ border: '3px solid red', padding: '1em' }}>
            <h1>Guess My Word!</h1>
            {answer !== guesses[guesses.length - 1] ? (
                <div>
                    <div>
                        <input
                            value={entry}
                            onChange={(e) => setEntry(e.target.value.toLowerCase())}
                            maxLength={answer.length}
                        />
                        <button
                            onClick={addGuess}
                            disabled={entry.length !== answer.length}
                        >
                            Guess!
                        </button>
                    </div>
                    <div>Clue: {renderClue()}</div>
                    <ul>
                        {guesses.map((g, idx) => (
                            <li key={idx}>{g.toUpperCase()}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div>You got it, the word was {answer}!</div>
            )}
            <button onClick={startOver}>Restart</button>
        </main>
    );
};
