import basePost from './base';

export default function manageService(url, value) {
  let base = '/manage';
  let service = base + url;
  return basePost(service, value);
}
