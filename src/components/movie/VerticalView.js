import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router';
import {IMAGE_URL} from '../../constants';
import './vertical_view.css';

const VerticalView = (props) => {
    const img_url = `${IMAGE_URL}/${props.movie.id}/${props.movie.image}`;

    return (
        <div className="thumbnail">
        <Link to={`/movies/${props.movie.id}` }><Image src={img_url} responsive /></Link>
        <div className="caption">
            <h3><Link to={`/movies/${props.movie.id}` }>{props.movie.title}</Link></h3>
        </div>
        </div>);
  }
export default VerticalView;
