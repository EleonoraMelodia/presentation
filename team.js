const team = [
  {
    name: "Angelo",
    surname: "Gallina",
    age: 23,
    city: "Caltanissetta",
    hobby: "Calcio, Videogames",
    favoriteFood: "Pizza",
    favoriteVideoGame: "Elden Ring",
    favoriteFilm: "The Wolf Of The WallStreet",
    favoriteBook: "Insurgent",
    petName: "Zody",
  },
  {
    name: "Luigi",
    surname: "Rauso",
    age: 25,
    city: "Napoli",
    hobby: "Music",
    favoriteFood: "Pasta",
    favoriteVideoGame: "Valorant",
    favoriteFilm: "The Legend of 1900",
    favoriteBook: "Metro 2033",
    petName: "Rudy",
  },
  {
    name: "Eleonora",
    surname: "Melodia",
    age: 31,
    city: "Palermo",
    hobby: "Crossfit",
    favoriteFood: "Pizza",
    favoriteVideoGame: "Sims",
    favoriteFilm: "Notte da leoni",
    favoriteBook: "Piccolo principe",
    petName: "Zelda",
  },
  {
    name: "Miriana",
    surname: "Falcone",
    age: 21,
    city: "Manfredonia",
    hobby: "Reading",
    favoriteFood: "Sushi",
    favoriteVideoGame: "",
    favoriteFilm: "",
    favoriteBook: "Le affinità elettive",
    petName: "",
  },
  {
    name: "monica",
    surname: "lucaci",
    age: 31,
    city: "rome",
    hobby: "programming",
    favoriteFood: "pizza",
    favoriteFilm: "titanic",
    favoriteVideoGame: "mario",
    favoriteBook: "the idiot",
    petName: "toffee",
  },
];

// 1 Print the team in alphabetical order (Miriana Falcone)
console.log("\n");
const sortedByName = team.sort(function (a, b) {
  const nameA = a.surname + " " + a.name;
  const nameB = b.surname + " " + b.name;

  if (nameA < nameB) {
    return -1;
  } else if (nameA > nameB) {
    return 1;
  } else {
    return 0;
  }
});

console.log("Team sorted by surname and name:");
for (let i = 0; i < sortedByName.length; i++) {
  const member = sortedByName[i];
  console.log(member.surname + " " + member.name);
}

//exercise 2: print students in age oder
console.log("\n");
console.log("Age sorted students:");
function sortByAge(arr) {
  team.sort((a, b) => {
    return a.age - b.age;
  });

  team.forEach((arr) => {
    console.log(arr.name + " " + arr.age);
  });
}
sortByAge(team);

// exercise 3:Print the team middle age.(Eleonora)
console.log("\n");
function middleAge(arr) {
  let ageSum = 0;
  for (let i = 0; i < arr.length; i++) {
    ageSum += arr[i].age;
  }
  let middle = ageSum / arr.length;
  return middle;
}
console.log(middleAge(team));

//Exercise 4: Print who has a pet (name petName)(Angelo).
console.log("\n");
for (let i = 0; i < team.length; i++) {
  let person = team[i];
  if (person.petName) {
    console.log(
      person.name + " ha un animale domestico chiamato " + person.petName
    );
  }
}

// 5 Print who wrote 'LOL' or League of Legends' (Miriana Falcone)
console.log("\n");

team.forEach((x) => {
  if (
    x.favoriteVideoGame === "League of Legends" ||
    x.favoriteVideoGame === "LOL"
  ) {
    console.log(x.name + " " + x.surname);
  } else {
    console.log(x.name + " " + "Non gioca a LoL");
  }
});

// 6. Print if there are some members with the same name (name)(Luigi)
console.log("\n");
let duplicate = false;

for (let i = 0; i < team.length; i++) {
  for (let j = i + 1; j < team.length; j++) {
    if (team[i].name.toLowerCase() === team[j].name.toLowerCase()) {
      duplicate = true;
    }
  }
}

if (duplicate === true) {
  console.log("Controlla l'array, ci sono duplicati");
} else {
  console.log("Non ci sono duplicati.");
}
