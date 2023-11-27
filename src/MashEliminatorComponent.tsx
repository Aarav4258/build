import { useState } from "react";


export const MashComponent = () => {
    let [names, setNames] = useState(['Bob', 'Mary', 'James']);
    let [cities, setCities] = useState(['Boston', 'San Fran', 'NYC', 'Atlanta']);
    let [colors, setColors] = useState(['red', 'blue']);
    // Fix me: check if there is only one name before adding
    // to list for things to cross off, etc.
    let allTheThings = [...names, ...cities, ...colors];

    let nItems = allTheThings.length;
    const crossOffItem = () => {
        // % is the modulo or remainder operator...
        // so if there are 4 items, we would eliminate number
        // 7 % 4 (or 3)
        // Also fix me, use state to keep track of last count
        // and count from there rather than always starting at
        // the beginning :-\
        let item = allTheThings[3 % allTheThings.length] // go around when we are too big
        setNames(names.filter((n) => n != item))
        setCities(cities.filter((c) => c != item))
        setColors(colors.filter((c) => c != item))
    }
    return (
        <div>
            <br /> {names.join(', ')}
            <br /> {cities.join(', ')}
            <br />{colors.join(', ')}
            <button onClick={crossOffItem}>Cross Off #4!</button>
        </div>
    )
}