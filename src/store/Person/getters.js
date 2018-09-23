export default {
  person: store => store.person || {},
  skills: store => store.person.skills || {},
};