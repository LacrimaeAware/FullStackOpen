const Header = (props) => {
  return (
    <div>
      <p>{props.course}</p>
    </div>
  )
}

const Part = (props) => {
  return (
  <div>
    <p>{props.part[0]} {props.part[1]}</p>
  </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0]}/>
      <Part part={props.parts[1]}/>
      <Part part={props.parts[2]}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises: {props.total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = ['Fundamentals of React', 10]
  const part2 = ['Using props to pass data', 7]
  const part3 = ['State of a component', 14]
  const parts = [part1, part2, part3]

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total total={part1[1]+part2[1]+part3[1]}/>
    </div>
  )
}

export default App