var nombre ="Santiago";

var altura = 120;

var concatenacion = nombre + " " +altura;





if(altura >= 190){
    datos.innerHTML += `<h1>Eres una peraona alta</h1>`
}else{
    datos.innerHTML+=`<h1>Eres una persona baja</h1>`
}

// for (let i=0; i<= 2020; i++){
//     datos.innerHTML += `<h2>Estamos en el año ${i}</h2>`
// }

//funciones

function MuestraMiNombre(nombre, altura){
    var datos = document.getElementById("datos");
    datos.innerHTML = `
    <h1>Caja de datos </h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h2>Mi altura es: ${altura}cm</h2>
`;
}

MuestraMiNombre("Juan", 190);


function MuestraMiNombre(nombre, altura){
    var misDatos = `
    <h1>Caja de datos </h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h2>Mi altura es: ${altura}cm</h2>
`;
    return misDatos;
}

function imprimir (){
    var datos = document.getElementById("datos");
    datos.innerHTML= MuestraMiNombre("Juan", 199)
}

imprimir();

var nombres = ['Andres','juan','joel']

// for(i=0; i<nombres.length; i++){
//     document.write('nombre #'+ `${[i +1]} `+ 'es ' +nombres[i] + '<br/>')
// }

nombres.forEach(nombre => {
    document.write('Mi nombres es ' +nombre + '<br/>')
})