// const App = () => {
//   let name = "vishal singh"
//   let x = 5;
//   let y = 10;

//   let count = 0
//   const increment = () => {
//     count = count+1;
//     console.log(count);
//   }
  
// // Normal variable change hone par React ko koi signal nahi jata. Isliye UI purani hi dikhti rehti hai — data change ho gaya but screen update nahi hoti.

//   return (
//     <>
//       <div>{name}</div>
//       <div>{x + y}</div>
//       <div>{x}</div>
//       <p>Count: {count}</p>
//       <button onClick={increment}>increment</button>
//     </>
//   )
// }
// export default App

//........................................

import React, { useState } from 'react'

const App = () => {
  const [name ,setName] = useState("vishal")
    const [count, setCount] = useState(0);

   function increment() {
    setCount(count + 1); 
  }
  // Yaha setCount() call karte hi React ko signal milta hai: "value change hui hai, re-render kar do". React automatically component ko dobara render karega naye count ke saath, aur screen pe updated value dikhegi.
  return (
    <div>
       <h2>{name}</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>+1</button>
    </div>
  )
}
export default App

//......................................

// import { useState } from 'react'

// const App = () => {
//   const [students, setStudents] = useState(["vishal", "rajesh"])

//   const addStudent = () => {
//     console.log("add student event click");
//     setStudents([...students, "monika"])
//   }

//   return (
//     <div>
//       <button onClick={addStudent}>
//         add student
//       </button>
//       {
//         students.map((item, i) => (
//           <h1 key={i}>{item}</h1>
//         ))
//       }
//       <input type="text" placeholder='student name' />
//     </div>
//   )
// }

// export default App

//...........................................

// import React, { useState } from "react";

// const App = () => {
//   const [studentName, setStudentName] = useState("");
//   const [students, setStudents] = useState([])

//   const handleChange = (e) => {
//     // console.log(e.target.value);
//     setStudentName(e.target.value)
//   }

//   const addStudent = () => {
//     setStudents([...students, studentName])
//     setStudentName("")
//   }

//   return (
//     <>
//       <div className="flex justify-center items-center h-screen" >
//       <div className="bg-gray-200 w-100 p-4 rounded-3xl flex flex-col gap-5 items-center ">
//         <div>
//           <input

//             type="text"
//             placeholder="Enter Student Name"
//             value={studentName}
//             onChange={handleChange}
            
//           className="border-2 outline-none rounded-2xl p-2"
//           />
//         </div>
//         <button className="bg-blue-600 rounded-2xl p-2 text-white font-bold" onClick={addStudent}>add student</button>
//         {
//           students.map((item, index) => {
//             return (
//               <>
//                 <h1 className="border-1 w-20" key={index}>{item}</h1>
//               </>
//             )
//           })
//         }
//       </div>
//       </div>
//     </>
//   );
// };

// export default App;
