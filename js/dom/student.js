let students = [];
let editIndex = -1;

function saveStudent() {

    const name = document.getElementById("name").value;
    const course = document.getElementById("course").value;

    if(name==="" || course===""){
        alert("Fill all fields");
        return; 
    }

    if(editIndex==-1){

        students.push({
            name,
            course
        });
    }else{
        students[editIndex].name=name;
        students[editIndex].course=course;
        editIndex=-1;

    }

    displayStudents();

    document.getElementById("name").value="";
    document.getElementById("course").value="";
}

function displayStudents(){

    let rows="";

    students.forEach((student,index)=>{

        rows+=`
        <tr>

            <td>${student.name}</td>

            <td>${student.course}</td>

            <td>

                <button onclick="editStudent(${index})">
                Edit
                </button>

                <button onclick="deleteStudent(${index})">
                Delete
                </button>

            </td>

        </tr>
        `;

    });

    document.getElementById("studentList").innerHTML=rows;

    document.getElementById("total").textContent=students.length;

}

function deleteStudent(index){

    students.splice(index,1);

    displayStudents();

}

function editStudent(index){

    document.getElementById("name").value=students[index].name;

    document.getElementById("course").value=students[index].course;

    editIndex=index;

}

function searchStudent(){

    const keyword=document
    .getElementById("search")
    .value
    .toLowerCase();

    let rows="";

    students.forEach((student,index)=>{

        if(student.name.toLowerCase().includes(keyword)){

            rows+=`
            <tr>

                <td>${student.name}</td>

                <td>${student.course}</td>

                <td>

                    <button onclick="editStudent(${index})">
                    Edit
                    </button>

                    <button onclick="deleteStudent(${index})">
                    Delete
                    </button>

                </td>

            </tr>
            `;

        }

    });

    document.getElementById("studentList").innerHTML=rows;

}