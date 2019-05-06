import React, { Component } from 'react';
import FormBuilder from 'react-form-builder2';

class FormContainer extends Component {
  render() {
    return(
      <FormBuilder.ReactFormBuilder
      url='/api/formdata'
      saveUrl='/api/formdata'
      />
    );
  }
}

export default FormContainer;