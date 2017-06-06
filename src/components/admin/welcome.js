import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Welcome extends Component {
  render() {
    return (
      <div>
        welcome Admin navigation goes here.
      </div>
    );
  }
}
function mapStateToProps(state) {
    const { data } = state.message;
    return { page: data };
}

export default connect(mapStateToProps) (Welcome);
