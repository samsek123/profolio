import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { BrowserRouter, Route } from "react-router-dom";

import { withStyles } from '@material-ui/core/styles';

import { styles } from './style';

import TopNav from '../Components/NavBar/TopNav';
import Footer from '../Components/NavBar/Footer';

import Home from '../View/Home';
import MyWorks from '../View/MyWorks';
import MyWorksDetail from '../View/MyWorksDetail';

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
            <Route path="/myworks" exact component={MyWorks} />
            <Route path="/myworks/1" exact component={MyWorksDetail} />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  };
}

Router.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Router);
