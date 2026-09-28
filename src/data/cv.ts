import { person } from './person';
import { education } from './education';
import { experience } from './experience';
import { leadership } from './leadership';
import { institutions } from './institutions';
import { work } from './work';
import { media } from './media';

// The cv entity is a composed view over the core entities per DATA.md specifications
export const cv = {
  profile: person.shortBiography,
  fullName: person.fullName,
  nepaliName: person.nepaliName,
  title: person.professionalTitle,
  education: education,
  experience: experience,
  leadership: leadership,
  organizations: institutions,
  researchDomain: work.filter(w => w.category === 'research' || w.category === 'mathematics'),
  internationalEngagement: leadership.filter(l => l.relatedInitiativeId === 'tisf-delegation'),
  selectedMedia: media.slice(0, 4)
};
