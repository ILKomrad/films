import { connect } from 'react-redux';
import Films from '../components/Films';
import { addFilm, deleteFilm, importFilms, setOrder } from '../actions';

function orderByTitle(todos, order) {
    if (todos) {
        if (order === 'a-z') {
            todos.sort((a, b) => {
                return (a['title'].trim().toLowerCase() > b['title'].trim().toLowerCase()) ? 1 : -1;
            })   
        } else if (order === 'z-a') {
            todos.sort((a, b) => {
                return (a['title'].trim().toLowerCase() > b['title'].trim().toLowerCase()) ? -1 : 1;
            })
        }
    }

    return todos;
}

function mapStateToProps(state) {
    return {
        films: orderByTitle(state.films.films, state.filter),
        filter: state.filter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onAdd: film => dispatch(addFilm(film)),
        onDelete: id => dispatch(deleteFilm(id)),
        onImport: file => dispatch(importFilms(file)),
        setOrder: order => dispatch(setOrder(order))
    }
}

const FilmsContainer = connect(mapStateToProps, mapDispatchToProps)(Films);
export default FilmsContainer;