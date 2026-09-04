const btn=document.querySelector("#btn");
const inp=document.querySelector("#inp");
const todolist=document.querySelector(".todolist");

btn.addEventListener("click",(e)=>{
    if(inp.value!=""){
        const div=document.createElement("div");
        div.classList.add("todos");
        div.innerHTML=`<div class="sectionA">
                <input type="checkbox" name="" class="checkbox">
                <p>${inp.value}</p>
                </div>
                <div class="sectionB">
                    <span class="up-arrow">↑</span>
                    <span class="bin"><i class="fa-solid fa-trash-can"></i></span>
                    <span class="down-arrow">↓</span>
                </div>`
                inp.value="";
                todolist.appendChild(div);
    }
})

todolist.addEventListener("click",(e)=>{
    if(e.target.getAttribute("class")=="checkbox"){
        e.target.nextElementSibling.classList.toggle("checked");
    }
    else if(e.target.getAttribute("class")=="up-arrow"){
        let curr=e.target.parentElement.parentElement;
        let prev=curr.previousElementSibling;
        if(prev){
            prev.before(curr);
        }

    }
    else if(e.target.getAttribute("class")=="down-arrow"){
        let curr=e.target.parentElement.parentElement;
        let next=curr.nextElementSibling;
        if(next){
            curr.before(next);
        }
    }
    else if(e.target.getAttribute("fill")=="currentColor"){
        console.log(e.target.parentElement.parentElement.parentElement.parentElement)
        //just to check ki ye todos class tk leke aaraha h ya nhii
        e.target.parentElement.parentElement.parentElement.parentElement.remove()
    }
})

