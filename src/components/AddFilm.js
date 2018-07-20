import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Input, FormGroup } from 'reactstrap';
import Modal from './Modal';
import '../styles/AddFilm.css';

class AddFilm extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.state = {
            vis: false,
            title: '',
            year: '',
            stars: '',
            format: ''
        };
        this.form = React.createRef();
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onAdd() {
        this.setState({
            vis: true
        });
    }

    onSubmit(e) {
        e.preventDefault();

        this.props.onAdd({
            'title': this.state.title,
            'release year': this.state.year,
            'format': this.state.format,
            'stars': this.state.stars
        });
        this.form.current.reset();
        this.setState({
            vis: false,
            title: '',
            year: '',
            stars: '',
            format: ''
        });
    }

    render() {
        return (
            <div>
                <Button onClick={this.onAdd} color="primary">Add film</Button>
                <Modal hideModal={() => this.setState({vis: false})} vis={this.state.vis} className="justify-content-center"> 
                    <form ref={this.form} onSubmit={this.onSubmit} className="col-sm-8 col-md-4 add-film">
                        <FormGroup>
                            <Input className="add-film__input" autoComplete="off" type="text" placeholder="title" name="title" onChange={this.handleChange} />
                            <Input className="add-film__input" autoComplete="off" type="text" placeholder="release year" name="year" onChange={this.handleChange} />
                            <Input className="add-film__input" autoComplete="off" type="text" placeholder="format" name="format" onChange={this.handleChange} />
                            <Input className="add-film__input" autoComplete="off" type="textarea" placeholder="stars" name="stars" onChange={this.handleChange} />
                        </FormGroup>
                        <Button type="submit" color="primary">add</Button>
                    </form>
                </Modal>
            </div>
        )
    }
}

export default AddFilm;