import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import '../styles/Film.css';

class Film extends Component {
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        this.props.onDelete(this.props.film.id);
    }

    render() { 
        const film = this.props.film;      
        return (
            <div className="film"> 
                <ul className="film__chars">
                    <li className="film__char">id: {film.id}</li>
                    <li className="film__char">Title: {film['title']}</li>
                    <li className="film__char">Release Year: {film['release year']}</li>
                    <li className="film__char">Format: {film['format']}</li>
                    <li className="film__char">Stars: {film['stars']}</li>
                </ul>
                <Button className="film__delete" onClick={this.clickHandler} color="danger">Dellete</Button>
            </div>
        )
    }
}

export default Film;