import React, { Component } from 'react';
import { Skeleton, Empty, Icon, Tooltip } from 'antd';
import FromBuilder from './FormBuilder';
import { getFormsAPI, saveFormNameAPI } from '../../actions/appActions/FormActions';
import QuestionName from './Model';

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingForm: false,
      addUpdateForm: false,
      name: '',
      formList: ['Contact us', 'General', 'Contact us', 'General', 'Contact us', 'General'],
    };
  }

  componentDidMount() {
    this.getFormList();
  }

  getFormList = () => {
    this.setLoader('loadingForm', true);
    getFormsAPI()
      .then((formList) => {
        this.setLoader('loadingForm', false);
        this.setState({
          formList,
        });
      })
      .catch((error) => {
        this.setLoader('loadingForm', false);
        console.log(error);
      });
  }

  saveFormName = (name) => {
    saveFormNameAPI(name)
      .then((data) => {
        console.log(data);
      }).catch((error) => {
        console.log(error);
      });
  }

  setLoader = (loader, state) => {
    this.setState({
      [loader]: state,
    });
  }

  getForm  = () => (
    <>
      <Tooltip title="close">
        <div className="add-button" onClick={() => this.setState({ addUpdateForm: false, showModal: false })}><Icon type="close" /></div>
      </Tooltip>
      <div className="form-name">
        Form Name: {this.state.name}
      </div>
      <FromBuilder />
    </>
  );

  getFormList = () => {
    const { formList } = this.state;
    if (!formList || formList.length === 0) {
      return <Empty description="no forms has been created." />
    }
    return formList.map((form, index) => (
      <div className="form" onClick={() => this.setState({ addUpdateForm: true })} style={{ background: index%2===0 ? 'aliceblue' : '' }}>
        <span>{form}</span>
        <span><Icon type="edit" /></span>
      </div>
    ));
  }

  getAddFormButton = () => (
    <Tooltip title="Create new From">
      <div className="add-button"><Icon type="plus" onClick={() => this.setState({ showModal: true })} /></div>
    </Tooltip>
  )

  handleOk = (name) => {
    this.saveFormName(name);
  }

  getModal = () => {
    return (
      <QuestionName
        onCancel={() => this.setState({ showModal: false })}
        onOk={this.handleOk}
      />
    );
  }

  render() {
    const { loadingForm, addUpdateForm, showModal } = this.state;
    return (
      <>
        {loadingForm && <Skeleton active paragraph={2} />}
        {showModal && this.getModal()}
        {addUpdateForm && this.getForm()}
        {!addUpdateForm && this.getAddFormButton()}
        {!addUpdateForm && (
          <div className="form-list">
            <div className="header">Form List</div>
            {this.getFormList()}
          </div>
        )}
      </>
    );
  }
}

export default FormContainer;
