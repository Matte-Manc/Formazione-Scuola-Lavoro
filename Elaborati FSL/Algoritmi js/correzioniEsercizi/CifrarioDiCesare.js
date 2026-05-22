function cifra(plaintext, key)
{
    let ALFA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let alfa = ALFA.toLowerCase()
    let out =""
    for (let c of plaintext)
    {
        let i = ALFA.indexOf(c)
        if( i>= 0)
            out += ALFA[(((i+key)%ALFA.length)+alfa.length)%alfa.length]
        else{
            let j = alfa.indexOf(c)
            if( j>= 0)
                out += alfa[(((i+key)%alfa.length)+alfa.length)%alfa.length]
            else
                out += c
        }
        
    }
    return out
}
function decifra(ciphertext,key){
    return cifra(ciphertext, -1*key)
}

console.log(cifra("CANE",-3))
console.log(decifra("Zxkb",-3))