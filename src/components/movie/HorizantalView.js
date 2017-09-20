import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router';
import {IMAGE_URL} from '../../constants';
import './horizantal_view.css';

const HorizantalView = (props) => {
    const img_url = `${IMAGE_URL}/${props.film.id}/${props.film.image}`;
    return (
      <div>
        <div className="col-md-3 col-sm-3 col-xs-4">
          <div className="thumbnail">
            <Link to={`/movies/${props.film.id}` }><Image src={img_url} responsive /></Link>
          </div>
        </div>
        <div className="col-md-9 col-sm-9 col-xs-8">
            <h4><Link to={`/movies/${props.film.id}` }>{props.film.title}</Link></h4>
            {props.film.original_title} <br/>
           
        </div>
      </div>
    );
}
export default HorizantalView;