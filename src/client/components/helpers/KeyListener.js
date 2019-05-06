/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class KeyListener extends Component {

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.key.toUpperCase() === 'N' && event.altKey) {
      this.props.onNew();
    }
    if (event.key === 'Escape') {
      this.props.onCancel();
    }
  }

  render() {
    return (
      <>
        {this.props.children}
      </>
    );
  }
}

KeyListener.propTypes = {
  onNew: PropTypes.func,
  onCancel: PropTypes.func,
  children: PropTypes.node.isRequired,
};

KeyListener.defaultProps = {
  onNew: () => {},
  onCancel: () => {},
};

export default KeyListener;
