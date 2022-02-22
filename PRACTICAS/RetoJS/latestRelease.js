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

    let idQ = parseInt(document.getElementById('queryID').value);
    
    const user = users[idQ];

    try {
      if (user.id === idQ) {
        document.getElementById('nombreT').value=user.name;
        document.getElementById('generoT').value=user.gender;

        const { id, name, gender } = user;
        
        // const id = user.id;
        // const name = user.name;
        // const gender = user.gender;

        let divInfo = document.getElementById('busquedas');

        let cajaInfo = document.createElement('div');
        let listaH = document.createElement('ul');
        let liID = document.createElement('li');
        let liName = document.createElement('li');
        let liGender = document.createElement('li');

        const textID = document.createTextNode(`Id: ${ id }`);
        const textName = document.createTextNode(`Name: ${ name }`);
        const textGender = document.createTextNode(`Gender: ${ gender }`);

        liID.appendChild(textID);
        liName.appendChild(textName);
        liGender.appendChild(textGender);

        cajaInfo.className = 'cajaQuery';
        divInfo.appendChild(cajaInfo);
        cajaInfo.appendChild(listaH);
        listaH.appendChild(liID);
        listaH.appendChild(liName);
        listaH.appendChild(liGender);

      }
    } catch(error) {
      console.log(error);
      document.getElementById('nombreT').value='';
      document.getElementById('generoT').value='';
      window.alert('ERROR 404:\nNo se encontró a nadie con ese ID.')
    }

}