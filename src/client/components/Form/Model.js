import React from 'react';

import { Modal, Button, Input } from 'antd';

class QuestionName extends React.Component {
  state = { 
    visible: true,
    name: ''
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleChange = ({ target }) => {
    this.setState({
      name: target.value
    });
  }

  handleOk = (e) => {
    this.setState({
      visible: false,
    });
    if (this.state.name) {
      this.props.onOk(this.state.name);
    }
  }

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
    this.props.onCancel();
  }

  render() {
    return (
      <div>
        <Modal
          title="Enter Form Name"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Input
            placeholder="name..."
            onChange={this.handleChange}
            value={this.state.name}
          />
        </Modal>
      </div>
    );
  }
}

export default QuestionName;