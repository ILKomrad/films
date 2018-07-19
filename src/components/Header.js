import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Header.css';
import { Button, Input, FormGroup, Label } from 'reactstrap';
import axios from 'axios';

class Header extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            searchBy: 'Title'
        }
    }

    handleChange(e) {
        if (e.target.name == 'q') {
            let val = e.target.value.trim();
            this.props.onSearch(this.state.searchBy, val);
        } else if (e.target.name === 'searchBy') {
            this.setState({
                searchBy: e.target.value
            });
        }
    }

    render() {
        return (
            <div className="justify-content-center"> 
                <form className="header-form">
                    <div className="row align-items-center">
                        <p className="col-md-auto">Search by:</p>
                        <FormGroup check className="col-md-auto">
                            <Label check>
                                <Input type="radio" defaultChecked={this.state.searchBy === 'Title'} name="searchBy" value="Title" onChange={this.handleChange} />{' '}
                                Title
                            </Label>
                        </FormGroup>
                        <FormGroup check className="col-md-auto">
                            <Label check>
                                <Input type="radio" defaultChecked={this.state.searchBy === 'Stars'} name="searchBy" value="Stars"  onChange={this.handleChange} />{' '}
                                Actor
                            </Label>
                        </FormGroup>
                    </div>
                    <div className="header-form__search">
                        <Input type="text" autoComplete="off" name="q" onChange={this.handleChange} />
                        <Button color="primary">Search</Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Header;