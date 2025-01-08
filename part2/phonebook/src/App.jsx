import { useState, useEffect } from 'react'

import personService from './services/Persons.js'


import Person from './Person'
import PersonForm from './PersonForm'
import Filter from './Filter'

const App = () => {
  const [persons, setPersons] = useState([
    // { name: 'Arto Hellas', number: '040-123456', id: 1 },
    // { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    // { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    // { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showName, setShowName] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
        console.log(initialPersons)
      })
  }, [])
  console.log(persons)
  console.log('render', persons.length, 'persons')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
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
      
      personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
          setNewNumber('')
          console.log(returnedPerson)
    })
      
    }
  }

  const handleSearch = (event) => {
    setShowName(event.target.value)
  }

  const namesToShow = persons.filter(persons => ( persons.name.toLowerCase() ).includes(showName.toLowerCase() ))


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter showName={showName} handleSearch={handleSearch} />
      <h2>add new</h2>
      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      {namesToShow.map(persons => <Person name={persons.name} number={persons.number} key={persons.id}/>) }
    </div>
  )
}

export default App