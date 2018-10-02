import * as Mutations from '../mutations';
import PersonService from '../../models/Person/PersonService';

export default {
  setPerson({ commit }, person) {
    PersonService.find().then(({ data }) => {
      commit(Mutations.SET_PERSON, data[person]);
    });
  },
};
