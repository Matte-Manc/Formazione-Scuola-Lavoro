function eratostene(n) 
{
    /*let numeri = [];
    for(let i= 2; i<=n; i++)
    {
        numeri.push(i);
    }
    for(let i=0; i<numeri.length -1; i++){
        for(let j=i; j<numeri.length; j++){
            if(numeri != numeri[j]% numeri[i] == 0)
                numeri[j] = null
        }
    }
    for(let num of numeri){
        if(num != null){
            console.log(numeri[num])
        }

    }*/
   
    


    let numeri = [false, false]
    for(let i= 2; i*i<=n; i++)
    {
        if (numeri[i] == true)
        {
            for(let j= i*i; j<=n; j+=i)
            {
                if(numeri[i] == false)continue
                if(numeri[j]==true && j % i == 0)
                    numeri[j]= false
            }
        }
    }
    for(let i=0; i<numeri.length; i++)
        if(numeri[i])
            console.log(i)
}

eratostene(50)