import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { sampleAction } from '../../Reducers/Sample/action';

function mapDispatchToProps(dispatch) {
  return ({
    sampleAction: bindActionCreators(sampleAction, dispatch),
  });
}

function mapStateToProps(state) {
  return ({ sample: state.sample });
}

class Sample extends Component<Props> {
  constructor() {
    super();
    this.state = {
    };
  }

  componentWillReceiveProps(nextProps) {

  }


  render() {
    return (
      <div>
        Sample Page
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sample);
