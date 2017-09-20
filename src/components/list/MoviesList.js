import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../../actions/movies';
import { Pagination } from 'react-bootstrap';
import HorizantalView from '../movie/HorizantalView';

class MoviesList extends Component {
   constructor(props)
    {
      super(props);
      this.changePage = this.changePage.bind(this);
    }

    changePage(page)
    {
        this.props.dispatch(getMovies(page));
    }

    componentWillMount(){
        this.props.dispatch(getMovies());
    }

    listFilms() {

      if(!this.props.films){
        return (<div>Loading Films ...</div>)
      }

      return(
          this.props.films.map((film, index) => {
              return (
                <div key={index} className="col-xs-12">
                  <HorizantalView film={film}/>
                </div>
                );
          })
      )
    }

    render() {
      if(!this.props.films){
         return (<div>Loading ...</div>)
      }

      const pagination = this.props.meta["pagination"];
      const current_page = pagination.current_page;
      const pages = pagination.total_pages;
      const showPagination = (pages > 1) ? true : false;
      return (
        <div>
          <div className="row">
              {this.listFilms()}
          </div>
          {showPagination ? (
            <Pagination className="pagination" bsSize="medium" maxButtons={10} first last next prev boundaryLinks
            items={pages}
            activePage={current_page}
            onSelect={this.changePage}/>
          ) : ("")}


      </div>
    );
  }
}

function mapStateToProps(state) {
    const { data, meta } = state.films.list;
    return { films: data, meta: meta };
}

export default connect(mapStateToProps)(MoviesList);