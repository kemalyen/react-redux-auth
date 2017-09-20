import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router';
import {IMAGE_URL} from '../../constants';
import './vertical_view.css';

const VerticalView = (props) => {
    const img_url = `${IMAGE_URL}/${props.film.id}/${props.film.image}`;

    return (
        <div className="thumbnail">
        <Link to={`/film/${props.film.id}` }><Image src={img_url} responsive /></Link>
        <div className="caption">
            <h3><Link to={`/film/${props.film.id}` }>{props.film.title}</Link></h3>
        </div>
        </div>);
  }
export default VerticalView;
