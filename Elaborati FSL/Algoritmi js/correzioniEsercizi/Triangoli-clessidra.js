let n = 5

for(let i=1; i <=n ; i++){
    
   console.log("*".repeat(i))
}
//triangolo inverso

for(let i=1; i <=n ; i++){
    
   console.log(" ".repeat(n-i)+"*".repeat(i))
}

// clessidra
for(let i=0; i<n ; i++){
    if(i<n/2)
        console.log(" ".repeat(i)+"*".repeat(n-2*i))
    else
                console.log(" ".repeat(n-i-1)+"*".repeat(2*i-n+2))
}