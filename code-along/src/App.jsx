import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from '../../lessons_2/labs/components/Counter'



function Hello(props) {
  return (<div>Hello
    <p>{props.name}</p>
    <p>Hello {props.name}!</p>
    <p>Age: {props.age}</p>
  </div>);

}
function HelloWorldDissected({ name, age }) {

}

function App() {
  return (
    <>
      <Hello name="Michael" age={30} />
      <Hello name="Sarah" age={25} />
      <Counter />
    </>
  )
}

export default App
