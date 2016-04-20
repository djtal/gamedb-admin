import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  minPlayer: DS.attr('number'),
  maxPlayer: DS.attr('number'),
  age_po: DS.attr('number')
});
