import React, { Component } from 'react';
import HeaderTemplate from '../components/template/header';
import FooterTemplate from '../components/template/footer';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderTemplate logo="React Demo"/>

        <div className="container">
          {this.props.children}
        </div>

        <FooterTemplate />
      </div>
    );
  }
}

export default App;