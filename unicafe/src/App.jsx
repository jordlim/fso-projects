import { useState } from 'react'

const Header = (props) => {
  return (
    <h1>{props.section}</h1>
  )
}

const Stat = ({ type, name }) => (
  <div>
    {name} {type}
  </div>
)


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
    setGood(good +1)
  }
  const handleBadClick = () => {
    setBad(bad +1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral +1)
  }

  return (
    <div>
      <Header section={"give feedback"} />
      
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />

      <Header section={"statistics"} />
      <Stat type={good} name="good"/>
      <Stat type={neutral} name="neutral"/>
      <Stat type={bad} name="bad"/>
      
    </div>
    
  )
}

export default App