import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFilmsByCategory } from '../../actions/categories';
import VerticalView from '../film/VerticalView';

class HomeMovieList extends Component {

    componentWillMount(){
        this.props.dispatch(getFilmsByCategory(5));
    }

    listFilms() {
      if(!this.props.category){
        return (<div>Loading movies ...</div>)
      }

      return(
          this.props.category.movies.data.map((movie, index) => {
              return (
                  <div key={index} className="col-md-2 col-sm-3 col-xs-4">
                    <VerticalView film={movie}/>
                  </div>
              );
          })
      )
    }

    render() {
      if(!this.props.category){
         return (<div>Loading ...</div>)
      }

      return (
        <div>
          <div className="row">
              {this.listFilms()}
          </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
    const { data } = state.categories.movies;
    return { category: data };
}

export default connect(mapStateToProps)(HomeMovieList);