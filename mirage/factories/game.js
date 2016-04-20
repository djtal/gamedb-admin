import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  title: faker.commerce.product,
  description: faker.lorem.paragraph,
  minPlayer: faker.random.number,
  maxPlayer: faker.random.number
});
