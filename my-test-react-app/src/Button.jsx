import React from 'react'

//Creating a button component
// const Button = () => {
//   return (
//     <div>
//       <button>Click Text Me</button>
//     </div>
//   )
// }


//Using Props
// const Button = (props) => {
//     const buttonStyle = {
//         color : props.color,
//         fontSize : props.fontSize+ "px",
//     }

//   return (
//       <button style={buttonStyle} >{props.text}</button>
//   )
// }


//Destructuring props
// const Button = ({color, fontSize, text}) => {
//     const buttonStyle = {
//         color : color,
//         fontSize : fontSize+ "px",
//     }

//   return (
//       <button style={buttonStyle} >{text}</button>
//   )
// }


//default value for props if no value passed
// const Button = ({color = "Red", fontSize="14", text="Default"}) => {
//     const buttonStyle = {
//         color : color,
//         fontSize : fontSize+ "px",
//     }

//   return (
//       <button style={buttonStyle} >{text}</button>
//   )
// }


//passing function as prop
const Button = ({color = "Red", fontSize="14", text="Default", handleClick}) => {
    const buttonStyle = {
        color : color,
        fontSize : fontSize+ "px",
    }

  return (
      <button style={buttonStyle} onClick={handleClick}>{text}</button>
  )
}

export default Button
