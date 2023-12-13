// Code for importing three text fragments
// This is vanilla JS code.

import mashEx1 from './code-examples/example1.tsx?raw';
import mashEx2 from './code-examples/example2.tsx?raw';
import mashEx3 from './code-examples/example3.tsx?raw';

let examples = [
    [mashEx1, '#mash-ex-1'],
    [mashEx2, '#mash-ex-2'],
    [mashEx3, '#mash-ex-3']
]

examples.forEach(
    ([code, id]) => {
        let element = document.querySelector(id);
        if (!element) {
            console.log(`Warning: didn't find expected element ${id}`)
        } else {
            element.textContent = code;
        }
    }
);

import hljs from 'highlight.js';
import 'highlight.js/styles/panda-syntax-dark.css';
hljs.highlightAll();

import '@picocss/pico';
