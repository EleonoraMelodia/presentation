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
// exercise 3:Print the team middle age.(Eleonora)

function middleAge(arr) {
  let ageSum = 0;
  for (let i = 0; i < arr.length; i++) {
    ageSum += arr[i].age;
  }
  let middle = ageSum / arr.length;
  return middle;
}
console.log(middleAge(team));

// Exercise 6. Print if there are some members with the same name (name) (Luigi)
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

// 1 Print the team in alphabetical order (Miriana Falcone)

team.sort((a, b) => {
  let surname1 = a.surname.toLowerCase();
  let surname2 = b.surname.toLowerCase();

  if (surname1 < surname2) {
    return -1;
  } else if (surname1 > surname2) {
    return 1;
  } else return 0;
});

team.forEach((x) => {
  console.log(x.surname + " " + x.name);
});

// 5 Print who wrote 'LOL' or League of Legends'

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

