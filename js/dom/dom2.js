function handleCreateElement() {
    const heading = document.createElement('h1')
    heading.textContent = "hello world"
    document.getElementById("container").appendChild(heading)
}

// localStorage - its work on all tabs
// sessionStorage - its work only same tab

let count = 0
function handleClicked() {
    count++;
    document.getElementById("user_clicked").innerText = count;
    sessionStorage.setItem("count" ,count )
    localStorage.setItem("count" ,count )
}
function dataFromStorage(){
    count = localStorage.getItem("count")
    document.getElementById("user_clicked").innerText=count
}
dataFromStorage()

