import BaseModel from '../BaseModel';

export default class FormModel extends BaseModel {
  static resource = 'form';
  constructor(properties) {
    super(properties);
  }
}
