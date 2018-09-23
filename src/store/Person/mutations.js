import * as Mutations from '../mutations';
import PersonEntity from '../../models/Person/PersonEntity';

export default {
  [Mutations.SET_PERSON](store, person) {
    const personObj = new PersonEntity(person);
    // eslint-disable-next-line
    store.person = personObj;
  },
};
