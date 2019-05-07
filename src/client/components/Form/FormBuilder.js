import React from 'react';
import { ReactFormBuilder } from 'react-form-builder2';

const FormBuilder = () => (
  <ReactFormBuilder
    saveUrl='http://localhost:3000/api/form' 
  />
);

export default FormBuilder;
