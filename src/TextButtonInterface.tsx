import { useState } from "react"

export const TextButtonInterface = () => {
    const [text, setText] = useState("Bruno");
    const letters = Array.from("ABCDEFGHIJKLMNOPQRST");
    return (
        <div>
            <div>***{text}***</div>
            {letters.map(
                (letter) => (
                    <button
                        onClick={() => setText(text + letter)}
                    >
                        {letter}
                    </button>
                )
            )}
            <button onClick={()=>setText("")}>Clear</button>
            
        </div>
    )
}