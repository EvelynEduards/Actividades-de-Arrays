let clasificaciones = ["Marcos", "Franco","Agostina","Leon","Juan Cruz","Eduardo"]

function mostrarClasificacion(){
    clasificaciones.forEach((element,i)=>{
        console.log(`${element} está en la posicion ${i+1}`);
})
}

clasificaciones.shift()
clasificaciones.shift()
clasificaciones.shift()
clasificaciones.shift()
clasificaciones.unshift("Marcos","Franco","Leon","Agostina");
clasificaciones.pop()
clasificaciones.shift()
clasificaciones.unshift("Alicia","Marcos","Julieta","Martina");


console.log(mostrarClasificacion());


