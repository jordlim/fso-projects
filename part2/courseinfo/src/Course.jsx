const Course = ( {course} ) => {
    return (
      <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )
  }
  
  const Header = (props) => {
    return (
      <h1>{props.course}</h1>
    )
  }
  
  const Part = (props) => {
    return (
      <p>
        {props.part} {props.exercises}
      </p>
    )
  }
  
  const Content = (props) => {
    const {parts} = props
    return (
      <div>
        {parts.map(parts => <Part key={parts.id} part={parts.name} exercises={parts.exercises}/>)}
      </div>
    )
  }
  
  const Total = (props) => {
    const {parts} = props
    const sum =  parts.reduce(function (acc, obj) { return acc + obj.exercises}, 0)
    return (
      <p>
        <b>total of {sum} exercises</b>
      </p>
    )
  }
  
  export default Course  