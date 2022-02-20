const users = [];

const names = [
  "Roberto",
  "Oswaldo",
  "Ivan",
  "Gabriel",
  "McLovin",
  "Carlos",
  "Diego",
  "Isabella",
  "Valdemar",
  "Santiago",
  "Valeria",
  "Brenda",
  "Luisa",
  "Luis",
  "Enrique",
  "Sebastian",
  "Adrian",
  "Gerardo"
];

const genders = [
  "H",
  "H",
  "H",
  "H",
  "H",
  "H",
  "H",
  "F",
  "H",
  "H",
  "F",
  "F",
  "F",
  "H",
  "H",
  "H",
  "H",
  "H"
];


const findByID = query => {

    document.getElementById('Nombre').value='';

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

    var idQ = parseInt(document.getElementById('queryID').value);

    // var query = parseInt(document.getElementById('queryID').value);
    
    const user = users[query];

    if ()

    // if (user.index == idQ) {
    //     document.getElementById('nombreT').value=user.names;
    //     document.getElementById('generoT').value=user.genders;

    // } else {
    //     document.getElementById('nombreT').value='No hay nada en la DB';
    //     document.getElementById('generoT').value='No hay nada en la DB';
    // }
  
  }