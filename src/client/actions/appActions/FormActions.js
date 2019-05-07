import RequestHandler from '../../components/helpers/RequestHandler';

// get list of users
export function getFormsAPI() {
  return RequestHandler.get('forms');
}


// save new user
export function saveFormNameAPI(payload) {
  return RequestHandler.post('/forms', payload);
}
