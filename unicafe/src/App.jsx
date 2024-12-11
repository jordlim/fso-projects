import { useState } from 'react'

const Header = (props) => (<h1>{props.section}</h1>)

const Stat = ({ type, name }) => {
  console.log(type, name)
  if (name == "positive") {
    return (
      <tr>
      <td>{name}</td>
      <td>{type} %</td>
    </tr>
    )
  }
  return (
    <tr>
      <td>{name}</td>
      <td>{type}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const all = good+neutral+bad
  const avg = (good-bad)/all
  const pos = good/all
  if (all == 0) {
    return <p>No feedback given</p>
  }
  return (
    <div>
      <table>
        <tbody>
        <Stat name="good" type={good} />
        <Stat name="neutral" type={neutral} />
        <Stat name="bad" type={bad} />
        <Stat name="all" type={all} />
        <Stat name="average" type={avg} />
        <Stat name="positive" type={pos} />
        </tbody>
      </table>
        
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    const newGood = good+1
    setGood(newGood)
  }
  const handleBadClick = () => {
    const newBad = bad+1
    setBad(newBad)
  }
  const handleNeutralClick = () => {
    const newNeutral = neutral+1
    setNeutral(newNeutral)
  }

  return (
    <div>
      <Header section={"give feedback"} />
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />

      <Header section={"statistics"} />
      <Statistics good={good} neutral={neutral} bad={bad} />
      
    </div>
    
  )
}

export default App