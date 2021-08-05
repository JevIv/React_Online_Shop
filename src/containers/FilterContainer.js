import { connect } from "react-redux";
import * as filterActions from "../actions/filter-action";
import { bindActionCreators } from "redux";
import Filter from '../components/Filter';


const mapStateToProps = ({ books, filter }) => ({
    filterBy: filter.filterBy
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(filterActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);