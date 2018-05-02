import React, { Fragment, Component } from 'react';
import DataTable from '../containers/datatable';
import Filters from '../containers/filters';
import ExportLink from '../containers/export-link';

export default class FilterTable extends Component {
  render() {
    return (
      <Fragment>
        <Filters />
        <DataTable formatters={ this.props.formatters } />
        <ExportLink />
      </Fragment>
    )
  }
}
