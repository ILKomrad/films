import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Header.css';
import { Button, Input, FormGroup, Label } from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            searchBy: 'title'
        }
    }

    handleChange(e) {
        if (e.target.name === 'q') {
            let val = e.target.value.trim();
            this.props.onSearch(this.state.searchBy, val);
        } else if (e.target.name === 'searchBy') {
            this.setState({
                searchBy: e.target.value
            });
        }
    }

    onSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div className="justify-content-center"> 
                <form onSubmit={this.onSubmit} className="header-form">
                    <div className="row align-items-center">
                        <p className="col-md-auto">Search by:</p>
                        <FormGroup check className="col-md-auto">
                            <Label check>
                                <Input type="radio" defaultChecked={this.state.searchBy === 'title'} name="searchBy" value="title" onChange={this.handleChange} />{' '}
                                Title
                            </Label>
                        </FormGroup>
                        <FormGroup check className="col-md-auto">
                            <Label check>
                                <Input type="radio" defaultChecked={this.state.searchBy === 'stars'} name="searchBy" value="stars"  onChange={this.handleChange} />{' '}
                                Actor
                            </Label>
                        </FormGroup>
                    </div>
                    <div className="header-form__search">
                        <Input type="text" autoComplete="off" name="q" onChange={this.handleChange} />
                        <Button type="submit" color="primary">Search</Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Header;