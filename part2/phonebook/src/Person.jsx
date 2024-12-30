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


export default Person