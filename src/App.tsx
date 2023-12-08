import React, { useState } from 'react';
import './App.css';
import { Calculator } from './Calculator';
import { OnscreenQwerty } from './Keyboard';
import { TextButtonInterface } from './TextButtonInterface';
import { ValidatingTextInput } from './ValidatingTextInput';
import { ListOfStrings } from './ListInput';
import { GuessMyWordGame } from './GuessMyWord';
import { MashComponent } from './MashEliminatorComponent';
import { HappinessIndicator } from './HappinessIndicator';
import { SimpleInput } from './SimpleInputComponent';
import { MyDumbGame } from './SimpleTextGame';
import { SimplerGuessMyWordGame } from './SimplerTextGame';
import { AppWithStart } from './AppWithStart';
import { DemoRandomItem } from './RandomItem';


const App = () => {
  const [selectedExample, setSelectedExample] = useState<string>('GuessMyWordGame');

  const examples = {
    'Button with Grey Start': <AppWithStart />,
    'Get a Random Item':<DemoRandomItem/>,
    'SimplerGuessMyWordGame': <SimplerGuessMyWordGame />,
    'MyDumbGame': <MyDumbGame />,
    'SimpleInput': <SimpleInput onChangeWord={(word: string) => window.alert('they typed: ' + word)} />,
    'HappinessIndicator': <HappinessIndicator startingLevel={5} onChange={(value) => window.alert(value)} />,
    'GuessMyWordGame': <GuessMyWordGame />,
    'MashComponent': <MashComponent />,
    'ValidatingTextInput': <ValidatingTextInput onInput={(word: string) => {}} />,
    'ListOfStrings': <ListOfStrings initialList={["Hello", "World"]} onChange={(wordList: string[]) => {}} />,
    'OnscreenQwerty': <OnscreenQwerty onChange={(word: string) => {}} />,
    'TextButtonInterface': <TextButtonInterface />,
    'Calculator': <Calculator />,
  };

  return (
    <main>
      <label>
        Example:

      <select onChange={(e) => setSelectedExample(e.target.value)} value={selectedExample}>
        <option value="">Select an Example</option>
        {Object.keys(examples).map(key => (
          <option key={key} value={key}>{key}</option>
        ))}
      </select>
      </label>
          <hr/>
      <div style={{ marginTop: '20px' }}>
        {examples[selectedExample] || <p>Select an example to display</p>}
      </div>
    </main>
  );
}

export default App;
