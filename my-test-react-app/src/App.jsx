function List(props){
  return(
  <ul>
    {props.animals.map((animal) => {
      return animal.startsWith("L")?<li key={animal}>{animal}</li> :null;
    })}
  </ul>
  );
}


function App() {

  const animals = ["Lion", "tiger", "monkey", "cheetah", "giraffe"];

  return (
    <div>
    <h1>Animal</h1>
      <List animals={animals} />
    </div>
  )
}

export default App
