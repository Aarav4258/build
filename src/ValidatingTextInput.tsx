import React, { KeyboardEvent, useState } from "react";

type Props = {
    onInput: (input: string) => void;
}

export const ValidatingTextInput: React.FC<Props> = ({ onInput }) => {
    // We require an onInput property to be handed to us.
    // That is the callback we will run whenever the user
    // presses the "submit" button.

    // Create a "text" state object to store what the user types
    const [text, setText] = useState("");

    const submitInput = () => {
        if (!isInvalid(text)) {
            onInput(text);
        }
    }

    const isInvalid = (txt: string): boolean => {
        if (!txt) {
            return true;
        } else {
            return false;
        }
    }

    const handleTextInput = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value);

    return (
        <div>
            <input value={text} onChange={handleTextInput} />
            <button
                disabled={isInvalid(text)}
                onClick={submitInput}>Add</button>
        </div>
    )
}