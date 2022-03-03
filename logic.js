//vamos a llamar los elementos de HTML a traves de su id y les asignaremos una constante (espacio en memoria)
const total = document.getElementById('inputTotal');
const propina = document.getElementById('inputPropina');
const personas = document.getElementById('inputPersonas');
const check = document.getElementById('checkRound');
const rPropinaT = document.getElementById('retroPTotal');
const rPropina = document.getElementById('retroPropina');
const rTotal = document.getElementById('retroTotal');
const rTotalpp = document.getElementById('retroTotalpp');


let temprTotal;
let per;

const calcular = (event) => {

    if(!total.value || !propina.value || !personas.value) return;
    if(check.checked == true){
        calcularRound(event);
        return;
    }
    event.preventDefault();

    const floatTotal = parseFloat(total.value);

    per = parseFloat(propina.value / 100);
    temprTotal = floatTotal + (floatTotal*per);

    rPropinaT.innerHTML = 'Propina total: $'+(floatTotal*per); 
    rPropina.innerHTML = 'Propina p/persona: $'+((floatTotal*per)/personas.value);
    rTotal.innerHTML = 'Total + Propina: $'+temprTotal;
    rTotalpp.innerHTML = 'Total p/persona: $'+temprTotal/personas.value;
    

}

const clearBox = () => {

    total.value= '';
    propina.value = '';
    personas.value= '';
    document.getElementById("checkRound").checked = false;

    rPropinaT.innerHTML = 'Propina total: ';
    rPropina.innerHTML = 'Propina p/persona: ';
    rTotal.innerHTML = 'Total + Propina: ';
    rTotalpp.innerHTML = 'Total p/persona: ';

}

const calcularRound = (event) => {
    event.preventDefault();

    const floatTotal = parseFloat(total.value);

    per = parseFloat(propina.value / 100);
    temprTotal = floatTotal + (floatTotal*per);
    
    rPropinaT.innerHTML = 'Propina total: $'+Math.round(floatTotal*per); 
    rPropina.innerHTML = 'Propina p/persona: $'+(Math.round((floatTotal*per)/personas.value));
    rTotal.innerHTML = 'Total + Propina: $'+Math.round(temprTotal);
    rTotalpp.innerHTML = 'Total p/persona: $'+Math.round(temprTotal/personas.value);
    
}