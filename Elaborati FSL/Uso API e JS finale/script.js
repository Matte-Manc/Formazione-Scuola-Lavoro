//'https://dummyjson.com/users?limit=5&skip=10&select=firstName,age'
changePage(0);

async function search()
{
    let searchInput = document.getElementById("searchInputText").value;
    console.log(searchInput);
    let r = await fetch(`https://dummyjson.com/users/search?q=${searchInput}&select=firstName,lastName,age,gender,height,weight,eyeColor,hair`)
    let json = await r.json()
    let user = json.users;
    let tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";
    CreateTabels(user);
}
async function changePage(indice) {
    
    let page = (parseInt(document.getElementsByClassName("pag")[indice].innerText))-1 ;
    let num = 10*page;
    console.log(page);
    let r = await fetch(`https://dummyjson.com/users?limit=10&skip=${num}&select=firstName,lastName,age,gender,height,weight,eyeColor,hair`)
    let json = await r.json()
    let user = json.users;
    let tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";
    CreateTabels(user);
    
}
function previous(){
    let PrimaPagina = document.getElementById("cambiaPagina").getElementsByTagName("li")[1];
    let pagine = document.getElementsByClassName("pag");
    
    if(PrimaPagina.innerText != 1){
        for (let i = 0; i < pagine.length; i++)
        {
            pagine[i].innerText = parseInt(pagine[i].innerText) - 3;
        }
    }

}
function next(){
    let PrimaPagina = document.getElementById("cambiaPagina").getElementsByTagName("li")[1];
    let pagine = document.getElementsByClassName("pag");
    if(PrimaPagina.innerText != 19){
        for (let i = 0; i < pagine.length; i++)
        {
            pagine[i].innerText = parseInt(pagine[i].innerText) + 3;
        }
    }

}
function CreateTabels(Lista){

    for(let i = 0; i < Lista.length; i++){
        let row = `<tr>
                        <td>${Lista[i].lastName}</td>
                        <td>${Lista[i].firstName}</td>
                        <td>${Lista[i].gender}</td>
                        <td>${Lista[i].age}</td>
                        <td>${Lista[i].height}</td>
                        <td>${Lista[i].weight}</td>
                        <td>${Lista[i].eyeColor}</td>
                        <td>${Lista[i].hair.color} ${Lista[i].hair.type}</td>
                    </tr>`;
        tableBody.innerHTML += row;
    }
}
async function sort(value, order)
{
    console.log(value);
    let r = await fetch(`https://dummyjson.com/users?sortBy=${value}&order=asc&limit=10&select=firstName,lastName,age,gender,height,weight,eyeColor,hair`)
    let json = await r.json()
    let user = json.users;
    let tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";
    CreateTabels(user);
}