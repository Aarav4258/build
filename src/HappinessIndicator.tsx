import { useState } from "react"

export const HappinessIndicator = ({ onChange, startingLevel }) => {

    const [happiness, setHappiness] = useState(startingLevel);

    const handleClick = () => {
        onChange(happiness)
    }
    const handleChange = (event) => {
        setHappiness(event.target.valueAsNumber);
    }

    return (
        <div>How Happy are you?
            <input
                value={happiness}
                onChange={handleChange}
                type="number" min="0" max="10" />
            <button onClick={handleClick}>Submit</button>
            {/* If happiness > 5, smile, otherwise frown */}
            {happiness > 5 && ":-)" || ": - ("}
        </div>
    )
}