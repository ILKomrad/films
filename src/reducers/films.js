export default function films(state = [], action) {
    switch (action.type) {
        case 'getFilms': 
            return action.films;
        
        case 'importFilms':
            return action.films;
        
        case 'addFilm':
            const film = action.film;
            return Object.assign({}, state, {
                films: [
                    ...state.films,
                    {
                        id: action.id,
                        'title' : film['title'],
                        'release year' : film['release Year'],
                        'format' : film['format'],
                        'stars' : film['stars'],
                    }
                ]
            })
        
        case 'deleteFilm':
            const index = state.films.findIndex(f => f.id === action.id);
            const films = [
                ...state.films.slice(0, index),
                ...state.films.slice(index + 1)
            ];
            return Object.assign({}, state, {films});
            
        default:
            return state;
    }
}