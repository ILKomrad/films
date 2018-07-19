import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Input } from 'reactstrap';
import '../styles/Film.css';

class Film extends Component {
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }

    componentDidMount() {
        //console.log( this.props );
    }

    componentDidUpdate() {
        //console.log( this.props );
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
                    <li className="film__char">Title: {film['Title']}</li>
                    <li className="film__char">Release Year: {film['Release Year']}</li>
                    <li className="film__char">Format: {film['Format']}</li>
                    <li className="film__char">Stars: {film['Stars']}</li>
                </ul>
                <Button className="film__delete" onClick={this.clickHandler} color="danger">Dellete</Button>
            </div>
        )
    }
}

export default Film;