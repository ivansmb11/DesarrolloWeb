const color = () => {
    
    this.classList.toggle('negro');

}

let cajas = document.getElementsByClassName('caja');

for (let i = 0; i < cajas.length; i++) {
    
    cajas[i].addEventListener('click', color);
    
}

