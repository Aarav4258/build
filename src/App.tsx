import './App.css'
import { Calculator } from './Calculator';
import { TextButtonInterface } from './TextButtonInterface';

const App = () => {
  return (
    <main>
      <h1>Hello World!</h1>
      <h2>Text Button Interface Example</h2>
      <TextButtonInterface />
      <h2>Calculator Component </h2>
        <Calculator/>
      <h2>Another Calculator Component</h2>
      <Calculator/>
    </main>
  )
}

export default App;