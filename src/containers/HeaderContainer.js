import { connect } from 'react-redux';
import Header from '../components/Header';
import { onSearch } from '../actions';

function mapDispatchToProps(dispatch) {
    return {
        onSearch: (searchBy, q) => dispatch(onSearch(searchBy, q))
    }
}

const HeaderContainer = connect(null, mapDispatchToProps)(Header);
export default HeaderContainer;