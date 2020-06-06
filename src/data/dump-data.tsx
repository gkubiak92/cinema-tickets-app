import { IMovie } from "../components/movie-listitem/types";

export const slides = [
  "https://cdn.pastemagazine.com/www/system/images/photo_albums/best-movie-posters-2016/large/moonlight-ver2-xlg.jpg?1384968217",
  "https://www.joblo.com/assets/images/joblo/posters/2019/01/IO-poster-1.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/71zaL8t0qgL._AC_SL1406_.jpg",
];

export const movies: IMovie[] = [
  {
    id: "A13xQ3QRVPxFMQGqaTkq",
    description:
      "Armed with only one word -- Tenet -- and fighting for the survival of the entire world, the Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
    director: "Christopher Nolan",
    genres: ["Action", "Sci-Fi", "Thriller"],

    isNew: true,
    isPopular: true,
    isUpcoming: false,
    photosUrl: [
      "https://m.media-amazon.com/images/M/MV5BNWFlNjVkM2ItZDE1My00NTEwLWJhYmQtYWM5ODRkNzY3OGE5XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg",
      "https://m.media-amazon.com/images/M/MV5BNDA2NjQxNzctZGMzMy00NzczLWI4MTctZWU3MWVhZWMwMDNjXkEyXkFqcGdeQXVyNzg0ODMwNDg@._V1_SX1777_CR0,0,1777,755_AL_.jpg",
      "https://m.media-amazon.com/images/M/MV5BYmI5Zjk5MDMtNTdmMC00MDU5LTkyOTktZWE2ZGMyOGFhNWFkXkEyXkFqcGdeQXVyNzg0ODMwNDg@._V1_SX1777_CR0,0,1777,755_AL_.jpg",
    ],
    screeningDates: [
      {
        date: "2020-06-01",
        hours: ["12:00", "13:15", "16:00", "17:15", "20:00", "21:30"],
      },
      {
        date: "2020-06-02",
        hours: ["10:00", "13:15", "17:15", "20:00", "21:30"],
      },
      {
        date: "2020-06-03",
        hours: ["12:00", "13:15", "16:00", "17:15"],
      },
      {
        date: "2020-06-04",
        hours: ["17:15", "20:00", "21:30"],
      },
      {
        date: "2020-06-05",
        hours: ["12:00", "13:15", "16:00", "17:15", "20:00", "21:30"],
      },
      {
        date: "2020-06-06",
        hours: ["12:00", "13:15", "16:00", "17:15", "20:00", "21:30"],
      },
    ],
    stars: ["John David Washington", "Robert Pattinson", "Elizabeth Debicki"],
    thumbnailUrl:
      "https://m.media-amazon.com/images/M/MV5BNmMwYzFlNTEtYTc0NC00NGY4LTgzNzItZGFiYTViY2QzNzU1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    ticketPrice: 19.99,
    title: "Tenet",
    rating: 3,
    writer: "Christopher Nolan",
  },
  {
    id: "A13xQ3QRVPxFMQGqaTaq",
    description:
      "A roadie travels across North America with a punk band during the 1980s",
    director: "Gerardo Naranjo",
    genres: ["Drama", "Music", "Romance"],

    isNew: true,
    isPopular: false,
    isUpcoming: true,
    photosUrl: [
      "https://m.media-amazon.com/images/M/MV5BOWIzODkwYTEtYmI0OC00YTM0LWFmY2QtNGU5Zjk0OTliOGIyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,1498,1000_AL_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjU4NTc3MzktM2Y3MC00OTlmLThkZjMtODc4MmJmMjM2YzI1XkEyXkFqcGdeQXVyNDMwODgwOTc@._V1_SY1000_CR0,0,1498,1000_AL_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMmRkYWQ4ZDQtZjZjMy00NWY0LWExMWUtMTM2YWMxZmE4MGNkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,1498,1000_AL_.jpg",
    ],
    screeningDates: [
      {
        date: "2020-06-01",
        hours: ["12:00", "13:15", "16:00", "17:15", "20:00", "21:30"],
      },
      {
        date: "2020-06-02",
        hours: ["10:00", "13:15", "17:15", "20:00", "21:30"],
      },
      {
        date: "2020-06-03",
        hours: ["12:00", "13:15", "16:00", "17:15"],
      },
      {
        date: "2020-06-04",
        hours: ["17:15", "20:00", "21:30"],
      },
      {
        date: "2020-06-05",
        hours: ["12:00", "13:15", "16:00", "17:15", "20:00", "21:30"],
      },
      {
        date: "2020-06-06",
        hours: ["12:00", "13:15", "16:00", "17:15", "20:00", "21:30"],
      },
    ],
    stars: ["Dakota Fanning", "Evan Rachel", "Wood", "Zoë Kravitz"],
    thumbnailUrl:
      "https://m.media-amazon.com/images/M/MV5BODk1ZWM3NmYtOTBkMC00ZDNkLWFhYzUtZWYyODUzNmFhOTQ3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    ticketPrice: 29.99,
    title: "Viena and the Fantomes",
    rating: 4.5,
    writer: "Gerardo Naranjo",
  },
  {
    id: "A13xQ3QRVPxFMQGqaTbq",
    description:
      "April 6th, 1917. As a regiment assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap.",
    director: "Sam Mendes",
    genres: ["Drama", "War"],
    isNew: false,
    isPopular: true,
    isUpcoming: false,
    photosUrl: [
      "https://m.media-amazon.com/images/M/MV5BZjNhYTc5NDgtZGY4Mi00OWQ2LWI0NjktYmU1OWYyMjdlMmFiXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_SY1000_SX1500_AL_.jpg",
      "https://m.media-amazon.com/images/M/MV5BZjNhYTc5NDgtZGY4Mi00OWQ2LWI0NjktYmU1OWYyMjdlMmFiXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_SY1000_SX1500_AL_.jpg",
      "https://m.media-amazon.com/images/M/MV5BOTUxZWM1NDMtOTE0Zi00YmM1LTk2YTMtNmQ4Mjc2MGQxMGI5XkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_.jpg",
    ],
    screeningDates: [
      {
        date: "2020-06-01",
        hours: ["12:00", "13:15", "16:00", "17:15", "20:00", "21:30"],
      },
      {
        date: "2020-06-02",
        hours: ["10:00", "13:15", "17:15", "20:00", "21:30"],
      },
      {
        date: "2020-06-03",
        hours: ["12:00", "13:15", "16:00", "17:15"],
      },
      {
        date: "2020-06-04",
        hours: ["17:15", "20:00", "21:30"],
      },
      {
        date: "2020-06-05",
        hours: ["12:00", "13:15", "16:00", "17:15", "20:00", "21:30"],
      },
      {
        date: "2020-06-06",
        hours: ["12:00", "13:15", "16:00", "17:15", "20:00", "21:30"],
      },
    ],
    stars: ["Dean-Charles Chapman", "George MacKay", "Daniel Mays"],
    thumbnailUrl:
      "https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_UX182_CR0,0,182,268_AL_.jpg",
    ticketPrice: 24.0,
    title: "1917",
    rating: 5,
    writer: "Sam Mendes",
  },
  {
    id: "A13xQ3QRVPxFMQGqaTcq",
    description:
      "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
    director: "Todd Phillips",
    genres: ["Crime", "Drama", "Thriller"],
    isNew: false,
    isPopular: true,
    isUpcoming: false,
    photosUrl: [
      "https://m.media-amazon.com/images/M/MV5BYmZlOTY2OGUtYWY2Yy00NGE0LTg5YmQtNmM2MmYxOWI2YmJiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_SX1500_AL_.jpg",
      "https://m.media-amazon.com/images/M/MV5BYmZlOTY2OGUtYWY2Yy00NGE0LTg5YmQtNmM2MmYxOWI2YmJiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_SX1500_AL_.jpg",
      "https://m.media-amazon.com/images/M/MV5BYmZlOTY2OGUtYWY2Yy00NGE0LTg5YmQtNmM2MmYxOWI2YmJiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_SX1500_AL_.jpg",
    ],
    screeningDates: [
      {
        date: "2020-06-01",
        hours: ["12:00", "13:15", "16:00", "17:15", "20:00", "21:30"],
      },
      {
        date: "2020-06-02",
        hours: ["10:00", "13:15", "17:15", "20:00", "21:30"],
      },
      {
        date: "2020-06-03",
        hours: ["12:00", "13:15", "16:00", "17:15"],
      },
      {
        date: "2020-06-04",
        hours: ["17:15", "20:00", "21:30"],
      },
      {
        date: "2020-06-05",
        hours: ["12:00", "13:15", "16:00", "17:15", "20:00", "21:30"],
      },
      {
        date: "2020-06-06",
        hours: ["12:00", "13:15", "16:00", "17:15", "20:00", "21:30"],
      },
    ],
    stars: [" Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"],
    thumbnailUrl:
      "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    ticketPrice: 29.99,
    title: "Joker",
    rating: 3.8,
    writer: "Todd Phillips",
  },
];
