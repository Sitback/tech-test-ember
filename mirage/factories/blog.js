import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  title: faker.hacker.phrase,
  subtitle: faker.lorem.sentence,
  body: faker.lorem.paragraphs(4),
  image: faker.image.nature(640, 360, true),
  date: faker.date.past(),
  slug(i) { return `title-${i}`; }
});
