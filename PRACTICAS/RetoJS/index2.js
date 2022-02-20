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

    // document.getElementById('Nombre').value='';

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
    
    const user = users[idQ];

    if (user.id == idQ) {
      document.getElementById('nombreT').value=user.name;
      document.getElementById('generoT').value=user.gender;

    } else {
      document.getElementById('nombreT').value='';
      document.getElementById('generoT').value='';
    }
  
}