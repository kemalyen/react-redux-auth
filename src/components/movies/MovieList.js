import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import cookie from 'react-cookie';

class MovieList extends Component {


  render() {
    const token = cookie.load('token');
    console.log("Token " + token);
    return (
      <div>
        This is free movies page
      </div>
    );
  }
}

function mapStateToProps(state) {
    return { profile: state.auth };
}

export default connect(mapStateToProps)(MovieList);
