export const GuessMyWordGame = () => {
    const [guesses, setGuesses] = useState<string[]>([]);
    const [answer, setAnswer] = useState("");
    ...
    const startOver = () => {
        setAnswer(getRandomAnswer());
        setGuesses([]);
    }

    return (
        <main>
            {/* rest of game... */}
            <button onClick={startOver}>Restart</button>
        </main>
    )
}