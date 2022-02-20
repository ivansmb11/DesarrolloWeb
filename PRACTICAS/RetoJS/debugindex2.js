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
    
    const user = users[query];

    console.log(user);
    // console.log(query);
    console.log(user.id);

    if (user.id == query) {
        console.log('Se encontró el id ',user.id,' con el nombre ',user.name);

    } else {
      console.log('No se encontró nada en la DB');
    }
  
}

findByID(1500);