import Ember from 'ember';

export default Ember.Route.extend({
  model() {
     return this.store.findAll('game');
  },

  actions: {
    addToCollection(game){
      var controller = this.get('controller');
      var my = this.store.createRecord('myGame', { game: game });
      my.save().then(function(){

      });
    }
  }
});
