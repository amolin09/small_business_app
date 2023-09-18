import { connect } from 'react-redux';
import NavBar from '../components/NavBar.jsx';

const mapStateToProps = (state) => {
	return {
		user: state.user,
	};
};

export default connect(mapStateToProps)(NavBar);