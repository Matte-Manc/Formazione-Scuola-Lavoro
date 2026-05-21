let num = 5 ;

for (let i = 1; i < num; i ++){
    let x = []
    for(let j = num; j >= 0; j--){
        x[j] = "*"
    }
    let stringa = ""
    stringa = x.join("")
    console.log(stringa)

}