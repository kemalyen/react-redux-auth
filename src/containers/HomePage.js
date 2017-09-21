import React, { Component } from 'react';
import HomeMovieList from '../components/list/HomeMovieList';
import Helmet from 'react-helmet';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Helmet title="Movie Demo"/>        
        <div className="container">
            <HomeMovieList/>
        </div>
      </div>
    );
  }
}