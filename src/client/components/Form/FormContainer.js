import React, { Component } from 'react';
import FormBuilder from 'react-form-builder2';
import { getFormsAPI } from '../../actions/appActions/FormActions';
class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingForm: false,
      formList: [],
    };
  }

  componentDidMount() {
    this.getFormList();
  }

  getFormList = () => {
    this.setLoader('loadingFomr', true);
    getFormsAPI()
    .then(data => {
      console.log(data);
    })
    .catch(error => {
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
      <FormBuilder.ReactFormBuilder
        saveUrl='http://localhost:3000/api/forms'
      />
    );
  }

  render() {
      return (
        <>
        {this.getForm()}
        </>
      )
  }
}

export default FormContainer;