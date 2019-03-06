import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

// i18n
import { withNamespaces } from 'react-i18next';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Material UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

// Material Icon
import AddCircleIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import SortIcon from '@material-ui/icons/SortOutlined';
import LabelIcon from '@material-ui/icons/LabelOutlined';

// SubComponent
import Button from '../../../../Components/Form/Button';
import IconTextInput from '../../../../Components/Form/IconTextInput';
import IconControl from '../../../../Components/IconControl';

// Config File
import { categoryMapper } from '../../../../GlobalUtils/mapper';

// Image
import logoLong from'../../../../Assets/Image/logo_long.png';

// Style
import { styles } from './style';

// Redux action
import { collapseMenu } from '../../../../Reducers/NavBar/action';
import { openPopUp } from '../../../../Reducers/PopUp/action';

// Redux Connect
function mapDispatchToProps(dispatch) {
  return ({
    openPopUp: bindActionCreators(openPopUp, dispatch),
    collapseMenu: bindActionCreators(collapseMenu, dispatch),
  });
}

function mapStateToProps(state) {
  return ({});
}

class HotTopicNavBar extends Component<Props> {
  constructor() {
    super();
    this.state = {
      searchValue: '',
      anchorElSort: null,
      anchorElTag: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.chooseSort = this.chooseSort.bind(this);
    this.sortClick = this.sortClick.bind(this);
    this.chooseTag = this.chooseTag.bind(this);
    this.tagClick = this.tagClick.bind(this);
    this.addTopic = this.addTopic.bind(this);
  }

  chooseSort(sortValue) {
    this.setState({ anchorElSort: null });
  }

  sortClick(event) {
    if (event) {
      this.setState({ anchorElSort: event.currentTarget });
    } else {
      this.setState({ anchorElSort: null });
    }
  }

  chooseTag(sortValue) {
    this.setState({ anchorElTag: null });
  }

  tagClick(event) {
    if (event) {
      this.setState({ anchorElTag: event.currentTarget });
    } else {
      this.setState({ anchorElTag: null });
    }
  }

  handleChange(type, value) {
    this.setState({ [type]: value });
  }

  addTopic() {
    const { openPopUp } = this.props;
    openPopUp('openAddTopic');
  }

  render() {
    const { classes, collapseMenu, t } = this.props;
    const { searchValue, anchorElSort, anchorElTag } = this.state;
    return (
      <div>
        <AppBar className={classes.hotTopicNavBarWrapper} position="static" color="default">
          <Toolbar>
            <IconButton
              className={classes.companyLogoWrapper}
              color="inherit"
              disableRipple
              onClick={(event) => collapseMenu()}
            >
              <img className={classes.companyLogoImg} src={logoLong} alt="Logo" />
            </IconButton>
            <div className={classes.grow}>
              <Button
                className={classNames(classes.buttonSet, classes.responsiveDisappear)}
                iconSet={<AddCircleIcon />}
                content={t('component.page.hotTopic.hotTopicNavBar.addTopicButton')}
                onClick={() => this.addTopic()}
              />
              <Button
                className={classNames(classes.buttonSet, classes.responsiveDisappear)}
                iconSet={<SortIcon />}
                type="secondary"
                content={t('component.page.hotTopic.hotTopicNavBar.sortTopicButton')}
                aria-owns={anchorElSort ? 'simple-menu-4' : undefined}
                aria-haspopup="true"
                onClick={(event) => this.sortClick(event)}
              />
              <Button
                className={classNames(classes.buttonSet, classes.responsiveDisappear)}
                iconSet={<LabelIcon />}
                type="secondary"
                content={t('component.page.hotTopic.hotTopicNavBar.tagFilterButton')}
                aria-owns={anchorElTag ? 'simple-menu-5' : undefined}
                aria-haspopup="true"
                onClick={(event) => this.tagClick(event)}
              />
            </div>
            <IconButton
              className={classNames(classes.menuButton, classes.responsiveAppear)}
              color="inherit"
              disableRipple
              onClick={() => this.addTopic()}
            >
              <AddCircleIcon />
            </IconButton>
            <div className={classNames(classes.hotTopicNavBarSearchWrapper, classes.responsiveDisappear)}>
              <IconTextInput
                placeholder={t('component.page.hotTopic.hotTopicNavBar.searchButton')}
                type="search"
                value={searchValue}
                onChange={(value) => this.handleChange('searchValue', value)}
              />
            </div>
          </Toolbar>
        </AppBar>
        <Menu
          id="simple-menu-4"
          anchorEl={anchorElSort}
          open={Boolean(anchorElSort)}
          onClose={() => this.sortClick(null)}
        >
          <MenuItem
            className={classes.menuItem}
            disableRipple
            onClick={() => this.chooseSort('default')}
          >{t('component.page.hotTopic.hotTopicNavBar.sortOption.default')}</MenuItem>
          <MenuItem
            className={classes.menuItem}
            disableRipple
            onClick={() => this.chooseSort('hot')}
          >{t('component.page.hotTopic.hotTopicNavBar.sortOption.hot')}
          </MenuItem>
          <MenuItem
            disableRipple
            className={classes.menuItem}
            onClick={() => this.chooseSort('new')}
          >{t('component.page.hotTopic.hotTopicNavBar.sortOption.newToOld')}
          </MenuItem>
          <MenuItem
            disableRipple
            className={classes.menuItem}
            onClick={() => this.chooseSort('createTimeNew')}
          >{t('component.page.hotTopic.hotTopicNavBar.sortOption.createNewToOld')}
          </MenuItem>
          <MenuItem
            disableRipple
            className={classes.menuItem}
            onClick={() => this.chooseSort('createTimeOld')}
          >{t('component.page.hotTopic.hotTopicNavBar.sortOption.createOldToNew')}
          </MenuItem>
        </Menu>
        <Menu
          id="simple-menu-5"
          anchorEl={anchorElTag}
          open={Boolean(anchorElTag)}
          onClose={() => this.tagClick(null)}
        >
          <MenuItem
            className={classes.menuItem}
            disableRipple
            onClick={() => this.chooseTag('dafault')}
          >{t('component.page.hotTopic.hotTopicNavBar.filterOption.default')}</MenuItem>
          <MenuItem
            className={classes.menuItem}
            disableRipple
            onClick={() => this.chooseTag('travel')}
          ><IconControl categoryId="travel" className={classes.categoryIcon} />{categoryMapper['travel']}
          </MenuItem>
          <MenuItem
            disableRipple
            className={classes.menuItem}
            onClick={() => this.chooseTag('music')}
          ><IconControl categoryId="music" className={classes.categoryIcon} />{categoryMapper['music']}
          </MenuItem>
        </Menu>
      </div>
    )
  }
}

HotTopicNavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  // Redux
  collapseMenu: PropTypes.func.isRequired,
  openPopUp: PropTypes.func.isRequired,
  // i18n
  t: PropTypes.func.isRequired,
}

export default withNamespaces('translation')(withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(HotTopicNavBar)));
