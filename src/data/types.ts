export interface IHallArrangement {
  name: string;
  seatArrangement: {
    [key: string]: {
      disabled: boolean;
      isAvailable: boolean;
    }[];
  };
}

export interface IMovieToHall {
  movieId: string;
  hallArrangementId: string;
  bookedSeats: string[];
}
