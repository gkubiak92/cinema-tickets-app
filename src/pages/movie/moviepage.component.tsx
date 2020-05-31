import React from 'react';
import './moviepage.styles.scss';
import { useParams } from 'react-router-dom';
import { selectMovie } from '../../redux/movies/movies.selectors';
import { connect } from 'react-redux';
import Rating from '../../components/rating/rating.component';

const MoviePage = ({ movie }: any) => {
    console.log(movie);
    const { movieId } = useParams();
    return movie ?
        (
            <div className="movie-page">
                <div className="image"
                    style={{ backgroundImage: `url(https://static1.s-trojmiasto.pl/zdj/c/n/9/2570/3000x0/2570860.jpg)` }}
                />
                <p>ID: {movieId}</p>
                <h1>{movie.title}</h1>
                <Rating rating={movie.rating} />
                <p className="description">{movie.description}</p>
            </div>
        ) : (<div className="movie-page">Not found</div>)

}

const mapStateToProps = (state: any, ownProps: any) => ({
    movie: selectMovie(ownProps.match.params.movieId)(state)
})

export default connect(mapStateToProps)(MoviePage);