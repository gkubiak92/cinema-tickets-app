import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectAllMovies } from '../../redux/movies/movies.selectors'
import { IRootState } from '../../redux/types'
import { IMoviesPageProps } from './types'
import MoviesList from '../../components/movies-list/movies-list.component'

const MoviesPage = ({ movies }: IMoviesPageProps) => (
    <div className="movies-list">
        <MoviesList movies={movies} />
    </div>
)

const mapStateToProps = createStructuredSelector<IRootState, IMoviesPageProps>({
    movies: selectAllMovies
})

export default connect(mapStateToProps)(MoviesPage);