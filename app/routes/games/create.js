import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    create() {
      var route = this,
      controller = this.get('controller');
      var game = this.store.createRecord('game',
        controller.getProperties('title', 'description'))
      game.save().then(function() {
        route.transitionTo('games.game', game);
      });
    }
  }
});
