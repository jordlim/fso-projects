import { useState } from 'react'

const Header = (props) => (<h1>{props.section}</h1>)

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Anecdote = ({anecdotes, selected}) => (
    <p>{anecdotes[selected]}</p>
  )


const Votes = ({votes, selected}) => (
    <p>has {votes[selected]} votes</p>
  )

const MostVotes = ({anecdotes, votes}) => {
  let max = 0;
  let maxIndex = 0;
  for (let i = 0; i < votes.length; i++) {
    if (votes[i] > max) {
        maxIndex = i;
        max = votes[i];
    }
  }

  return (
    <div> 
      <Anecdote anecdotes={anecdotes} selected={maxIndex} />
      <Votes votes={votes} selected={maxIndex} />
    </div>
    
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))


  const handleNext = () => {
    setSelected( Math.round( Math.random() * (anecdotes.length - 0) + 0  ) )
  }

  const handleVote = () => {
    const copy = [...votes]
    copy[selected] += 1 
    setVotes(copy)
  }


  return (
    <div>
      <Header section="Anecdote of the day"/>
      <Anecdote anecdotes={anecdotes} selected={selected}/>
      <Button handleClick={handleVote} text="vote"/>
      <Button handleClick={handleNext} text="next anecdote"/>
      <Votes votes={votes} selected={selected}/>

      <Header section="Anecdote with most votes"/>
      <MostVotes anecdotes={anecdotes} votes={votes} />

    </div>
  )
}

export default App