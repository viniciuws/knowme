import * as Mutations from '../mutations';

export default {
  [Mutations.SET_PERSON](store, person) {
    // eslint-disable-next-line
    store.person = person;
  },
};