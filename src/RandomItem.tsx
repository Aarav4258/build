import { useState } from "react";

export const getRandomItem = (array: any[]) => {
    if (array.length) {
        let randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    } else {
        return null;
    }
}

export const DemoRandomItem = () => {
    const items = ['apple', 'banana', 'pear', 'coconut', 'dragonfruit', 'avocado'];
    const [randomItem, setRandomItem] = useState(getRandomItem(items));

    const setNewItem = () => {
        setRandomItem(getRandomItem(items));
    }

    return <div>
        {randomItem}
        <button onClick={setNewItem}>Change</button>
    </div>


}