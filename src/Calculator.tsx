import { useState } from "react"

const add = (a, b) => a + b;
const factorial = (a: number) => {
    let result = a;
    while (a > 1) {
        result = result * (a - 1);
        a = a - 1;
    }
    return result;
}
export const Calculator = () => {

    let [n1, setN1] = useState(1);
    let [n2, setN2] = useState(1);

    return (
        <div>
            <div>
                <input value={n1} onChange={(e) => setN1(Number(e.target.value))} type="number" />
                <input value={n2} onChange={(e) => setN2(Number(e.target.value))} type="number" />
            </div>
            <div>
                <br />{n1} + {n2} = {add(n1, n2)}
                <br />{n1}! = {factorial(n1)}

            </div>
        </div>
    )
}