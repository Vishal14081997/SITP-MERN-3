// const App = () => {
//   let name = "vishal singh"
//   let x = 5;
//   let y = 10;
//   const increase = () => {
//     x = x + 1;
//     console.log(x);
//   }
//   return (
//     <>
//       <div>{name}</div>
//       <div>{x + y}</div>
//       <div>{x}</div>
//       <button onClick={increase}>increase</button>
//     </>
//   )
// }
// export default App

//........................................

import React, { useState } from 'react'

const App = () => {
  const [x, setData] = useState(10)
  const increase = () => {
    setData(x + 1)
  }
  return (
    <div>
      <h1>{x}</h1>
      <button onClick={increase}>increase</button>
    </div>
  )
}

export default App
