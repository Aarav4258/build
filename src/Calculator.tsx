import { useState } from "react"

const add = (a: number, b: number) => a + b;

const factorial = (a: number) => {
    let result = a;
    while (a > 1) {
        result = result * (a - 1);
        a = a - 1;
    }
    return result;
}

const multiply = (a: number, b: number) => a * b;

export const Calculator = () => {

    let [n1, setN1] = useState(1);
    let [n2, setN2] = useState(1);

    return (
        <div>
            <h2>Calculator</h2>
            <div>
                <input value={n1} onChange={(e) => setN1(Number(e.target.value))} type="number" />
                <input value={n2} onChange={(e) => setN2(Number(e.target.value))} type="number" />
            </div>
            <div>
                <br />{n1} + {n2} = {add(n1, n2)}
                <br />{n1}! = {factorial(n1)}
                <br />{n1} x {n2} = {multiply(n1, n2)}
                <br />{n1} x 2 = {multiply(n1, 2)}
                <br />4 x 2 = {multiply(4,2)}
            </div>
        </div>
    )
}