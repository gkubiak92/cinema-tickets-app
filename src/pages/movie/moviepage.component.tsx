import React from 'react';
import './moviepage.styles.scss';
import { useParams, RouteComponentProps } from 'react-router-dom';
import { selectMovie } from '../../redux/movies/movies.selectors';
import { connect } from 'react-redux';
import Rating from '../../components/rating/rating.component';
import { IMoviePageMatchParams, IMoviePageState } from './types'
import { IRootState } from '../../redux/types';
import Slider from '../../components/slider/slider.component';

const MoviePage = ({ movie }: IMoviePageState) => {
    const { movieId } = useParams();
    return movie ?
        (
            <div className="movie-page">
                <Slider interval={2000} slides={movie.photosUrl} />
                <p>ID: {movieId}</p>
                <h1>{movie.title}</h1>
                <Rating rating={movie.rating} />
                <p className="description">{movie.description}</p>
            </div>
        ) : (<div className="movie-page">Not found</div>)

}

const mapStateToProps = (
    state: IRootState,
    ownProps: RouteComponentProps<IMoviePageMatchParams>
) => ({
    movie: selectMovie(ownProps.match.params.movieId)(state)
})

export default connect(mapStateToProps)(MoviePage);