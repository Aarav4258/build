import React, { useEffect, useState } from "react"

type Props = {    
    initialList?: string[],    
    onChange: (input: string[]) => void
}

/* A component for entering a list of strings */
export const ListOfStrings: React.FC<Props> = ({ initialList, onChange }) => {
    const [list, setList] = useState<string[]>(initialList || []);
    /* We're going to use React's useEffect to automatically
    run onChange whenever list changes. */
    useEffect(
        () => {
            // Run onChange with list...
            onChange(list);
        }, [list] // whenever list changes
    );

    /* Next up, we will define functions for updating our list! */
    /* Callback to add an item to our list */
    const addToList = () => {
        setList([...list,""])
    }

    const removeItem = (idx : number) => {
        // Filter list, keeping only items whose index
        // is not idx
        setList(list.filter(
            (n,i) => i != idx
        ))
    }

    /* Callback to handle input */
    const onItemInput = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
        let newList = [...list];  // Create a new copy of list to update
        newList[idx] = e.target.value;
        setList(newList);
    }

    /* Now we return our JSX! */
    return (
        <div style={{ border: "1px solid blue", padding: "1em" }}>
            <h2>Edit List:</h2>
            <ul>
                {/* For each item in the list, output an input */}
                {list.map(
                    (item, idx) => (
                        <li>
                            <input
                                value={item}
                                onInput={(e) => onItemInput(e, idx)} />
                            <button onClick={()=>removeItem(idx)}>-</button>
                        </li>
                    )
                )}
            </ul>
            <button onClick={addToList}>Add Item</button>
        </div>
    )

}