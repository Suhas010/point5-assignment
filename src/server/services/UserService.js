const User = require('../models/UserModel');

export function SaveUser(payload) {
  return new Promise((resolve, reject) => {
    const user = new User(payload);
    user.save((error, newUser) => {
      if (!error) {
        resolve(newUser);
        return 0;
      }
      reject(error);
      return 0;
    });
  });
}

export function updateUser(payload) {
  return new Promise((resolve, reject) => {
    const user = new User(payload);
    user.save((error, newUser) => {
      if (!error) {
        resolve(newUser);
        return 0;
      }
      reject(error);
      return 0;
    });
  });
}
