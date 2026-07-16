
// document.getElementById("heading").innerHTML = "hy"
document.getElementById("box").innerHTML = "<h1>main box</h1>"

const handleClick = () => {
    document.getElementById("heading").innerText = "vishal"
    document.getElementById("heading").style.color = "white"
    document.getElementById("heading").style.background = "red"
    document.getElementById("heading").style.fontSize = "24px"
    document.getElementById("heading").style.padding = "10px"
    document.getElementById("heading").style.display = "inline-block"

    // document.getElementsByClassName("text")[1].innerText = "All change"

    for (let i = 0; i < document.getElementsByClassName("text").length; i++) {
        document.getElementsByClassName("text")[i].innerText = "All change"
    }
}

const data = document.getElementsByClassName("text")
for (let value of data) {
    console.log(value);
} 

const handleSaveClick = ()=>{
   const studentName = document.getElementById("student_name").value
   if(studentName === ""){
    alert("please enter your name")
   }
   document.getElementById("from_student_name").textContent = studentName;
   const selectedRadio = document.querySelector('input[name="gender"]:checked')
   if(selectedRadio){
       console.log(selectedRadio.value);
   }else{
    console.log("no radio button is seleced");

   }
   
}









