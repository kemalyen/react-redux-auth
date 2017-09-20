import React, { Component } from 'react';
import MoviesList from '../components/list/MoviesList';

export default class MoviesPage extends Component {
  render() {
    return (
      <div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                  <MoviesList/>
                </div>
            </div>
        </div>
      </div>
    );
  }
}