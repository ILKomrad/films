import axios from 'axios';

export function getFilms() {
    return axios.get('/getList')
                .then(res => res.data)
                .then(films => {
                    return {
                        type: 'getFilms',
                        films: films.films
                    }
                })
}

export function onSearch(searchBy, q) {
    return axios.get('/search', {
                    params: {searchBy, q}
                })
                .then(res => res.data)
                .then(films => {
                    return {
                        type: 'getFilms',
                        films: films.films
                    }
                })
}

export function importFilms(data) {
    return axios.post('/uploadFile', data)
                .then(res => res.data)
                .then(films => {
                    return {
                        type: 'importFilms',
                        films: films.films
                    }
                })
}

export function addFilm(film) {
    return axios.post('/addItem', {item: film})
                .then(res => {
                    return res.data;
                })
                .then(data => ({
                    type: 'addFilm',
                    id: data.id,
                    film
                }))
}

export function deleteFilm(id) {
    return axios.delete('/deleteItem', {params: {id: id}})
                .then(res => res.data)
                .then(todos => ({
                    type: 'deleteFilm',
                    id: id
                }));
}

export function setOrder(order) {
    return {
        type: 'setOrder',
        order
    }
}