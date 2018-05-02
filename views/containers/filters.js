import { connect } from 'react-redux';
import Filters, { setFilters } from '@ukhomeoffice/asl-components/components/filters';

const mapStateToProps = ({ filters, list: { schema }}) => ({
  schema,
  filters
});

const mapDispatchToProps = dispatch => ({
  onChange: filters => dispatch(setFilters(filters))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);
