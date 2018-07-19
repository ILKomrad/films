export default function visibilityFilter(state = 'a-z', action) {
    switch (action.type) {
        case 'setOrder':
            return action.order;

        default:
            return state;
    }
}