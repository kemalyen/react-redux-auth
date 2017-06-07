import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { getMessage } from '../../actions/message';

class Welcome extends Component {


componentWillMount(){
    this.props.dispatch(getMessage());
}


  render() {
    return (
      <div>
        <h2>Secured Page!</h2>



      </div>
    );
  }
}

function mapStateToProps(state) {
    return { page: state.message };
}

export default Welcome;
