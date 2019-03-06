import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { BrowserRouter, Route } from "react-router-dom";

import { withStyles } from '@material-ui/core/styles';

import { styles } from './style';

import LeftNav from '../Components/NavBar/LeftNav';
import PopUp from '../Components/PopUp';

import Home from '../View/Home';
import GroupChat from '../View/GroupChat';
import HotTopic from '../View/HotTopic';
import NotFound from '../View/NotFound';

class Router extends Component<Props> {
  static defaultProps = {

  };

  render() {
    const { classes } = this.props;
    return (
      <BrowserRouter>
        <div className={classes.mainWrapper}>
          <PopUp />
          <LeftNav />
          <div className={classes.rightWrapper}>
            <Route path="/groupchat" exact component={GroupChat} />
            <Route path="/hottopic" exact component={HotTopic} />
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
