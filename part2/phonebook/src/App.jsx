import { useState } from 'react'

const Person = ( {name} ) => {
  return (
    <p>
      {name}
    </p>
  )
}

const Persons = ( {persons} ) => {
  return (
    <div>
      <p></p>
      {persons.map(persons => <Person key= {persons.name} name={persons.name} /> )}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNoteChange = (event) => {
    setNewName(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    // console.log('button clicked', event.target)
    const personObject = {
      name: newName,
    }
    setPersons(persons.concat(personObject))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: 
          <input
            value={newName}
            onChange={handleNoteChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <div>debug: {newName}</div>
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  )
}

export default App