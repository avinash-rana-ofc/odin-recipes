function List(props){
  if(!props.animals){
    return <div>Loading...</div>;
  }

  if(props.animals.length === 0){
    return <div>Thers is no animals in list</div>
  }

  return(
  <ul>
    {props.animals.map((animal) => {
      return <li key={animal}>{animal}</li>;
    })}
  </ul>
  );
}


function App() {

  //const animals = ["Lion", "tiger", "monkey", "cheetah", "giraffe"];
  const animals = [];

  return (
    <div>
    <h1>Animal</h1>
      <List animals={animals} />
    </div>
  )
}

export default App
