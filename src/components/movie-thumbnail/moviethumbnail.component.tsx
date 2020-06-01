import React from "react";
import { IMovieThumbnailProps } from "./types";
import "./moviethumbnail.styles.scss";

const MovieThumbnail = ({ thumbnailUrl }: IMovieThumbnailProps) => (
  <div className="thumbnail">
    <img src={thumbnailUrl} alt="thumbnail" />
  </div>
);

export default MovieThumbnail;
