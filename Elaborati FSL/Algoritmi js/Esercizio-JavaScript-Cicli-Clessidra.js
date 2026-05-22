let num = 5 ;

function clessidra(inizio, fine){
    let ini = []
    let fin = []
    for (let i = inizio; i <num; i --){
        ini.push(" ")
    }
    for (let i = fine; i <num; i --){
        fin.push("*")
    }
    return ini.join("") + fin.join("")
}

for (let i = 1; i < num; i ++){
    
    let stringa = ""
    stringa = x.join("")
    console.log(clessidra(i, i))

}