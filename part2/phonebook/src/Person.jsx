const Person = ( {name, number, remove} ) => {
  return (
    <p>
      {name} {number} <button onClick={remove}>delete</button>
    </p>
  )
}

export default Person