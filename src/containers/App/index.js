import React from 'react';
import PropTypes from 'prop-types';
import IndexLink from 'react-router/lib/IndexLink';

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import classNames from 'classnames';

import { createMuiTheme } from 'material-ui/styles';
import blue from "material-ui/colors/blue"

import {bindActionCreators} from "redux";
import {apiGetFilters, apiGetPrimaries} from "../../redux/reducers/api/api.store";
import Head from "../menues/Head/index";
import {connect} from "react-redux";
import Header from "../menues/Header/index";
import DriftMenu from "../menues/DriftMenu/index";
import {withStyles} from "material-ui";
import CartMenu from "../menues/CartMenu/index";

const theme = createMuiTheme({

});
const drawerWidth = 240;
const styles = theme => ({
  appBar: {
    position: 'absolute',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'appBarShift-left': {
    marginLeft: drawerWidth,
  },
  content: {
    marginTop: '64px',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'contentShift-left': {
    marginLeft: drawerWidth,
  }
});

class App extends React.Component {

  componentDidMount() {
    this.props.getPrimaries();
    this.props.getFilters();
  }

  toggleDrift = () => {
    this.setState({
      driftOpen: !this.state.driftOpen
    })
  };

  toggleCart = () => {
    this.setState({
      cartOpen: !this.state.cartOpen
    })
  };

  state = {
    driftOpen: true,
    cartOpen: false
  };

  render() {
    const {children, classes, theme} = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <Head />
          <Header className={classNames(
            classes.appBar, {
              [classes.appBarShift]: this.state.driftOpen,
              [classes[`appBarShift-left`]]: this.state.driftOpen,
            }
          )} open={this.state.driftOpen} toggleDrift={this.toggleDrift} toggleCart={this.toggleCart} />
          <DriftMenu toggleDrift={this.toggleDrift} open={this.state.driftOpen}/>

          <main className={classNames(classes.content, {
            [classes.contentShift]: this.state.driftOpen,
            [classes[`contentShift-left`]]: this.state.driftOpen
          })}>
            {children}
          </main>

          <CartMenu toggleCart={this.toggleCart} open={this.state.cartOpen}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    getPrimaries: bindActionCreators(apiGetPrimaries, dispatch),
    getFilters: bindActionCreators(apiGetFilters, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles, {withTheme: true})(App)
);
