import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('games', function() {
    this.route('game', {path: ':id'});
    this.route('create');
  });
  this.route('my-game');
});

export default Router;
