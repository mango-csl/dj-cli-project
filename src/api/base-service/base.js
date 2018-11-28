// import axios from 'axios';
import { Message } from 'element-ui';

export default function basePost(url, value) {
  let base = '/djwmsservice';
  let service = base + url;
  return axios.post(service, value).catch(err => {
    Message.error(err.message);
  });
}
