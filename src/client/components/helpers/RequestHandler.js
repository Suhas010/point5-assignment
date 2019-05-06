/* eslint-disable no-undef */
import { showFailureNotification, showWarningNotification } from '../reusable/Notifications';
import { getItem, setItem } from './localStorage';
import routes from '../../utils/routes';
const BASE_URL = 'http://localhost:3000/api/'
export default class RequestHandler {
  // returns header object
  static getHeader(type, data = {}, isFile = false) {
    const header = {
      method: type,
      headers: {
        Accept: 'application/vnd.questionbank.v1',
        'Content-Type': 'application/json',
        // Authorization: getItem('token'),
      },
    };
    if (!isFile) {
      header.headers['Content-Type'] = 'application/json';
    }
    if (type !== 'get') {
      if (isFile) {
        header.body = data;
      } else {
        header.body = JSON.stringify(data);
      }
    }
    return header;
  }

  static isSuccess(payload, status) {
    if (status === 401) {
      showWarningNotification('Unauthorised access.');
      setItem('token', '');
      window.location.href = routes.root;
    }
    if (!(status === 200 || status === 201)) {
      showFailureNotification(payload.message);
      throw Error(payload);
    }
    return payload;
  }

  // HTTP Method get
  static get(action, params = '') {
    return new Promise((resolve, reject) => {
      fetch(`${BASE_URL}${action}${params}`, RequestHandler.getHeader('get'))
        .then(response => ({ promise: response.json(), status: response.status }))
        .then(({ promise, status }) => {
          promise.then((payload) => {
            resolve(RequestHandler.isSuccess(payload, status));
          })
            .catch((innerError) => {
              reject(innerError);
            });
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  }

  // HTTP Method post
  static post(action, data, isFile = false) {
    return new Promise((resolve, reject) => {
      fetch(`${BASE_URL}${action}`, RequestHandler.getHeader('post', data, isFile))
        .then(response => ({ promise: response.json(), status: response.status }))
        .then(({ promise, status }) => {
          promise.then((payload) => {
            resolve(RequestHandler.isSuccess(payload, status));
          })
            .catch((innerError) => {
              reject(innerError);
            });
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  }

  // HTTP Method put
  static put(action, data, isFile = false) {
    return new Promise((resolve, reject) => {
      fetch(`${BASE_URL}${action}`, RequestHandler.getHeader('put', data, isFile))
        .then(response => ({ promise: response.json(), status: response.status }))
        .then(({ promise, status }) => {
          promise.then((payload) => {
            resolve(RequestHandler.isSuccess(payload, status));
          })
            .catch((innerError) => {
              reject(innerError);
            });
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  }

  // HTTP Method delete
  static delete(action) {
    return new Promise((resolve, reject) => {
      fetch(`${BASE_URL}${action}`, RequestHandler.getHeader('delete', {}))
        .then(response => ({ promise: response.json(), status: response.status }))
        .then(({ promise, status }) => {
          promise.then((payload) => {
            resolve(RequestHandler.isSuccess(payload, status));
          })
            .catch((innerError) => {
              reject(innerError);
            });
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  }
}
