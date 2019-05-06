const mongoose = require('mongoose');
const shortid = require('shortid');

const schemaOptions = {
  timestamps: true,
};

const formSchema = new mongoose.Schema({
  id: String,
  name: String,
  data: String,
}, schemaOptions);

formSchema.pre('save', function (next) {
  const form = this;

  if (!form.id) {
    form.id = shortid.generate();
  }
});

const form = mongoose.model('Form', formSchema);

module.exports = form;
