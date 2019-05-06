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
  console.log(payload);
  const form = new Form(payload);
  console.log(typeof form.save());
  // return form.save();
  return new Promise(async (resolve, reject) => {
    const form = new Form(payload);
    form.save(function(error, newForm) {
      console.log('Error:', error, '\nnewForm:', newForm);
    });
  });
}

module.exports = { getForms, saveForm };