import RequestHandler from '../../components/helpers/RequestHandler';

// get list of users
export function getFormsAPI() {
  return RequestHandler.get('forms');
}

// get user
export function getUser(id) {
  return RequestHandler.get(`/target_groups/${id}`);
}

// save new user
export function saveUser(payload) {
  return RequestHandler.post('/target_groups', payload);
}

