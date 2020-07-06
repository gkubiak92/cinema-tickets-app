export interface IMovie {
  id: string;
  description: string;
  director: string;
  genres: string[];
  isNew: boolean;
  isPopular: boolean;
  isUpcoming: boolean;
  photosUrl: string[];
  screeningDates: IScreeningDate[];
  stars: string[];
  thumbnailUrl: string;
  ticketPrice: number;
  title: string;
  rating: number;
  writer: string;
}

export interface IScreeningDate {
  date: string;
  hoursAndHalls: IHourAndHall[];
}

export interface IHourAndHall {
  hour: string;
  hallId: string;
  screeningId: string;
}

export interface IScreening {
  dateAndHour: string;
  hallId: string;
  id: string;
  movieId: string;
}

export interface ISeatArrangement {
  [key: string]: { disabled: boolean; seatIndex: string }[];
}

export interface IHallData {
  id: string;
  name: string;
  seatArrangement: ISeatArrangement;
}

export interface IReservation {
  id: string;
  screeningId: string;
  bookedSeats: string[];
  email: string;
  firstName: string;
  lastName: string;
  price: number;
}
