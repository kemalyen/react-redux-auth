import React, { Component } from 'react';
import HomeMovieList from '../components/list/HomeMovieList';

export default class HomePage extends Component {
  render() {
    return (
    <div className="container">
        <HomeMovieList/>
    </div>
    );
  }
}