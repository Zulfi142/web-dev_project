const btn=document.querySelector("#btn");
const inp=document.querySelector("#inp");
const list=document.querySelector(".list");
const url="http://universities.hipolabs.com/search?country=";

btn.addEventListener("click",(e)=>{
       const APILINK=url+inp.value;
       fetchData(APILINK);
       inp.value="";
})

async function fetchData(APILINK) {
    let res=await fetch(APILINK)
    let data=await res.json();
    console.log(data);
    DisplayData(data);
}
function DisplayData(datas) {

    list.innerHTML = "";

    // HEADING
    let x = document.createElement("div");
    x.style.marginLeft="120px";
    const universityname = document.createElement("h2");
    universityname.innerHTML = "University-Name";
    universityname.style.width = "40vw";

    const state = document.createElement("h2");
    state.innerHTML = "State";
    state.style.width = "20vw";

    const website = document.createElement("h2");
    website.innerHTML = "Website";
    website.style.width = "10vw";

    x.appendChild(universityname);
    x.appendChild(state);
    x.appendChild(website);

    x.style.display = "flex";

    list.appendChild(x);


    // DATA
    for(let data of datas) {

        const div = document.createElement("div");

        div.style.display = "flex";
        div.style.border = "1px solid black";
        div.style.width="1200px"
        div.style.marginLeft="120px"

        const name = document.createElement("p");
        name.innerText = data.name;
        name.style.width = "40vw";

        const state = document.createElement("p");
        state.innerText = data["state-province"];
        state.style.width = "20vw";

        const web = document.createElement("p");
        web.innerText = data["web_pages"][0];
        web.style.width = "10vw";

        div.appendChild(name);
        div.appendChild(state);
        div.appendChild(web);

        list.appendChild(div);
    }
}