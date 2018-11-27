import manageService from '../base-service/manage';

export default {
  getMessage(value) {
    return manageService('/getmessage', value);
  },
  getUserName(value) {
    return manageService('/getusername', value);
  },
  getCode(value) {
    return manageService('/getcode', value);
  }
};
