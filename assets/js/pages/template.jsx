const React = require('react');
const { render } = require('react-dom');
const { Provider } = require('react-redux');
const qs = require('qs');
const url = require('url');
const Component = require('../../../views/containers/{{page}}');
const createStore = require('../../../src/create-store');

const initialFilters = url.parse(window.location.href).query;;

const store = createStore(window.INITIAL_STATE, qs.parse(initialFilters));

store.subscribe(() => {
  const filters = store.getState().filters;
  if (!filters.textFilter) {
    delete filters.textFilter;
  }
  const location = url.parse(window.location.href);
  location.search = qs.stringify(filters);
  window.history.replaceState(undefined, undefined, location.format());
});

render(
  <Provider store={store}>
    <Component />
  </Provider>
  , document.getElementById('page-component')
);
