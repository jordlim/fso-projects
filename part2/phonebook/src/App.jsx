import { useState } from 'react'

const Person = ( {name, number} ) => {
  return (
    <p>
      {name} {number}
    </p>
  )
}

// const Persons = ( {persons} ) => {
//   return (
//     <div>
//       {persons.map(persons => <Person key={persons.name} name={persons.name} number={persons.number} /> )}
//     </div>
//   )
// }

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showName, setShowName] = useState('')

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    if ( persons.some(persons => persons.name === newName) ) {
      alert(`${newName} is already added to phonebook`)
    }
    else {
      const personObject = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleSearch = (event) => {
    console.log(event.target.value)
    setShowName(event.target.value)
  }

  const namesToShow = persons.filter(persons => ( persons.name.toLowerCase() ).includes(showName.toLowerCase() ))


  return (
    <div>
      <h2>Phonebook</h2>
      <input
            value={showName}
            onChange={handleSearch}
      />
      <h2>add new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: 
          <input
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          number: 
          <input 
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {namesToShow.map(persons => <Person name={persons.name} number={persons.number} key={persons.id}/>) }
    </div>
  )
}

export default App