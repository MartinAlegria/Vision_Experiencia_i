let a = 5;
console.log(a)
let b = "6";

if (a<5)
    console.log(a-5);
else if (b===6)
    console.log(a*5);
else
    console.log(b);

for (let i = 0; j=10, i < 10 && j>0; i++, j--) {
    console.log(i,j);
}

let lista = []
lista.push("asda",1,2,3,4)
console.log(lista)

function suma5(e){
    console.log(e+5);
}

lista.forEach(suma5)

console.log("COSAS");

for(e of lista){
    console.log(e);
}

console.log("INDICES");

for(e in lista){
    console.log(e);
}

console.log("FUNCION LAMDA");

lista = [5,3,8,9,1,4];
lista.sort((a, b) => b-a);
console.log(lista);
