// Fetch код учителя

let btn=document.getElementById("fetch");

btn.addEventListener("click",function(){
fetch("https://randomuser.me/api/?results=100")
.then((response)=>response.json())
.then((data)=>{
    // console.log(data);
    console.log(data.results);
    let users=data.results;
    let output="";
    for(let user of users){
        output+=`
        <div class="card">
        <img src="${user.picture.large}" alt="">
        <h3>${user.name.title} ${user.name.first} ${user.name.last}</h3>
        <p>${user.email}</p>
        <p>${user.location.city}</p>
        </div>
        `
    }
    document.getElementById("output").innerHTML=output;
})
});