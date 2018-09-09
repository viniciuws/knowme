import httpService from '../../services/HttpService';

export default {

  find() {
    return httpService.get('/static/skills.json');
  },
};
