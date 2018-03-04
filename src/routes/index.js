import React from 'react';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';
import App from '../containers/App';

// Webpack 2 supports ES2015 `import` by auto-
// chunking assets. Check out the following for more:
// https://gist.github.com/sokra/27b24881210b56bbaff7#code-splitting-with-es6

const importHome = (nextState, cb) => {
  import(/* webpackChunkName: "home" */ '../containers/Home')
    .then(module => cb(null, module.default))
    .catch(e => {
      throw e;
    });
};

const importTools = (nextState, cb) => {
  import(/* webpackChunkName: "tools" */ '../containers/Tools')
    .then(module => cb(null, module.default))
    .catch(e => {
      throw e;
    });
};

const importFilter = (nextState, cb) => {
  import(/* webpackChunkName: "filter" */ '../containers/Filter')
    .then(module => cb(null, module.default))
    .catch(e => {
      throw e;
    });
};

const importList = (nextState, cb) => {
  import(/* webpackChunkName: "list" */ '../containers/List')
    .then(module => cb(null, module.default))
    .catch(e => {
      throw e;
    });
};


const importDetails = (nextState, cb) => {
  import(/* webpackChunkName: "details" */ '../containers/Details')
    .then(module => cb(null, module.default))
    .catch(e => {
      throw e;
    });
};

const importAddons = (nextState, cb) => {
  import(/* webpackChunkName: "addons" */ '../containers/Addons')
    .then(module => cb(null, module.default))
    .catch(e => {
      throw e;
    });
};

const importRedux = (nextState, cb) => {
  import(/* webpackChunkName: "redux" */ '../containers/Redux')
    .then(module => cb(null, module.default))
    .catch(e => {
      throw e;
    });
};

const importStore = (nextState, cb) => {
  import (/* webpackChunkName: "store" */ '../containers/Store')
    .then(module => cb(null, module.default))
    .catch(e => {
      throw e
    });
};

const importNotFound = (nextState, cb) => {
  import(/* webpackChunkName: "notfound" */ '../containers/NotFound')
    .then(module => cb(null, module.default))
    .catch(e => {
      throw e;
    });
};

// We use `getComponent` to dynamically load routes.
// https://github.com/reactjs/react-router/blob/master/docs/guides/DynamicRouting.md
const routes = (
  <Route path="/" component={App}>
    <IndexRoute getComponent={importHome} />
    <Route path="tools" getComponent={importTools} />
    <Route path="redux" getComponent={importRedux} />
    <Route path="addons" getComponent={importAddons} />
    <Route path="store" getComponent={importStore} >
      <Route path="filter" getComponent={importFilter} />
      <Route path="list" getComponent={importList} />
      <Route path="details" getComponent={importDetails} />
    </Route>
    <Route path="*" getComponent={importNotFound} status={404} />
  </Route>
);

// Unfortunately, HMR breaks when we dynamically resolve
// routes so we need to require them here as a workaround.
// https://github.com/gaearon/react-hot-loader/issues/288

/* istanbul ignore if */
if (module.hot) {
  require('../containers/Filter');
  require('../containers/Home'); // eslint-disable-line global-require
  require('../containers/Tools'); // eslint-disable-line global-require
  require('../containers/Redux'); // eslint-disable-line global-require
  require('../containers/Addons'); // eslint-disable-line global-require
  require('../containers/Store');
  require('../containers/Details');
  require('../containers/NotFound'); // eslint-disable-line global-require
}

export default routes;
