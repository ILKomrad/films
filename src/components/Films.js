import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Input } from 'reactstrap';
import Film from '../components/Film';
import AddFilm from './AddFilm';
import '../styles/Films.css';

class Films extends Component {
    constructor(props) {
        super(props);
        this.onAdd = this.onAdd.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.setOrder = this.setOrder.bind(this);
        this.state = {
            order: 'a-z'
        }
    }

    onAdd(film) {
        this.props.onAdd(film);
    }

    onDelete(id) {
        this.props.onDelete(id);
    }

    handleChange(e) {
        if (e.target.name == 'file') {
            let data = new FormData();
            data.append('file', e.target.files[0]);
            this.props.onImport(data);
        } 
    }

    setOrder(order) {
        this.setState({order: order});
        this.props.setOrder(order);
    }

    render() {
        const numbers = this.props.films;
        let filmList = '';
        let order = (this.state.order === 'a-z') ? 'z-a' : 'a-z';

        if (numbers) {
            filmList = numbers.map((film, i) =>
                <Film key={i} onDelete={this.onDelete} film={film} />
            );
        }
       
        return (
            <div className=""> 
                <div className="row align-items-center justify-content-start films-btns">
                    <div className="col-sm-auto">
                        <Button onClick={() => this.setOrder(order)} color="primary">{order}</Button>
                    </div>
                    <div className="col-sm-auto">
                        <AddFilm onAdd={this.onAdd} />
                    </div>
                    <form className="col-sm-auto" encType="multipart/form-data">
                        <Input type="file" name="file" onChange={this.handleChange} />
                    </form>
                </div>
                <div>{filmList}</div>
            </div>
        )
    }
}

export default Films;