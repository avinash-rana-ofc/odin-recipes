// function List(props){
  
//   return(
//   <>
//     {!props.animals?
//       (<div>Loading...</div>):
//       props.animals.length > 0 ?
//       <ul>
//         {props.animals.map(animal => <li key={animal}>{animal}</li>)}
//       </ul>:
//       (<div>There is no animals in list</div>)}
//   </>
//   );
// }

//or
function List(props){

  return(
    <>
      {!props.animals && <div>Loading...</div>}
      {props.animals && props.animals.length > 0 && (
        <ul>
          {props.animals.map(animal => <li key={animal}>{animal}</li>)}
        </ul>
      )}
      {props.animals && props.animals.length === 0 && <div>There is no animals in list</div>}
    </>
    );
}

function App() {

  
  const animals = ["Lion", "tiger", "monkey", "cheetah", "giraffe"];
  //const animals = [];

  return (
    <div>
    <h1>Animal</h1>
      <List  animals={animals}/>
    </div>
  )
}

export default App
