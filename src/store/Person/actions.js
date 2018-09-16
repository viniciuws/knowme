import * as Mutations from '../mutations';

export default {
  setPerson({ commit }, person) {
    commit(Mutations.SET_PERSON, person);
  },
};
