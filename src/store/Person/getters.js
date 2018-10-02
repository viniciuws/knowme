export default {
  avatar: store => store.person.avatar || {},
  person: store => store.person || {},
  skills: store => store.person.skills || {},
};
