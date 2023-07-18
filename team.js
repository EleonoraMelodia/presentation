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

//Exercise 4: Print who has a pet (name petName).
for (let i = 0; i < team.length; i++) {
  let person = team[i];
  if (person.petName) {
    console.log(
      person.name + " ha un animale domestico chiamato " + person.petName
    );
  }
}