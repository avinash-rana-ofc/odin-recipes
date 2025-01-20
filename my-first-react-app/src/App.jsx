function ListItem(props){
  console.log('in listItem', props)
  return <li>{props.animal}</li>
}

function List(props){
  return(
  <ul>
    {props.animals.map((animal) => {
      console.log('in console',animal)

      return <ListItem key ={animal} animal={animal} />
    })}
  </ul>
  );
}


function App() {

  const animals = ["lion", "tiger", "monkey", "cheetah", "giraffe"];

  return (
    <div>
    <h1>Hello</h1>
      {/* {animals.map((li, i) => {
        return <li>{li}</li>
      })} */}
      <List animals={animals} />
    </div>
  )
}

export default App
