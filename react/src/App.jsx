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

// import React, { useState } from 'react'

// const App = () => {
//   const [x, setData] = useState(10)
//   const [name ,setName] = useState("vishal")

//   const increase = () => {
//     setData(x + 1)
//   }

//   return (
//     <div>
//        <h2>{name}</h2>
//       <h1>{x}</h1>
//       <button onClick={increase}>increase</button>
//     </div>
//   )
// }
// export default App

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

import React, { useState } from "react";

const App = () => {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([])

  const handleChange = (e) => {
    // console.log(e.target.value);
    setStudentName(e.target.value)
  }

  const addStudent = () => {
    setStudents([...students, studentName])
    setStudentName("")
  }

  return (
    <>
      <div className="flex justify-center items-center h-screen" >
      <div className="bg-gray-200 w-100 p-4 rounded-3xl flex flex-col gap-5 items-center ">
        <div>
          <input

            type="text"
            placeholder="Enter Student Name"
            value={studentName}
            onChange={handleChange}
            
          className="border-2 outline-none rounded-2xl p-2"
          />
        </div>
        <button className="bg-blue-600 rounded-2xl p-2 text-white font-bold" onClick={addStudent}>add student</button>
        {
          students.map((item, index) => {
            return (
              <>
                <h1 className="border-1 w-20" key={index}>{item}</h1>
              </>
            )
          })
        }
      </div>
      </div>
    </>
  );
};

export default App;
