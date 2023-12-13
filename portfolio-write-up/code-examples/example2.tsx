const Clue = ({ answer, guesses }) => {
    const letters: string[] = Array.from(answer);
    const getLetterOrBlank = (ltr: string, idx: number) => {
        let matching = guesses.find(
            (g: string) => g[idx] == ltr
        );
        if (matching) {
            return ltr.toUpperCase();
        } else {
            return '_'
        }
    }
    return letters.map(
            (ltr, idx) => (
                <span>
                    {getLetterOrBlank(ltr, idx)}
                </span>
            )
        )
}
