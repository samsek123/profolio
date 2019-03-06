import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { BrowserRouter, Route } from "react-router-dom";

import { withStyles } from '@material-ui/core/styles';

import { styles } from './style';

import TopNav from '../Components/NavBar/TopNav';

import Home from '../View/Home';

class Router extends Component<Props> {
  static defaultProps = {

  };

  render() {
    const { classes } = this.props;
    return (
      <BrowserRouter>
        <div>
          <TopNav />
          <div className={classes.mainWrapper}>
            <Route path="/" exact component={Home} />
          </div>
        </div>
      </BrowserRouter>
    );
  };
}

Router.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Router);
