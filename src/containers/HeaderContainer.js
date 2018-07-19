import { connect } from 'react-redux';
import Header from '../components/Header';
import React from 'react';
import { importFilms, onSearch } from '../actions';

function mapStateToProps(state) {
    return {
        films: state.films.films
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSearch: (searchBy, q) => dispatch(onSearch(searchBy, q))
    }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);
export default HeaderContainer;