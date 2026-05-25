async function abc(){
    let r = await fetch("https://dummyjson.com/users");
    let json = await r.json();
    console.log(json);

    //1
    let Maggiore30 = json.users.find((e) => e.age > 30);
    console.log(Maggiore30);

    //2
    let Alabama = json.users.filter(e => e.address.state == "Alabama");
    console.log(Alabama);

    //3
    let AlabamaArray = Alabama.map(e => ({name: e.firstName, surname: e.lastName, age: e.age}));
    console.log(AlabamaArray);

    //3 alternativa
    Alabama.forEach(e => console.log(`Nome: ${e.firstName}, Cognome: ${e.lastName}, Età: ${e.age}`));

    //4
    let OrdinaPerEta = json.users.sort((a,b) => a.age - b.age)
    .forEach(e => console.log(`Nome: ${e.firstName}, Cognome: ${e.lastName}, Età: ${e.age}`));
    console.log(OrdinaPerEta);

    //5
    let Email = json.users.map(e => e.email);
    console.log(Email);

    //6
    let uomini = json.users.filter(e => e.gender == "male");
    let AltezzaMedia = uomini.reduce((t,c) => t + c.height, 0) / uomini.length;
    console.log(AltezzaMedia);

}
abc();

// Trovare il primo utente con età > 30
//Trovare tutti glo utenti dell'alabama
//Stampare l'array con i nomi di tutti gli utenti e citta di quelli proveninti dall'alabama
//Ordinare per eta crescente e stampare a video
//Creare un nuova stringa con solo le email di tutti
//carlolare l'altrzza media di tutti gli utenti