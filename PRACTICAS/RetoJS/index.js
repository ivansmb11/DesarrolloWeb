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
  // var query = parseInt(document.getElementById('queryID').value);
  
  const user = users[query];

  if (user) {
    console.log(user);
  } else {
    console.log("Not found");
  }

}

findByID(1500);
findByID(3);

// for (let index = 1438; index <= 1834; index++) {
//   ids[index] = index;
//   // document.write(`${ index } \n`);
//   console.log(index,'\n');
// }

// console.log(ids.length); para NODE.js
