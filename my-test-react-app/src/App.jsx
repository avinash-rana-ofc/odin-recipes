// function List(props){

import Todo from "./Todo";
import Button from "./Button"

  
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
  // const handleButtonClick = () => {
  //   window.location.href = "https://www.google.com";
  // }


  //customizing to handle dynamic url
  const handleButtonClick = (url) => {
    window.location.href = url;
  }

  return (
    <div>
    <h1>Animal</h1>
      <List  animals={animals}/>
      <Todo />
      {/* <Button /> */}
      {/* <Button />
      <Button color="blue" fontSize="12" text="Help Me"/>
      <Button color="green" fontSize="24" text="Test Me"/>
      <Button fontSize="20" />
      <Button handleClick = {handleButtonClick} text="Go to google"/> */}
      {/*handling customize links*/}
      <Button handleClick={() => handleButtonClick("www.odinproject.com")} />
    </div>
  )
}

export default App
