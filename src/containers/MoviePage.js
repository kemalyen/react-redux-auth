import React, { Component } from 'react';

import MovieView from '../components/movie/MovieView';

export default class MoviePage extends Component {
  render() {
    return (
      <div>
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                  <MovieView movie_id={this.props.params.movie_id}/>
                </div>
                <div className="col-md-4">
                </div>
            </div>
        </div>
      </div>
    );
  }
}