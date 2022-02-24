function color() {
    
    this.classList.toggle('negro');
    alert(this.classList.contains('caja'));
    // console.log("Se cambió la caja"+i);
}

function size() {
    this.classList.toggle('tamaño');
}

let cajas = document.getElementsByClassName('caja');
let checkbox = document.querySelector('input[type="checkbox"]');
  
for (let i = 0; i < cajas.length; i++) {
        cajas[i].addEventListener('click', color);
}