function giocata(row, col)
{
    let turn = document.getElementsByClassName("header")[0].getElementsByTagName("div")[1].innerText;
    let change = document.getElementsByClassName("header")[0].getElementsByTagName("div")[1];
    let griglia = document.getElementById("grid");
    let vittoria = document.getElementsByClassName("footer")[0];
    let cella = griglia.children[row].children[col];
    
    if(turn == "X"){

        if (cella.innerHTML == ""){
        cella.innerHTML = `<div class="x">X</div>`;
        change.outerHTML = `<div class="o">O</div>`;
        }
        else{
            alert("Cella già presa")
        }
    }else{
        if (cella.innerHTML == ""){
            cella.innerHTML = `<div class="o">O</div>`;
            change.outerHTML = `<div class="x">X</div>`;
        }
        else
            alert("Cella già presa")
    }

    if(chiHaVinto() == "x")
    {
        vittoria.innerHTML = `<div class="x">X ha vinto!</div>`;
        fine = true;
    }else if(chiHaVinto() == "o")
    {
        vittoria.innerHTML = `<div class="o">O ha vinto!</div>`;
    }else if(chiHaVinto() == "pari"){
        vittoria.innerHTML = `<div class="pari">La partita è finita in parità</div>`;
    }


    
    
}
function nuovaPartita()
{
    let indicatore = document.getElementsByClassName("footer")[0];
    let griglia = document.getElementById("grid");
    let rows = griglia.children;
    indicatore.innerHTML = "";
    for(let i = 0; i<rows.length; i++)
    {
        let cols = rows[i].children;
        for(let j = 0; j<cols.length; j++)
        {
            cols[j].innerHTML = "";
        }
    }
}
