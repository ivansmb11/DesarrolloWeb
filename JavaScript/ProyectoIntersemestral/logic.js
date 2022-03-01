
const total = document.getElementById('inputTotal');
const propina = document.getElementById('inputPropina');
const personas = document.getElementById('inputPersonas');
const check = document.getElementById('checkRound');
const rTotal = document.getElementById('retroTotal');
const rPropina = document.getElementById('retroPropina');

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
    rTotal.innerHTML = 'Total + Propina: $'+temprTotal;

    rPropina.innerHTML = 'Propina p/persona: $'+((floatTotal*per)/personas.value);
}

const clearBox = () => {

    total.value= '';
    propina.value = '';
    personas.value= '';
    document.getElementById("checkRound").checked = false;

    rTotal.innerHTML = 'Total + Propina: ';
    rPropina.innerHTML = 'Propina p/persona: ';

}

const calcularRound = (event) => {
    event.preventDefault();

    const floatTotal = parseFloat(total.value);

    per = parseFloat(propina.value / 100);
    temprTotal = floatTotal + (floatTotal*per);
    rTotal.innerHTML = 'Total + Propina: $'+Math.round(temprTotal);

    rPropina.innerHTML = 'Propina p/persona: $'+(Math.round((floatTotal*per)/personas.value));
}