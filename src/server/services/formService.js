const Form = require('../models/formModel');

function getForms(payload) {
  return new Promise((resolve, reject) => {
    Form.find().exec((error, forms) => {
      if (!error) {
        resolve(forms);
        return 0;
      }
      reject(error);
    });
  });
}

function saveForm(payload) {
  return new Promise((resolve, reject) => {
    const form = new Form(payload);
    form.save((error, newFrom) => {
      if (!error) {
        resolve(newFrom);
        return 0;
      }
      reject(error);
      return 0;
    });
  });
}

module.exports = { getForms, saveForm };