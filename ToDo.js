console.log("jai")

let inputbox=document.getElementById("input-box")
let listcontainer=document.getElementById("list-container")

inputbox.addEventListener('keypress',(event)=>{
    if(event.key==='ENTER'){
        console.log("checking")
         }
    },false)

    inputbox.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            if(inputbox.value ==''){
                alert("you must write something to add")
            }
            else{
                let li=document.createElement("li")
                li.innerHTML=inputbox.value
                listcontainer.append(li)
                let cross=document.createElement("span")
                cross.innerHTML="Delete"
                li.appendChild(cross)
            }
            inputbox.value=''
            savedata()
        }
    });


function addtask(){
    if(inputbox.value ==''){
        alert("you must write something to add")
    }
    else{
        let li=document.createElement("li")
        li.innerHTML=inputbox.value
        listcontainer.append(li)
        let cross=document.createElement("span")
        cross.innerHTML="Delete"
        li.appendChild(cross)
    }
    inputbox.value=''
    savedata()
}

listcontainer.addEventListener("click",function(e){
    if (e.target.tagName == "LI"){
        e.target.classList.toggle("checked")
        savedata()
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove()
        savedata()
    }
},false)

function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML)  //so we want the innerhtml text that to be stored as an localstorage in the browser with the variable data
}
function showdata(){
    listcontainer.innerHTML=localStorage.getItem("data")
}
showdata()