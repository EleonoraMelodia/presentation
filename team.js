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
// exercise 3:Print the team middle age.


function middleAge (arr) {
  let ageSum= 0;
  for (let i = 0; i < arr.length; i++) {
    ageSum += arr[i].age;


  }
  let middle= ageSum / arr.length;
  return middle

} 
console.log(middleAge(team))