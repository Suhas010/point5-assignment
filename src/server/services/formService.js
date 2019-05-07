const Form = require('../models/formModel');

function getForms(payload) {
  return new Promise((resolve, reject) => {
    Form.find().exec((error, forms) => {
      if (!error) {
        console.log(forms, "$$$");
        resolve(forms);
        return 0;
      }
      reject(error);
    });
  });
}

function saveForm(payload) {
  // console.log(payload);
  // const form = new Form(payload);
  // console.log(typeof form.save());
  // return form.save();
  return new Promise(async (resolve, reject) => {
    const form = new Form(payload);
    form.save(function(error) {
      if (error) {
        reject(error);
        return 0;
      }
      resolve(form);
    });
  });
}

module.exports = { getForms, saveForm };