import React, { Component } from 'react';
import FormBuilder from 'react-form-builder2';
import { getFormsAPI } from '../../actions/appActions/FormActions';
import { Skeleton, Empty, Icon, Tooltip } from 'antd';
class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingForm: false,
      addUpdateForm: false,
      formList: ["suhas", "Asdad"],
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

  setLoader = (loader, state) => {
    this.setState({
      [loader]: state,
    });
  }

  getForm  = () => {
    return (
      <>
        <div className="add-button" onClick={() => this.setState({ addUpdateForm: false })}><Icon type="close" /></div>
        <FormBuilder.ReactFormBuilder
          saveUrl='http://localhost:3000/api/forms'
        />
      </>
    );
  }

  getFormList = () => {
    const { formList } = this.state;
    if (!formList || formList.length === 0) {
      return <Empty description="no forms has been created." />
    }
    return formList.map(form => (
      <div className="form">
        <span>{form}</span>
        <span><Icon type="edit" /></span>
      </div>
    ));
  }

  getAddFormButton = () => (
    <Tooltip title="Create new From">
      <div className="add-button"><Icon type="plus" onClick={() => this.setState({ addUpdateForm: true })} /></div>
    </Tooltip>
  )

  render() {
    const { loadingForm, addUpdateForm } = this.state;
    return (
      <>
        {loadingForm && <Skeleton active paragraph={2} />}
        {addUpdateForm && this.getForm()}
        {!addUpdateForm && this.getAddFormButton()}
        <div className="form-list">
          Form List
          {!addUpdateForm && this.getFormList()}
        </div>
      </>
    );
  }
}

export default FormContainer;
