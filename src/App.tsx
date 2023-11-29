import { useState } from 'react';
import './App.css'
import { Calculator } from './Calculator';
import { OnscreenQwerty } from './Keyboard';
import { TextButtonInterface } from './TextButtonInterface';
import { ValidatingTextInput } from './ValidatingTextInput';
import { ListOfStrings } from './ListInput';
import { GuessMyWordGame } from './GuessMyWord';
import { MashComponent } from './MashEliminatorComponent';
import { HappinessIndicator } from './HappinessIndicator';

const App = () => {
  const [word, setWord] = useState<string>("");
  const [wordList, setWordList] = useState<string[]>([]);
  return (

    <main>

      <HappinessIndicator
        startingLevel={5}
        onChange={(value) => window.alert(value)}
      />

      <p>Hello World: This is just a bunch of components
        sitting around to demonstrate react patterns...
      </p>


      <GuessMyWordGame />
      <hr />
      <MashComponent />
      <hr />
      <div>
        <h2>Creating a Text Input and Validating its Input</h2>
        Use my Input: <ValidatingTextInput onInput={setWord} />
        <p>User typed: {word}</p>
      </div>
      <div>
        <h2>Using UseEffect to Run a Callback</h2>

      </div>

      <div>
        <h2>A component for entering a list of strings</h2>
        <div>
          <ListOfStrings initialList={["Hello", "World"]}
            onChange={setWordList}
          />
          <div>
            The user has entered: {wordList.join(', ')}
          </div>
        </div>
      </div>
      <div>
        <h2>An on-screen input method</h2>
        <p>Here is a fancy keyboard with an "Enter" button</p>
        <OnscreenQwerty onChange={setWord} />
      </div>
      <div>
        <h2>Text Button Interface Example</h2>
        <TextButtonInterface />
      </div>
      <h2>Calculator Component </h2>
      <Calculator />
      <h2>Another Calculator Component</h2>
      <Calculator />
    </main>
  )
}

export default App;