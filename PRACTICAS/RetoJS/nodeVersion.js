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
    
    let user = users[query];

    try {
      if (user.id === query) {
        console.log('Se encontró el id ',user.id,' con el nombre ',user.name);
        console.log(user);
        console.log(query);
        console.log(user.id);
  
      }
    } catch {
      console.log('No se encontró nada en la DB1');
    }
    

}

findByID(1600);