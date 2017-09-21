import React, { Component } from 'react';
import { getMovie, getMovieCredits } from '../../actions/movies';
import { connect } from 'react-redux';
import {IMAGE_URL} from '../../constants';
import { Image } from 'react-bootstrap';
import CastPerson from './CastPerson';
import CrewPerson from './CrewPerson';
import Helmet from 'react-helmet';

class MovieView extends Component {

  constructor(props)
   {
    super(props);
    this.loadData = this.loadData.bind(this);
   }

  componentWillMount() {
    this.loadData(this.props.movie_id);
  }

  componentWillReceiveProps(nextProps){
      if (JSON.stringify(this.props.movie_id) !== JSON.stringify(nextProps.movie_id)){
        this.loadData(nextProps.movie_id);
      }
  }

  loadData(movie_id)
  {
    this.props.dispatch(getMovie(movie_id));
    this.props.dispatch(getMovieCredits(movie_id));
  }

  listCast(){
    if(! this.props.credits){
      return (<tr><td>Loading Cast</td></tr>)
    }

    return(
      this.props.credits.cast.data.map((person, index) => {
        return(
          <CastPerson key={index} person={person}/>
        );
      })
    )
  }

  listCrew(){
    if(! this.props.credits){
      return (<tr><td>Loading Crew</td></tr>)
    }

    return(
      this.props.credits.crew.data.map((person, index) => {
        return(
          <CrewPerson key={index} person={person}/>
        );
      })
    )
  }

  render() {
    const { movie } = this.props;
    if(!movie){
        return <div>Loading</div>
    }
    const img_url = `${IMAGE_URL}/${movie.id}/${movie.image}`;
    return (
      <div>
        <Helmet title={movie.title}/>
            <div className="row">
              <div className="col-md-3">
                <Image src={img_url} responsive />
              </div>
              <div className="col-md-9">
                <h3>{movie.title}</h3>
                <strong>{movie.original_title}</strong><br/>

                <br/> &nbsp; <br/>

                <table className="table">
                  <tbody>
                    <tr>
                      <td className="col-md-4 col-sm-6 col-xs-6">Süre:</td>
                      <td className="col-md-8 col-sm-6 col-xs-6">{movie.runtime} dk.</td>
                    </tr>
                    <tr>
                      <td className="col-md-4 col-sm-6 col-xs-6">Tarih:</td>
                      <td className="col-md-8 col-sm-6 col-xs-6">{movie.date}</td>
                    </tr>
                    <tr>
                      <td className="col-md-4 col-sm-6 col-xs-6">Dil:</td>
                      <td className="col-md-8 col-sm-6 col-xs-6">{movie.original_language }</td>
                    </tr>
                  </tbody>
                </table>

                <p>{movie.overview}</p>

                <br/> &nbsp; <br/>
                <h4>Cast:</h4>
                <table className="table table-condensed">
                  <tbody>
                    {this.listCast()}
                  </tbody>
                </table>
                <br/> &nbsp;
                <table className="table table-condensed">
                  <tbody>
                    {this.listCrew()}
                  </tbody>
                </table>
                <br/>

              </div>
            </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
    const { data } = state.movies.movie;
    return { movie: data, credits: state.movies.credits.data };
}

export default connect(mapStateToProps)(MovieView);