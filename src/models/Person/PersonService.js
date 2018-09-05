import httpService from '../../services/HttpService';

class PersonService {

  find() {
    return httpService.get('../../../static/person.json').then(({ data }) => data);
  }
}

export default new PersonService()