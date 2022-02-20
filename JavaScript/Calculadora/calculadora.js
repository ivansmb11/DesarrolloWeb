function suma(n1,n2){

    var n1 = parseFloat(document.getElementById('numero1').value);
    var n2 = parseFloat(document.getElementById('numero2').value);
    
    var result = n1+n2;

    document.getElementById('resultado').value=result;

}