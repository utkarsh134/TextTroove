const notesContainer = document.querySelector(".notes-container") ;
const createNotes = document.querySelector(".addbtn") ;
let notes = document.querySelectorAll(".input-box") ;

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes") ;
}
showNotes() ;

function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}



createNotes.addEventListener("click", addPara) ;

function addPara(){
    let newDiv = document.createElement("div") ;
    newDiv.className = "input-box" ;

    let newP = document.createElement("p") ;
    // newP.classList.add("input-box") ;
    // newP.className = "input-box" ;
    newP.setAttribute("contenteditable", "true") ;
    
    let deleteImg = document.createElement("img") ;
    deleteImg.src = "images/Notes_delete.png" ;
    deleteImg.className = "deleteimg" ;

    newDiv.appendChild(newP) ;
    newDiv.appendChild(deleteImg);

    notesContainer.appendChild(newDiv) ;

}

notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        // console.log(e.target.parentElement) ;
        e.target.parentElement.remove() ;
        updateStorage() ;
    }

    // else if(e.target.classList.contains("input-box")){
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box") ;
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage() ;
            }
        })
    }
})

