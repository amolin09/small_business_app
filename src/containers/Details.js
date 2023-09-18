import { connect } from 'react-redux';
import BusinessDetails from '../components/Details';

const mapStateToProps = (state) => {
	return {
		listings: state.listings,
	};
};

export default connect(mapStateToProps)(BusinessDetails);