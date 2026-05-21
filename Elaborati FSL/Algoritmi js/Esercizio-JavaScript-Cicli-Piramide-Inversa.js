let num = 7
let x = [];
for(let i = 0; i <= num; i ++)
{
    
    
    
    for(let j = num ; j > 0; j--){
        if(j < num-i || j == num - i)
        {
            x[j]= " "
            
        }
        else
        {
            x[j]="*"
        }
    }
    
    
    let stringa = x.join("")
    console.log(stringa)
}