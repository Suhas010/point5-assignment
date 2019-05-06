const mongoose = require('mongoose');
const shortid = require('shortid');

const schemaOptions = {
  timestamps: true,
};

const userSchema = new mongoose.Schema({
  id: String,
  name: String,
}, schemaOptions);

userSchema.pre('save', function (next) {
  const user = this;

  if (!user.id) {
    user.id = shortid.generate();
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
