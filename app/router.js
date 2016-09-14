import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('blog', { 'path': 'blog'});
  this.route('blog-detail', { 'path': 'blog/:slug'});
});

export default Router;
