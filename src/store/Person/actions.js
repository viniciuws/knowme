import * as Mutations from '../mutations';
import PersonService from '../../models/Person/PersonService';

export default {
  setPerson({ commit }) {
    PersonService.find().then(({ data }) => {
      commit(Mutations.SET_PERSON, data);
    });
  },
};
