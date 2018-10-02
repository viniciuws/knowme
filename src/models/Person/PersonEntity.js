import SkillEntity from '../Skills/SkillsEntity';

export default class PersonEntity {
  constructor(obj) {
    this.id = obj.id;
    this.avatar = obj.avatar;
    this.name = obj.name;
    this.birth = obj.birth;
    this.summary = obj.summary;
    this.profession = obj.profession;
    this.genre = obj.genre;
    this.fullSummary = obj.fullSummary;
    this.email = obj.email;
    this.experience = obj.experience;
    this.twitter = obj.twitter;
    this.github = obj.github;
    this.linkedin = obj.linkedin;
    this.skills = obj.skills.map(skill => new SkillEntity(skill));
  }
}
