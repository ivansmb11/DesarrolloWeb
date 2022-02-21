const users = [];

const names = ["Roberto","Oswaldo","Ivan","Gabriel","McLovin","Carlos","Diego","Isabella","Valdemar","Santiago","Valeria","Brenda","Luisa","Luis","Enrique","Sebastian","Adrian","Gerardo"];

const genders = ["H","H","H","H","H","H","H","F","H","H","F","F","F","H","H","H","H","H"];

for (let index = 1438; index <= 1834; index++) {
  users[index] = {
    id: index,
    name: names[
      Math.floor(Math.random() * 18)
    ],
    gender: genders[
      Math.floor(Math.random() * 18)
    ]
  }
}

const findByID = query => {

    // document.getElementById('Nombre').value='';

    var idQ = parseInt(document.getElementById('queryID').value);
    
    const user = users[idQ];

    try {
      if (user.id === idQ) {
        document.getElementById('nombreT').value=user.name;
        document.getElementById('generoT').value=user.gender;
      }
    } catch {
      document.getElementById('nombreT').value='';
      document.getElementById('generoT').value='';
      window.alert('ERROR 404:\nNo se encontró a nadie con ese ID.')
    }

}